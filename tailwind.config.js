import { THEMES } from './src/constants/constants'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      ...THEMES,
      {
        ['sean']: {
          primary: '#004225',
          secondary: '#3d4451',
          accent: '#668d7c',
          neutral: '#818589',
          'base-100': '#e5ece9',
          'base-200': '#b2c6bd',
          'base-300': '#326750',
          info: '#B2BEB5',
          success: '#547e61',

          '--rounded-box': '10rem', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '10rem', // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
          '--animation-btn': '0.25s', // duration of animation when you click on button
          '--animation-input': '1s', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-focus-scale': '0.55', // scale transform of button when you focus on it
          '--border-btn': '1px', // border width of buttons
          '--tab-border': '1px', // border width of tabs
          '--tab-radius': '0.5rem', // border radius of tabs
        },
      },
    ],
  },
}
