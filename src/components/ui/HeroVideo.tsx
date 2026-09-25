import React, { useState, useRef, useEffect } from 'react';

interface HeroVideoProps {
  videoUrl?: string;
  posterUrl: string;
  altText: string;
  overlayOpacity?: string;
  className?: string;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({
  videoUrl,
  posterUrl,
  altText,
  overlayOpacity = 'bg-black/45',
  className = '',
}) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted or blocked by browser policies
        // Graceful fallback: video will remain paused or show poster
      });
    }
  }, [videoUrl]);

  return (
    <div className={`relative w-full h-full overflow-hidden select-none ${className}`}>
      {/* Fallback & Primary Poster Image */}
      <img
        src={posterUrl}
        alt={altText}
        referrerPolicy="no-referrer"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded && !videoError ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      />

      {/* Background Video */}
      {videoUrl && !videoError && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}

      {/* Measured Scrim & Tint Overlay */}
      <div
        className={`absolute inset-0 ${overlayOpacity} backdrop-brightness-95 pointer-events-none`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
    </div>
  );
};
