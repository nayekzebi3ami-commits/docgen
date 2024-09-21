module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  important: true,

  theme: {
    extend: {},
  },
  safelist: [
    {
      pattern: /text-(red|green|blue|yellow|purple|pink|gray|indigo|orange|teal|cyan|rose)-[1-9]00/,
    },
    {
      pattern: /bg-(red|green|blue|yellow|purple|pink|gray|indigo|orange|teal|cyan|rose)-[1-9]00/,
    },
    {
      pattern: /border-(red|green|blue|yellow|purple|pink|gray|indigo|orange|teal|cyan|rose)-[1-9]00/,
    }
  ],
  plugins: [],
}
