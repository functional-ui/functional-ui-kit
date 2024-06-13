import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: {
        'style': resolve(__dirname, 'src/css/main.css'),
        'fui-button': resolve(__dirname, 'src/components/fui-button/fui-button.tsx'),
        'fui-checkbox': resolve(__dirname, 'src/components/fui-checkbox/fui-checkbox.tsx'),
        'fui-popover': resolve(__dirname, 'src/components/fui-popover/fui-popover.tsx'),
        'fui-select': resolve(__dirname, 'src/components/fui-select/fui-select.tsx'),
        'fui-badge': resolve(__dirname, 'src/components/fui-badge/fui-badge.tsx'),
        'fui-radio': resolve(__dirname, 'src/components/fui-radio/fui-radio.tsx'),
        'fui-tooltip': resolve(__dirname, 'src/components/fui-tooltip/fui-tooltip.tsx'),
        'fui-text-input': resolve(__dirname, 'src/components/fui-text-input/fui-text-input.tsx'),
        'fui-switch': resolve(__dirname, 'src/components/fui-switch/fui-switch.tsx'),
        'fui-status-message': resolve(__dirname, 'src/components/fui-status-message/fui-status-message.tsx'),
        'fui-stepper': resolve(__dirname, 'src/components/fui-stepper/fui-stepper.tsx'),
        'fui-toggle': resolve(__dirname, 'src/components/fui-toggle/fui-toggle.tsx'),
        'fui-empty': resolve(__dirname, 'src/components/fui-empty/fui-empty.tsx'),
        'fui-notification': resolve(__dirname, 'src/components/fui-notification/fui-notification.tsx'),
        'fui-modal': resolve(__dirname, 'src/components/fui-modal/fui-modal.tsx'),
        'fui-option-group': resolve(__dirname, 'src/components/fui-option-group/fui-option-group.tsx'),
      },
      fileName: '[name]/index',
      formats: ['cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  plugins: [dts({
    include: 'src/components/*/*.{ts,tsx}',
    exclude: ['src/components/**/*.stories.{ts,tsx}'],
    beforeWriteFile: (filePath, content) => ({
      filePath: filePath.replace(/fui(-[a-z]+)+.d.ts/, 'index.d.ts').replace(/components\//, ''),
      content,
    }),
  })],
});