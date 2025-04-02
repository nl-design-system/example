/**
 * @type {import('prettier').Config}
 */
export default {
  // Use a printWith of 120 characters which is different from the default 80
  printWidth: 120,
  // Use single quotes (') instead of the default double quotes ("), but see below.
  singleQuote: true,
  // Overrides for the deviations from the defaults above
  overrides: [
    {
      // for YAML files:
      files: ['*.yml', '*.yaml'],
      options: {
        // Use double quotes (")
        singleQuote: false,
      },
    },
    {
      // for CSS and SCSS files:
      files: ['*.css', '*.scss'],
      options: {
        // Use double quotes (")
        singleQuote: false,
      },
    },
  ],
};
