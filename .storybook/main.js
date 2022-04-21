module.exports = {
  "stories": [
    "../src/**/*.stories.ts"
  ],
  "addons": [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-ng-source-addon',
    'storycap'
  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}
