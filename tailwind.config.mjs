/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js',
  ],

  theme: {
    extend: {
      screens: {
        sm: '590px',
        md: '767px',
        lg: '992px',
        xl: '1230px',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
  important: true,
};
