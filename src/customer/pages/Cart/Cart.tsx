// Cart.tsx
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import PricingCard from "./PricingCard";
import { fetchUserCart } from "../../../redux/customer/actions/cartAction";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

export default function Cart() {
  const dispatch = useAppDispatch();
  const { cart, loading } = useAppSelector((store) => store.cart); // assuming cart reducer

  useEffect(() => {
    dispatch(fetchUserCart(localStorage.getItem("user-jwt") || ""));
  }, [dispatch]);

  return (
    <div className="pt-10 px-5 sm:px-10 md:px-60 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-3">
          {loading && <p>Loading cart...</p>}
          {!loading && (cart?.cartItems?.length || 0) > 0 ? (
            cart?.cartItems?.map((item: any) => (
              <CartItem key={item.id} item={item} />
            ))
          ) : (
            <EmptyCart />
          )}
        </div>
        <div>
          <PricingCard />
        </div>
      </div>
    </div>
  );
}
