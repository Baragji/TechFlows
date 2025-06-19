// Image validation and fallback utilities
export const validateImageSrc = (src: string | undefined | null): string => {
  if (!src || src.trim() === '') {
    return '/images/placeholder.svg';
  }
  
  // Check if it's a valid URL or path
  try {
    if (src.startsWith('http') || src.startsWith('/')) {
      return src;
    }
    return '/images/placeholder.svg';
  } catch {
    return '/images/placeholder.svg';
  }
};

export const getImageWithFallback = (src: string | undefined | null, fallback?: string): string => {
  const validSrc = validateImageSrc(src);
  return validSrc === '/images/placeholder.svg' && fallback ? fallback : validSrc;
};

// Image loading error handler
export const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
  const img = event.currentTarget;
  if (img.src !== '/images/placeholder.svg') {
    img.src = '/images/placeholder.svg';
  }
};

// Generate placeholder data URL
export const generatePlaceholderDataURL = (width: number, height: number, text?: string): string => {
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#1a1a1a"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="14" fill="#ffffff" text-anchor="middle" dy=".3em">${text || 'Image'}</text>
  </svg>`;
  
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
};
