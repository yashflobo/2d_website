/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Sora Variable"', 'Sora', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        ink: {
          50: '#f4f7fb',
          100: '#e6ebf5',
          200: '#c7d4ea',
          300: '#94abd6',
          400: '#5c7dbe',
          500: '#3857a5',
          600: '#2c4184',
          700: '#253568',
          800: '#1f2a53',
          900: '#1b2445',
          950: '#0f1428',
        },
        aurora: {
          50: '#eefcfb',
          100: '#cff8f5',
          200: '#a0efe8',
          300: '#6fe3d9',
          400: '#3fcfc5',
          500: '#1fb0a8',
          600: '#148a85',
          700: '#13706c',
          800: '#145957',
          900: '#124b49',
          950: '#062b2b',
        },
        dusk: {
          50: '#f4f2ff',
          100: '#e7dfff',
          200: '#ccb8ff',
          300: '#a884ff',
          400: '#8a55ff',
          500: '#7230fd',
          600: '#6419eb',
          700: '#5111c3',
          800: '#3f0f95',
          900: '#340f78',
          950: '#200448',
        },
      },
      boxShadow: {
        'glow-sm': '0 10px 30px rgba(79, 209, 197, 0.25)',
        'glow-md': '0 15px 45px rgba(114, 48, 253, 0.25)',
      },
      backgroundImage: {
        'grid-dark':
          'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
        'gradient-aurora':
          'linear-gradient(135deg, rgba(31,176,168,0.25), rgba(114,48,253,0.25))',
      },
    },
  },
  plugins: [],
}
