import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

const getCssVarStringValue = (varName) => getComputedStyle(document.documentElement).getPropertyValue(varName);

addons.setConfig({
  theme: {
    // colorPrimary: getCssVarStringValue('--fui-color-brand'),
    // colorSecondary: '#2856E0',
    // appBg: getCssVarStringValue('--fui-color-surface-subdued'),
    fontBase: '"Inter", sans-serif',
    fontCode: '"IBM Plex Mono", monospace',
    // appContentBg: getCssVarStringValue('--fui-color-surface-base'),
    // // appBorderColor: getCssVarStringValue('--fui-color-divider-solid'),
    // appBorderRadius: getComputedStyle(document.documentElement).getPropertyValue('--fui-border-radius-lg'),
    // textColor: getCssVarStringValue('--fui-color-foreground-default'),
    // textInverseColor: getCssVarStringValue('--fui-color-foreground-inverted'),
    // // textMutedColor: getCssVarStringValue('--fui-color-foreground-soft'),
    // barTextColor: getCssVarStringValue('--fui-color-foreground-default'),
    // barSelectedColor: getCssVarStringValue('--fui-color-foreground-primary'),
    // barBg: getCssVarStringValue('--fui-color-background-elevated'),
    // buttonBg: getCssVarStringValue('--fui-disableable-color-button-primary-bg-neutral'),
    // buttonBorder: getCssVarStringValue('--fui-disableable-color-button-secondary-border-neutral'),
    // booleanBg: getCssVarStringValue('--fui-disableable-color-background-subdued'),
    // booleanSelectedBg: getCssVarStringValue('--fui-disableable-color-brand'),
    // inputBg: getCssVarStringValue('--fui-disableable-color-background-base'),
    // inputBorder: getCssVarStringValue('--fui-disableable-color-divider-solid'),
    // inputTextColor: getCssVarStringValue('--fui-color-foreground-default'),
    // inputBorderRadius: getCssVarStringValue('--fui-border-radius-md'),
    // brandTitle: 'Functional UI Kit',
    // brandUrl: 'https://functional-ui-kit.framer.website/',
    // brandImage: 'https://framerusercontent.com/images/tVkfz6i8rL4iFXxNlvKJhZuM.png',
    // brandTarget: '_self',
  }
});