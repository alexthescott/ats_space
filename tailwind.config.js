module.exports = {
  content: ["./src/**/*.{html,js}", "./src/**/**/*.{html,js}"],
  safelist: [{
    pattern: /hljs+/,
  }],
  theme: {
    extend: {
      transitionDuration: {
        '800': '800ms',
        '900': '900ms',
        '1200': '1200ms'
      }
    },
    hljs: {
      theme: 'tomorrow-night-bright',
    },
  },
  plugins: [require('tailwind-highlightjs')],
}
