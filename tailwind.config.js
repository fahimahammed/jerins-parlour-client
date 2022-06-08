module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F63E7B",
          secondary: "#FFFFFF",
          accent: "#FFEDE9",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      
    ],
  },
}
