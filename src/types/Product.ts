export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  inStock: boolean;
  badge?: 'Bestseller' | 'New' | 'Low Stock';
}
