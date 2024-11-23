import {defineConfig} from 'sanity'
import {media} from 'sanity-plugin-media'
import {schemaTypes} from './schemaTypes'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'So Many Smoothies',

  projectId: 'aljzgkam',
  dataset: 'production',

  plugins: [media(), structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
