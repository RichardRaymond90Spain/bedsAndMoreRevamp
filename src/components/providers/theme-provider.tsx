"use client"

import * as React from "@/lib/node_modules/@types/react"
import { ThemeProvider as NextThemesProvider } from "@/lib/node_modules/next-themes/dist/index.mjs"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
} 