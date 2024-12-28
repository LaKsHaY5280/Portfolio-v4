import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          dark: "#223030",    // Deep forest green
          brown: "#523D35",   // Rich earth brown
          sage: "#959D90",    // Muted sage green
          sand: "#BBA58F",    // Warm sand
          cream: "#E8D9CD",   // Soft cream
          light: "#EFEFE9",   // Light neutral
        },
      },
      fontFamily: {
        'gemola': ['Gemola', 'cursive'],
        'al': ['AL', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-.075em',
        'tighter': '-.05em',
        'normal': '0',
        'wide': '.025em',
        'wider': '.05em',
        'widest': '.25em',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.025em' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.0125em' }],
        'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0.00625em' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0.00375em' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '0' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.00625em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.0125em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.025em' }],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
