'use client'

import * as React from '@/lib/node_modules/@types/react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from '@/lib/node_modules/next-themes/dist/index.mjs'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
