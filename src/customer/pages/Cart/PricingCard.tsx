// PricingCard.tsx
import { useState } from "react";
import { toast } from "react-toastify";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/store";

import { fetchUserCart } from "../../../redux/customer/actions/cartAction";
import { applyCoupon } from "../../../redux/admin/actions/couponAction";

export default function PricingCard() {
  const [couponInput, setCouponInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart); // Redux cart
  const jwt = localStorage.getItem("user-jwt") || "";

  const subtotal =
    cart?.cartItems?.reduce((acc, item) => acc + item.sellingPrice, 0) || 0;
  const discount = cart && cart.cartItems?.length > 0 ? cart.discount || 0 : 0;
  const shipping = 79;
  const platformFee = 0;
  const total = subtotal - discount + shipping + platformFee;

  const handleApply = () => {
    if (couponInput.trim() === "") {
      toast.error("Enter a coupon code!", { theme: "colored" });
      return;
    }

    dispatch(
      applyCoupon({
        apply: "true",
        code: couponInput,
        orderValue: subtotal,
        jwt,
      })
    )
      .unwrap()
      .then((res: any) => {
        toast.success(`Coupon "${res.couponCode}" applied successfully!`, {
          theme: "colored",
        });
        setCouponInput("");
        dispatch(fetchUserCart(jwt)); // ✅ refresh cart after applying coupon
      })
      .catch((err) => {
        toast.error(err?.message || "Coupon is not valid or has expired", {
          theme: "colored",
        });
      });
  };

  const handleRemoveCoupon = () => {
    if (!cart?.couponCode) return;

    dispatch(
      applyCoupon({
        apply: "false",
        code: cart.couponCode,
        orderValue: subtotal,
        jwt,
      })
    )
      .unwrap()
      .then(() => {
        toast.info("Coupon removed!", { theme: "colored" });
        dispatch(fetchUserCart(jwt)); // ✅ refresh cart after removing coupon
      })
      .catch((err) => {
        toast.error(err?.message || "Failed to remove coupon", {
          theme: "colored",
        });
      });
  };

  return (
    <div className="rounded-lg p-5 space-y-4 border border-gray-400 sm:w-[70%] w-full">
      {/* Coupon Section */}
      <div className="flex items-center gap-2 text-sm font-semibold">
        <span className="text-green-600">🏷️</span>
        <span>Apply Coupons</span>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="coupon code"
          onChange={(e) => setCouponInput(e.target.value)}
          value={
            cart?.couponCode ? `${cart.couponCode} (Applied)` : couponInput
          }
          readOnly={!!cart?.couponCode}
          className={`border rounded p-2 pr-10 w-full text-sm ${
            cart?.couponCode ? "bg-gray-100 text-green-700 font-semibold" : ""
          }`}
        />
        {cart?.couponCode ? (
          <ClearIcon
            fontSize="small"
            onClick={handleRemoveCoupon}
            className="absolute right-2 top-2 cursor-pointer text-gray-500 hover:text-black"
          />
        ) : (
          <button
            onClick={handleApply}
            className="absolute right-2 top-2 text-green-600 text-sm font-semibold"
          >
            APPLY
          </button>
        )}
      </div>

      {/* Price Details */}
      <div className="text-sm space-y-2 border-t pt-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-semibold">₹{subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount</span>
          <span className="font-semibold text-green-600">
            {discount > 0 ? `- ₹ ${discount}` : "- ₹ 0"}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="font-semibold">₹{shipping}</span>
        </div>
        <div className="flex justify-between">
          <span>Platform fee</span>
          <span className="font-semibold text-green-600">
            {platformFee === 0 ? "Free" : `₹ ${platformFee}`}
          </span>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center text-base font-bold border-t pt-4">
          <span>Total</span>
          <span>₹ {total}</span>
        </div>
      </div>

      {/* Buy Button */}
      <button
        onClick={() => navigate("/checkout")}
        className="w-full bg-green-600 text-white text-sm py-3 rounded hover:bg-green-700"
      >
        BUY NOW
      </button>
    </div>
  );
}
