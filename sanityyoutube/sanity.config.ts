// import {defineConfig} from 'sanity'
import {defineConfig} from 'sanity/lib/exports'
import {deskTool} from 'sanity/lib/exports/desk'
import {visionTool} from '@sanity/vision/lib/dts/src'
import {schemaTypes} from './schemas/index'

export default defineConfig({
  name: 'default',
  title: 'medium-2.0',

  projectId: 'c1u6obie',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
