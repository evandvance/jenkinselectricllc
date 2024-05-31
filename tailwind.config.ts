import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        jellcblue: '#0124FE',
        jellcdarkblue: '#011698',
        jellcorange: '#FF7F00',
        jellcyellow: '#FFD300',
        lightgrey: '#D9D9D9',
      },
    },
  },
  plugins: [],
};
export default config;
