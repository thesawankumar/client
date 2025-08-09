import type { Product } from "./ProductTypes";
import type { User } from "./UserTypes";

export interface CartItem {
  id: number;
  cart?: Cart; // Optional to avoid circular dependency if needed
  product: Product;
  size: string;
  quantity: number;
  mrpPrice: number;
  sellingPrice: number;
  userId: number;
}

export interface Cart {
  id: number;
  user: User;
  cartItems: CartItem[];
  totalSellingPrice: number;
  totalItem: number;
  totalMrpPrice: number;
  discount: number;
  couponCode: string | null;
}
