/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Isso avisa o Tailwind para ler as classes do seu App.tsx, etc.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}