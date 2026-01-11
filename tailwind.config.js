/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom Element Colors
        'el-wood': '#8b934e',  // 木 綠色
        'el-fire': '#943425',  // 火 紅色
        'el-earth': '#865f41', // 土 棕色
        'el-metal': '#deab47', // 金 黃色
        'el-water': '#589da9', // 水 藍色
      },
    },
  },
  plugins: [],
}