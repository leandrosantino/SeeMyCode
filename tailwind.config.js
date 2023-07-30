/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
      colors: {
        app: {
          200: '#908CAA',
          400: '#2A273F',
          500: '#232136',
          800: '#1c1a2b'
        },


      },
      gridTemplateColumns: {
        editor: '3rem 13rem 1fr'
      }
    }

  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')
  ],
}
