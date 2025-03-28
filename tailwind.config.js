/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Next.js 페이지 폴더
    "./components/**/*.{js,ts,jsx,tsx}", // Next.js 컴포넌트 폴더
    "./app/**/*.{js,ts,jsx,tsx}", // Next.js 13+ 버전의 app 폴더
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
