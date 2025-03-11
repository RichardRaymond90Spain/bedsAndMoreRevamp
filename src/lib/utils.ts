import { type ClassValue, clsx } from "@/lib/node_modules/clsx/clsx.mjs";
import { twMerge } from "@/lib/node_modules/tailwind-merge/dist/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
} 