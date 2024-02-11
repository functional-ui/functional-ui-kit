<img width="100%" alt="functional-ui-kit-cover" src="https://github.com/functional-ui/functional-ui-kit/assets/10652039/fa34ae50-ae9b-4af7-bcce-ca5393f496f0"/>

<ul>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white" />
</ul>

# Welcome to Functional UI Kit

Functional UI Kit is a professionally crafted design system for design & development teams and individuals. We provide core components you would need in every project, focusing on accessibility, development experience and unified designer-developer experience.

We've made sure that Figma variables and CSS variables work together effortlessly. They share the same names, usage and inheritance structure. This isn't just an extra feature; it's the core approach.

Each Figma variable has a direct counterpart in CSS, so there's no confusion. Your design ideas stay crystal clear as you move into the development phase.

<ul>
  <li>Website: www.functional-ui-kit.com</li>
  <li>Storybook: https://functional-ui.github.io/functional-ui-kit</li>
  <li>Github: www.github.com/functional-ui/functional-ui-kit</li>
  <li>Npm: www.npmjs.com/package/functional-ui-kit</li>
</ul>


# Setup
### Install
Install the latest version from NPM.
```
npm install functional-ui-kit
```

### Setup CSS
Import the functional-ui-kit CSS file into your project in your css file
```css
@import 'functional-ui-kit/style';

html {
  ...
```
you can also import the CSS file directly into your main React App file
```js
import React, { Component } from 'react'
import 'functional-ui-kit/style';

class App extends Component {
  ...
```

### Customizing Theme
You can customize the theme by overriding the CSS variables. You can find the list of variables in the [theme file](https:\/\/github.com/functional-ui/functional-ui-kit/blob/main/src/css/theme-colors.css)
```css
:root {
  --fui-color-brand: var(--fui-color-green-700);
}

[data-theme="dark"],
[data-theme="dark"] * {
  --fui-color-brand: var(--fui-color-green-500);
}
...
```

### Using Components
You can use the components by importing them into your React App file
```js
import React, { Component } from 'react'
import { FuiBadge } from 'functional-ui-kit/fui-badge';

function App() {
  return (
    <div>
      <FuiBadge label='label' />
    </div>
  );
}
```
