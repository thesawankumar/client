import CartItem from "./CartItem";
import PricingCard from "./PricingCard";

export default function Cart() {
  return (
    <div className="pt-10 px-5 sm:px-10 md:px-60 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-3">
          <CartItem />
          <CartItem />
        </div>
        <div>
          <div>
            <PricingCard />
          </div>
        </div>
      </div>
    </div>
  );
}
