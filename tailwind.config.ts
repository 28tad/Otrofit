import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        gray: '#34353A',
        blue: '#6169FF',
        white: '#FFFFFF',
        light: '#F5F5F5',
        red: '#FF0000',
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
    },
    screens: {
      xs: '0px',
      md: '560px',
      lg: '1070px',
    },
    borderRadius: {
      '8': '8px',
    },
  },
  plugins: [],
} satisfies Config
