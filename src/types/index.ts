// Common TypeScript interfaces and types
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: 'beds' | 'mattresses' | 'furniture' | 'accessories';
  inStock: boolean;
  specifications: {
    size?: string;
    color?: string;
    material?: string;
    dimensions?: {
      width: number;
      length: number;
      height: number;
    };
  };
}

export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
} 