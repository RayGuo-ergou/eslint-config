// eslint.config.js
import antfu from '@antfu/eslint-config'

// Export the config function in case I have to customize it
export { antfu as ray }

// Default config
export const defaultConfig: Parameters<typeof antfu>[0] = {
  ignores: ['./fixtures', 'components.d.ts', 'nuxt.d.ts', 'dist', '.nuxt', 'node_modules', '.output'],
  unocss: true,
}

// Default export is the config should use in most of my projects
export default antfu(defaultConfig)
