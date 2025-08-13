export interface Address {
  id?: number;
  name: string;
  locality: string;
  city: string;
  address: string;
  state: string;
  pinCode: string;
  mobile: string;
}
export enum UserRole{
  ROLE_CUSTOMER= "ROLE_CUSTOMER" ,
  ROLE_ADMIN="ROLE_ADMIN",
  ROLE_SELLER="ROLE_SELLER"

}

export interface User {
  id?: number;
  password?: string; // WRITE_ONLY on backend, but optional here
  email: string;
  fullName: string;
  mobile?: string;
  role: UserRole;
  addresses: Address[];
}

