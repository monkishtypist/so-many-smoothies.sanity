// components/ImageWithGenerateButton.tsx
import React, { useState } from 'react';
import { useFormValue } from 'sanity';
import { useToast } from '@sanity/ui';
import { FormField } from '@sanity/base/components';

const ImageWithGenerateButton = React.forwardRef((props, ref) => {
  const { type, value, onChange } = props;
  const imagePrompt = useFormValue(['imagePrompt']);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleGenerateImage = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: imagePrompt }),
      });
      const data = await response.json();
      if (data.imageAssetId) {
        onChange({ _type: 'image', asset: { _ref: data.imageAssetId } });
        toast.push({ status: 'success', title: 'Image generated successfully!' });
      } else {
        throw new Error('Image generation failed.');
      }
    } catch (error) {
      console.error(error);
      toast.push({ status: 'error', title: 'Error generating image.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormField label={type.title}>
      {/* Render the default image input */}
      {props.renderDefault(props)}
      <button type="button" onClick={handleGenerateImage} disabled={loading}>
        {loading ? 'Generating...' : 'Generate New Image'}
      </button>
    </FormField>
  );
});

export default ImageWithGenerateButton;
