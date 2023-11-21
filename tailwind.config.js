/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    screens: {
      "smallPhone": "300px",
      "mobile": "481px",
      "tablet": "768px",
      "Ltablet": "992px",
      "desktop": "1300px"
    },
    extend: {},
  },
  plugins: [],
}

