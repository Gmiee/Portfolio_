/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        surface:'#f6f6f7',
        bp:"#222222",
        gray5:'#c7c7c7',
        gray8:'#909090',
        gray9:'#e9e9e9',
        avail:'#4FD64C'
        
      },
      fontFamily: {
        sans: ['sans','serif'],
        rubik:['Rubik'],
        serif: ['Georgia', 'serif'],
      },
      fontWeight: {
        thin: 100,
      },
    },
  },
  plugins: [],
}
