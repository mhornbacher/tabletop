import React from 'react';

import type { Preview } from "@storybook/react";
import DarkMode from '../src/components/functional/DarkMode';

import '~/src/index.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <DarkMode>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </DarkMode>
    ),
  ],
};

export default preview;
