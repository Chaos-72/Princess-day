import { useState, type CSSProperties } from 'react';
import { Flower2 } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  fallbackTitle?: string;
  objectPosition?: string;
  rotate?: 0 | -90 | 90;
  scale?: number;
  priority?: boolean;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  fallbackTitle,
  objectPosition = '50% 50%',
  rotate = 0,
  scale = 1,
  priority = false,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F8E8EC] via-[#FCF8F4] to-[#F3E9DF] p-6 text-center ${className}`}
      >
        <Flower2 className="mb-3 h-7 w-7 text-[#BA8763]" strokeWidth={1.5} />
        <p className="font-display text-lg italic text-[#5F263B]">
          {fallbackTitle || alt}
        </p>
      </div>
    );
  }

  const isRotatedQuarterTurn = rotate === -90 || rotate === 90;

  if (isRotatedQuarterTurn) {
    const rotatedImgStyle: CSSProperties = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '100cqh',
      height: '100cqw',
      maxWidth: 'none',
      objectFit: 'cover',
      objectPosition,
      transform: `translate(-50%, -50%) rotate(${rotate}deg) scale(${scale})`,
    };

    return (
      <div
        className={`relative overflow-hidden bg-[#F6EFE8] [container-type:size] ${className}`}
      >
        {!loaded && (
          <div
            aria-hidden="true"
            className="absolute inset-0 animate-pulse bg-gradient-to-br from-[#F8E8EC]/60 via-[#FCF8F4] to-[#F3E9DF]/60"
          />
        )}
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          onLoad={() => setLoaded(true)}
          onError={() => setHasError(true)}
          style={rotatedImgStyle}
          className={`transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
        />
      </div>
    );
  }

  const standardImgStyle: CSSProperties = {
    objectPosition,
    transform: scale !== 1 ? `scale(${scale})` : undefined,
  };

  return (
    <div className={`relative overflow-hidden bg-[#F6EFE8] ${className}`}>
      {!loaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-pulse bg-gradient-to-br from-[#F8E8EC]/60 via-[#FCF8F4] to-[#F3E9DF]/60"
        />
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setLoaded(true)}
        onError={() => setHasError(true)}
        style={standardImgStyle}
        className={`h-full w-full object-cover transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${imgClassName}`}
      />
    </div>
  );
}
