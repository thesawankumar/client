import type { Cart } from "./cartTypes";

export interface Coupon {
  id: number;
  code: string;
  discountPercentage: number;
  validityEndDate: string; // ISO date string
  validityStartDate: string; // ISO date string
  minimumOrderValue: number;
  active: boolean; // corresponds to isActive
}
export interface CouponState {
  coupons: Coupon[];
  cart: Cart | null;
  loading: boolean;
  error: string | null;
  couponCreated: boolean;
  couponApplied: boolean;
}
