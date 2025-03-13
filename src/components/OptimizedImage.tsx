"use client"

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
}

export default function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height,
  priority = false,
  className = ''
}: OptimizedImageProps) {
  const [isLoading, setLoading] = useState(true)

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={`
        duration-700 ease-in-out
        ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
        ${className}
      `}
      onLoadingComplete={() => setLoading(false)}
      quality={75}
      loading={priority ? 'eager' : 'lazy'}
    />
  )
} 