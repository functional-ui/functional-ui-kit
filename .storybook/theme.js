// .storybook/YourTheme.js

import { create } from '@storybook/theming/create';

const getCssVarStringValue = (varName) => getComputedStyle(document.documentElement).getPropertyValue(varName);

export default create({
  base: 'light',
  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: '"IBM Plex Mono", monospace',

  brandTitle: 'Functional UI Kit',
  brandUrl: 'https://functional-ui-kit.com/',
  brandImage: 'https://framerusercontent.com/images/tVkfz6i8rL4iFXxNlvKJhZuM.png',
  brandTarget: '_self',

  //
  colorPrimary: 'red',
  colorSecondary: '#585C6D',

  // UI
  appBg: '#ddd',
  appContentBg: '#ffffff',
  appBorderColor: getCssVarStringValue('--fui-color-divider-soft'),
  appBorderRadius: getCssVarStringValue('--fui-border-radius-xlg'),

  // Text colors
  textColor: '#10162F',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: getCssVarStringValue('--fui-color-divider-solid'),
  inputTextColor: '#10162F',
  inputBorderRadius: getCssVarStringValue('--fui-border-radius-md'),
  colorPrimary: getCssVarStringValue('--fui-color-brand'),
});