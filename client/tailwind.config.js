/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      mobile: '0px',
      // => @media (min-width: 0px) { ... }
      tablet: '768px',
      // => @media (min-width: 768px) { ... }
      // 'tablet-lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      laptop: '1440px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1920px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  // darkMode: "",
  plugins: [require('daisyui')],
  // 동적 classname 스타일 적용 대상 범위
  safelist: [
    {
      pattern: /bg-./, // ,
    },
    {
      pattern: /text-./, // ,
    },
  ],
};
