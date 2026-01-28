import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fffef0',
          100: '#fffce0',
          200: '#fff8c0',
          300: '#fff4a0',
          400: '#ffe850',
          500: '#FDD000', // イエロー: R253G208B0
          600: '#F5B800',
          700: '#F08300', // オレンジ: R240G131B0
          800: '#E07500',
          900: '#D06600',
        },
        gray: {
          50: '#f9f9f9',
          100: '#f0f0f0',
          200: '#e0e0e0',
          300: '#c0c0c0',
          400: '#999999',
          500: '#666666',
          600: '#4d4d4d',
          700: '#404040',
          800: '#333333', // テキスト用: R51G51B51
          900: '#1a1a1a',
        },
      },
    },
  },
  plugins: [],
}
export default config
