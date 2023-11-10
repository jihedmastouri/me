/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation:{
        'bounce-small': 'bounce cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
