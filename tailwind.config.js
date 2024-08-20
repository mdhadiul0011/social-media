/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      main_color: "var(--main_color)",
      page_color: "var(--page_color)",
      input_color: "var(--input_color)",
      line_color: "var(--line_color)",
      primary_bg: "var(--primary_bg)",
      single_color: "var(--single_color)",
      secondary_bg: "var(--secondary_bg)",
      hover_color: "var(--hover_color)",
      blur: "var(--blur)",
      text_color: "var(--text-color)",
      primary_color: "var(--primary-color)",
      secondary_color: "var(--secondary-color)",
      title_color: "var(--title-color)",
      black: "var(--black)",
      white: "var(--white)",
      green: "var(--green)",
      blue: "var(--blue)",
      red: "var(--red)",
      yeollow: "var(--yeollow)",
      "purple-100": "var(--purple-100)",
      "pink-100": "var(--pink-100)",
      "cayan-100": "var(--cayan-100)",
      transparent: "transparent"
    },
    fontFamily: {
     opensans: ["'Open Sans', sans-serif"]
    },
    extend: {
      screens: {
        xs: "350px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400",
      },
      container: {
        center: true
      }
    },
  },
  plugins: [],
}


