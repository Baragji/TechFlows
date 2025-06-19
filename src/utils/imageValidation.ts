/**
 * Validates an image source to ensure it's not empty or invalid
 * @param src The image source URL
 * @returns A valid image source or null
 */
export const validateImageSrc = (src: string | null | undefined): string | null => {
  // If src is null, undefined, or empty string, return null
  if (!src || src.trim() === '') {
    return null;
  }
  
  // Return the valid src
  return src;
};

/**
 * Generates a data URL for a placeholder image with text
 * @param width Width of the placeholder
 * @param height Height of the placeholder
 * @param text Text to display in the placeholder
 * @returns A data URL for a placeholder image
 */
export const generatePlaceholderDataURL = (
  width: number, 
  height: number, 
  text: string = 'Image'
): string => {
  // Simple SVG placeholder
  const svg = `
    <svg width="${width}" height="${height}" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 ${width} ${height}" 
      preserveAspectRatio="none">
      <rect width="100%" height="100%" fill="#cccccc" />
      <text 
        x="50%" 
        y="50%" 
        dominant-baseline="middle" 
        text-anchor="middle" 
        font-family="sans-serif" 
        font-size="14" 
        fill="#333333">
        ${text}
      </text>
    </svg>
  `;
  
  // Convert SVG to base64 data URL
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
};
