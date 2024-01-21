/**
 * @type import('eslint').Linter.Config[]
 * Global configuration object for eslint. Rules in this object are applied
 * to all files.
 */
const globalConfigObjects = [
  {
    ignores: ['**/dist'],
  },
];

export default globalConfigObjects;
