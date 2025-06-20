import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { dimensions: string[] } }
) {
  const { dimensions } = params;

  // Parse dimensions (e.g., "800/400" or "800x400")
  let width = 800;
  let height = 400;

  if (dimensions.length >= 2) {
    width = parseInt(dimensions[0]) || 800;
    height = parseInt(dimensions[1]) || 400;
  } else if (dimensions.length === 1) {
    const parts = dimensions[0].split(/[x×]/);
    if (parts.length === 2) {
      width = parseInt(parts[0]) || 800;
      height = parseInt(parts[1]) || 400;
    } else {
      // Square image
      width = height = parseInt(dimensions[0]) || 400;
    }
  }

  // Limit size for security
  width = Math.min(Math.max(width, 1), 2000);
  height = Math.min(Math.max(height, 1), 2000);

  // Generate SVG placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)"/>
      <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle"
        fill="white"
        font-family="Arial, sans-serif"
        font-size="${Math.min(width, height) / 10}px"
        opacity="0.8"
      >
        ${width} × ${height}
      </text>
    </svg>
  `;

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  });
}
