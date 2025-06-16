export interface Product {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  prices: {
    [key: string]: number;
  };
  benefits: string[];
  nutritionalInfo: {
    protein: string;
    fat: string;
    carbs: string;
    fiber: string;
    calories: string;
  };
  origin: string;
  storage: string;
}

export interface CartItem {
  product: Product;
  weight: string;
  price: number;
  quantity: number;
}