import type { Config } from 'tailwindcss'

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
      keyframes: {
        sideBar: {
          '0%': {
            width: '0',
          },
          '25%': {
            width: '50px'
          },
          '50%': {
            width: '150px'
          },
          '100%': {
            width: '300px'
          }
        },
      },
      animation: {
        sideBar: 'sideBar 0.3s ease-in-out',
      }
      
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
export default config
