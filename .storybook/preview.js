import '../src/css/main.css';
import { themes } from '@storybook/theming';

const withThemeProvider = (Story, context) => {
  document.body.setAttribute('data-theme', context.globals.theme);
  return Story();
};

const preview = {
  decorators: [withThemeProvider],
  parameters: {
    backgrounds: { disable: true },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark,
    }, 
  },
  globalTypes: {
    theme: {
      description: 'Functional UI Kit theme',
      defaultValue: 'dark',
      toolbar: {
        items: [{ value: 'light', icon: 'sun', title: 'light' }, { value: 'dark', icon: 'moon', title: 'dark' }],
      },
    },
  },

};

export default preview;
