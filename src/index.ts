import { antfu } from '@antfu/eslint-config'
import type { OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'

// Export the config function in case I have to customize it
export { antfu as ray }

// Default config
export const defaultConfig: OptionsConfig & TypedFlatConfigItem = {
  name: 'ray/setup',
  ignores: ['./fixtures', 'components.d.ts', 'nuxt.d.ts', 'dist', '.nuxt', 'node_modules', '.output'],
  rules: {
    curly: ['error', 'all'],
  },
  vue: {
    overrides: {
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
    },
  },
}

// Default export is the config should use in most of my projects
export default antfu(defaultConfig) as ReturnType<typeof antfu>
