/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#0098da",

          "secondary": "#10adf1",

          "accent": "#272830",

          "neutral": "#0392cf",

          "base-100": "#F9F8FB",

          "info": "#3A8FD4",

          "success": "#17976C",

          "warning": "#F08C28",

          "error": "#F46783",
        },
      },
      {
dark: {
secondary: "#1F2937",
"base-100": "#121212",
neutral: "#fff",
"base-200": "#1F2937",
"accent": "#F9F8FB",
},
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
