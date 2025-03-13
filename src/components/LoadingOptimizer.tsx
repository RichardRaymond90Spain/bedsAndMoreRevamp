"use client"

import { useEffect } from 'react'

export default function LoadingOptimizer() {
  useEffect(() => {
    // Preload critical images
    const preloadImages = [
      'https://images.unsplash.com/photo-1505693314120-0d443867891c',
      // Add other critical images
    ]

    preloadImages.forEach(src => {
      const img = new Image()
      img.src = src
    })

    // Preload critical fonts
    const preloadFonts = [
      '/fonts/your-font.woff2',
      // Add other critical fonts
    ]

    preloadFonts.forEach(href => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'font'
      link.href = href
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    })
  }, [])

  return null
} 