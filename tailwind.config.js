/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#f6f6f7",
        bp: "#222222",
        gray5: "#c7c7c7",
        gray8: "#909090",
        gray9: "#e9e9e9",
        avail: "#4FD64C",
        surface2: "#0A0A0A",
        blk: "#212121",
        color: "#fff",
      },
      fontWeight: {
        thin: 100,
      },
      cursor :{
        custom : 'url("/rocket.png"), auto',
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
