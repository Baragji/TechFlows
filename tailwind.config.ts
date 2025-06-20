import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'obsidian-nav': 'rgba(35,35,40,0.6)',   // 60 % opacity mørkegrå
        // Obsidian-inspired color palette matching HTML example
        obsidian: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#9a9a9a',
          600: '#818181',
          700: '#6a6a6a',
          800: '#5a5a5a',
          900: '#4a4a4a',
          950: '#1a1a1a',
          // Exact colors from HTML example
          dark: '#0a0a0a',
          darker: 'rgb(20, 20, 25)', // --background-overlay base color
          medium: 'rgb(35, 35, 40)', // Navigation background base color
          light: '#3a3a3a',
          lighter: '#4a4a4a',
          // Glass overlay colors from HTML example
          overlay: 'rgba(20, 20, 25, 0.7)', // --background-overlay
          nav: 'rgba(35, 35, 40, 0.95)', // Navigation default - much more opaque
          'nav-scrolled': 'rgba(35, 35, 40, 0.98)', // Navigation when scrolled - almost solid
          'nav-hover': 'rgba(30, 30, 35, 0.95)', // Dropdown background - much more opaque
        },
        primary: {
          DEFAULT: '#1a1a1a',
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#9a9a9a',
          600: '#818181',
          700: '#6a6a6a',
          800: '#5a5a5a',
          900: '#4a4a4a',
          950: '#1a1a1a',
        },
        accent: {
          DEFAULT: '#3b82f6', // Tilføj en standard accent farve
          blue: '#3b82f6',
          green: '#10b981',
          purple: '#8b5cf6',
          orange: '#f59e0b',
          gold: '#f59e0b',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.1)', // Exact border color from HTML
          medium: 'rgba(255, 255, 255, 0.2)',
          strong: 'rgba(255, 255, 255, 0.4)', // --border-color from HTML
          dark: 'rgba(0, 0, 0, 0.1)',
          darker: 'rgba(0, 0, 0, 0.2)',
        },
        // Legacy colors for backward compatibility
        secondary: {
          DEFAULT: '#2a9d8f',
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#2a9d8f',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        hover: '#f76c6c',
        success: '#2a9d8f',
        'text-dark': '#1a1a1a',        // High contrast (16:1 ratio) - WCAG AAA compliant
        'text-light': '#4a5568',       // Updated for WCAG AA compliance (7.5:1 ratio)
        'background-light': '#f8f8f8',
        'border-color': '#e4e4e4',
        'border': '#e4e4e4', // Tilføj border farve
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'hero-sm': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display': ['5rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-hover': '0 8px 32px 0 rgba(31, 38, 135, 0.5)',
        'obsidian': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'obsidian-lg': '0 35px 60px -12px rgba(0, 0, 0, 0.3)',
        'custom': '0 2px 10px rgba(0, 0, 0, 0.1)',
        'custom-hover': '0 4px 20px rgba(0, 0, 0, 0.15)',
      },
      backdropBlur: {
        'navbar': '15px', // Exact value from HTML example
        'glass': '16px',
        'hero': '8px', // Hero content blur from HTML example
        '20': '20px',      // sikrer utility `backdrop-blur-[20px]`
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s ease-in-out',
        'fade-in-up': 'fadeInUp 1s ease forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'slide-up': 'slideUp 0.6s ease forwards',
        'scale-in': 'scaleIn 0.5s ease forwards',
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'blob': 'blob 7s infinite',
        'text-reveal': 'textReveal 0.8s ease forwards',
        'gradient-shift': 'gradientShift 3s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)',
          },
          '50%': {
            transform: 'translateY(-20px) rotate(5deg)',
          },
        },
        shimmer: {
          '0%': {
            transform: 'translateX(-100%) translateY(-100%) rotate(45deg)',
          },
          '100%': {
            transform: 'translateX(100%) translateY(100%) rotate(45deg)',
          },
        },
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        scaleIn: {
          'from': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          'to': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        textReveal: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px) rotateX(-90deg)',
            filter: 'blur(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) rotateX(0deg)',
            filter: 'blur(0px)',
          },
        },
        gradientShift: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

export default config
