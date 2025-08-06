export interface PickupAddress {
  name: string;
  locality: string;
  city: string;
  address: string;
  state: string;
  pinCode: string;
  mobile: string;
}

export interface BankDetails {
  accountNumber: string;
  accountHolderName: string;
  ifscCode: string;
}
export interface BusinessDetails {
  businessName: string;
}
export interface Seller {
  id?: number;
  sellerName: string;
  mobile: string;
  GSTIN: string;
  otp: string;
  email: string;
  password: string;
  businessDetails: BusinessDetails;
  bankDetails: BankDetails;
  pickupAddress: PickupAddress;
  accountStatus?: string;
}


export interface SellerReport {
  id: number;
  seller: Seller;
  totalEarnings: number;
  totalSales: number;
  totalRefunds: number;
  totalTax: number;
  netEarnings: number;

  totalOrders: number;
  canceledOrders: number;
  totalTransactions: number;
}
