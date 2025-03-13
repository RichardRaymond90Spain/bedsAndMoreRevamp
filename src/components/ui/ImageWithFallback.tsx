"use client"

import Image from 'next/image'
import { useState } from 'react'

interface ImageWithFallbackProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  fallbackSrc?: string
}

export default function ImageWithFallback({ 
  src, 
  alt, 
  width, 
  height,
  priority = false,
  className = '',
  fallbackSrc = '/images/placeholder.jpg'
}: ImageWithFallbackProps) {
  const [isLoading, setLoading] = useState(true)
  const [imgSrc, setImgSrc] = useState(src)
  const [error, setError] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
        `}
        onLoadingComplete={() => setLoading(false)}
        onError={() => {
          setError(true)
          setImgSrc(fallbackSrc)
        }}
        quality={75}
        loading={priority ? 'eager' : 'lazy'}
      />
      
      {/* Loading state */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <span className="text-sm text-gray-500">Image not available</span>
        </div>
      )}
    </div>
  )
} 