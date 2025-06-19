// TechFlow Color System - Centralized color management
export const colors = {
  // Primary brand colors
  primary: {
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
  
  // Obsidian theme colors
  obsidian: {
    dark: '#0a0a0a',
    darker: 'rgb(20, 20, 25)',
    medium: 'rgb(35, 35, 40)',
    light: '#3a3a3a',
    lighter: '#4a4a4a',
    overlay: 'rgba(20, 20, 25, 0.7)',
    nav: 'rgba(35, 35, 40, 0.95)',
    navScrolled: 'rgba(35, 35, 40, 0.98)',
    navHover: 'rgba(30, 30, 35, 0.95)',
  },
  
  // Accent colors
  accent: {
    blue: '#3b82f6',
    green: '#10b981',
    purple: '#8b5cf6',
    orange: '#f59e0b',
    gold: '#f59e0b',
  },
  
  // Glass morphism colors
  glass: {
    light: 'rgba(255, 255, 255, 0.1)',
    medium: 'rgba(255, 255, 255, 0.2)',
    strong: 'rgba(255, 255, 255, 0.4)',
    dark: 'rgba(0, 0, 0, 0.1)',
    darker: 'rgba(0, 0, 0, 0.2)',
  },
  
  // Semantic colors
  semantic: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
  
  // Text colors
  text: {
    primary: '#ffffff',
    secondary: 'rgba(255, 255, 255, 0.7)',
    tertiary: 'rgba(255, 255, 255, 0.5)',
    inverse: '#1a1a1a',
  },
} as const;

// Color utility functions
export const getColorValue = (colorPath: string): string => {
  const keys = colorPath.split('.');
  let value: any = colors;
  
  for (const key of keys) {
    value = value[key];
    if (value === undefined) {
      console.warn(`Color path "${colorPath}" not found`);
      return '#000000';
    }
  }
  
  return value;
};

// Gradient utilities
export const gradients = {
  primary: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
  success: 'linear-gradient(135deg, #10b981, #3b82f6)',
  warning: 'linear-gradient(135deg, #f59e0b, #ef4444)',
  glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
} as const;

export default colors;
