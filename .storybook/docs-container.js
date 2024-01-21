import React from "react";
import { DocsContainer as BaseContainer } from "@storybook/addon-docs/blocks";
import { useDarkMode } from "storybook-dark-mode";
import { themes } from "@storybook/theming";

export const DocsContainer = ({ children, ...rest }) => {
  const dark = useDarkMode();

  return (
    <BaseContainer {...rest} theme={dark ? themes.dark : themes.light}>
      {children}
    </BaseContainer>
  );
};