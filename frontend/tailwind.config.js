/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      "chat-dark": "#2F3136",
      "chat-green": "#00B894",
    },
  },
  plugins: [],
};
