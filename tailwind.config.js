/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '390px',    // Small devices (phones)
        'md': '1024px',   // Medium devices (tablets)
        'lg': '1280px',   // Large devices (laptops)
        'xl': '1920px',   // Extra large devices (desktops)
      },
    },
  },
  plugins: [],
}
