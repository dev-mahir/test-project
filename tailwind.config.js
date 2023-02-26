/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ' "DM Sans", sans-serif',
        secondary: '"ABeeZee", sans-serif',
        poppins: "'Poppins', sans-serif",
        gabriela: "'Gabriela', serif",
        lusitana: "'Lusitana', serif'",
      },
    },
  },
  plugins: [],
};
