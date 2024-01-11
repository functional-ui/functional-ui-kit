import { addons } from '@storybook/manager-api';
import yourTheme from './YourTheme';


const getCssVarStringValue = (varName) => getComputedStyle(document.documentElement).getPropertyValue(varName);

addons.setConfig({
  theme: yourTheme
});