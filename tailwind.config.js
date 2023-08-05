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
          100: '#c8c3ec',
          200: '#908CAA',
          300: '#3a355e',
          400: '#2A273F',
          500: '#232136',
          700: '#1f1d30',
          800: '#1c1a2b',
          900: '#12101b'
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
  ]
}
