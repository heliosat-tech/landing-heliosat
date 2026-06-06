/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        // Deep navy / near-black surfaces
        ink: '#05070E', // page background
        void: '#03050A', // deepest sections
        panel: '#0A0F1E', // raised surface
        panel2: '#0E1426', // raised surface, lighter
        // Single accent: warm "solar" amber (Helios)
        solar: {
          300: '#FFD79B',
          400: '#FFBE6B',
          500: '#F5A524', // primary accent
          600: '#D9871A',
        },
      },
      fontFamily: {
        sans: [
          '"Inter Variable"',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Consolas',
          'Liberation Mono',
          'monospace',
        ],
      },
      maxWidth: {
        content: '72rem',
      },
      letterSpacing: {
        label: '0.18em',
      },
      keyframes: {
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 80s linear infinite',
        float: 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
