/** @type { import('@storybook/react').Preview } */
let preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  // tags: ["autodocs"]
};

export default preview;