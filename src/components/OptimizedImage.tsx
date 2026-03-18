import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  fetchPriority?: 'high' | 'low' | 'auto';
  loading?: 'lazy' | 'eager';
  sizes?: string;
  isHero?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  fetchPriority,
  loading = 'lazy',
  sizes = '100vw',
  isHero = false
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Convert "images/hero.jpg" to "images/hero"
  const getBasePath = (path: string) => {
    return path.substring(0, path.lastIndexOf('.')) || path;
  };
  
  const basePath = getBasePath(src);
  
  const srcSet = [
    `${basePath}-480w.webp 480w`,
    `${basePath}-800w.webp 800w`,
    `${basePath}-1200w.webp 1200w`,
    isHero ? `${basePath}-1920w.webp 1920w` : ''
  ].filter(Boolean).join(', ');

  return (
    <picture className="contents w-full h-full">
      <source
        type="image/webp"
        srcSet={srcSet}
        sizes={sizes}
      />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        // @ts-ignore
        fetchPriority={fetchPriority}
        onLoad={() => setIsLoaded(true)}
        className={`${className} ${isLoaded ? '' : 'animate-pulse bg-gray-200 text-transparent'}`}
      />
    </picture>
  );
}
