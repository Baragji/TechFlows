'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { validateImageSrc, generatePlaceholderDataURL } from '@/utils/imageValidation';

interface SafeImageProps extends Omit<ImageProps, 'src'> {
  src: string | undefined | null;
  fallbackSrc?: string;
  showPlaceholder?: boolean;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  fallbackSrc,
  showPlaceholder = true,
  alt,
  width,
  height,
  className,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(() => validateImageSrc(src));
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      if (fallbackSrc) {
        setImageSrc(fallbackSrc);
      } else if (showPlaceholder && typeof width === 'number' && typeof height === 'number') {
        setImageSrc(generatePlaceholderDataURL(width, height, alt || 'Image'));
      }
    }
  };

  // If no valid src and no fallback, render placeholder div
  if (!imageSrc && !showPlaceholder) {
    return null;
  }

  if (!imageSrc && showPlaceholder) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className || ''}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">{alt || 'Image'}</span>
      </div>
    );
  }

  return (
    <Image
      src={imageSrc || '/images/placeholder.svg'}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      {...props}
    />
  );
};

export default SafeImage;
