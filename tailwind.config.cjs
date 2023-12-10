/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        customPulse: {
          '0%, 100%': {
            opacity: '0.1',
          },
          '50%': {
            opacity: '0.5',
          },
        },
      },
      animation: {
        'bounce-small': 'bounce 5s infinite',
        'pulse-small': 'customPulse cubic-bezier(0.4, 0, 0.6, 1) 5s infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
