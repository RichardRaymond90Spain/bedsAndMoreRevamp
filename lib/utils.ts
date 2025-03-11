import { clsx, type ClassValue } from "clsx/clsx.mjs"
import { twMerge } from "tailwind-merge/dist/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
