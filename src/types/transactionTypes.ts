import type { Order } from "./orderTypes";
import type { Seller } from "./SellerTypes";
import type { User } from "./UserTypes";

export interface Transaction {
  id: number;
  customer: User;
  order: Order;
  seller: Seller;
  data: string;
}

export interface TransactionState {
  transactions: Transaction[];
  transaction: Transaction | null;
  loading: boolean;
  error: string | null;
}
