module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [import('daisyui')],
  daisyui: {
    themes: ['light', 'dark', 'black', 'cyberpunk'],
  },
}
