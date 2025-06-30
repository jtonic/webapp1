import globals from 'globals';
import js from '@eslint/js';

export default [
  js.configs.recommended, // Applies the recommended rules
  {
    files: ['src/**/*.js'], // Specify which files this configuration applies to
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // You can add custom rules or override recommended ones here
      // For example, to enforce 2-space indentation:
      // "indent": ["error", 2],
      // To allow console.log for development (disabling a recommended rule):
      // "no-console": "off"
    },
  },
];
