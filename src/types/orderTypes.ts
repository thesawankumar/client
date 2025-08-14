import type { Product } from "./ProductTypes";
import type { Address, User } from "./UserTypes";

export interface OrderState {
  orders: Order[];
  orderItem: OrderItem | null;
  currentOrder: Order | null;
  paymentOrder: any | null;
  loading: boolean;
  error: string | null;
  orderCanceled: boolean;
}

export enum OrderStatus {
  PENDING = "PENDING",
  PLACED = "PLACED",
  CONFIRMED = "CONFIRMED",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}

export interface OrderItem {
  id: number;
  order: Order;
  product: Product;
  size: string;
  quantity: number;
  mrpPrice: number;
  sellingPrice: number;
  userId: number;
}
export interface Order {
  id: number;
  orderId: string;
  user: User; // can replace with a proper User interface
  sellerId: number;
  orderDate: string;
  orderItems: OrderItem[];
  shippingAddress: Address;
  paymentDetails: any;
  totalMrpPrice: number;
  totalSellingPrice?: number;
  discount?: number;
  orderStatus: OrderStatus;
  totalItem: number;
  deliverDate: string; // ISO string from backend
}
