// TODO:typescript config file support in in rfcs stage
// Can remove after that been published
// See https://github.com/eslint/rfcs/pull/117
// https://github.com/eslint/eslint/pull/18134
import JITI from 'jiti'

const jiti = JITI(import.meta.url)
/**
 * @type {import('./src').default}
 */
const ray = jiti('./src').default

export default ray
