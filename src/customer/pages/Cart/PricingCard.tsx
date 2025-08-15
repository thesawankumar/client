import { useState } from "react";
import { toast } from "react-toastify";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { applyCoupon } from "../../../redux/admin/actions/copuonAction";
// import { applyCoupon } from "../../../redux/customer/actions/couponAction";

export default function PricingCard() {
  const [coupon, setCoupon] = useState("");
  const [isApplied, setIsApplied] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: any) => setCoupon(e.target.value);

  const dispatch = useAppDispatch();
  // const { cart } = useAppSelector((state) => state.coupon); // optional if you want updated cart
  const jwt = localStorage.getItem("user-jwt") || "";

  const handleApply = () => {
    if (coupon.trim() === "") {
      toast.error("Enter a coupon code!", { theme: "colored" });
      return;
    }

    // Dispatch applyCoupon thunk
    dispatch(
      applyCoupon({
        apply: "true",
        code: coupon,
        orderValue: 1399, // you can calculate subtotal dynamically
        jwt,
      })
    )
      .unwrap()
      .then(() => {
        setIsApplied(true);
        toast.success("Coupon applied successfully!", { theme: "colored" });
      })
      .catch((err) => {
        toast.error(err || "Invalid coupon code!", { theme: "colored" });
      });
  };

  const handleRemoveCoupon = () => {
    setCoupon("");
    setIsApplied(false);
    toast.info("Coupon removed!", { theme: "colored" });
  };

  return (
    <div className="rounded-lg p-5 space-y-4 border border-gray-400 sm:w-[70%] w-full">
      {/* Coupon */}
      <div className="flex items-center gap-2 text-sm font-semibold">
        <span className="text-green-600">🏷️</span>
        <span>Apply Coupons</span>
      </div>

      <div className="relative">
        <input
          onChange={handleChange}
          value={isApplied ? `${coupon} (Applied)` : coupon}
          type="text"
          placeholder="coupon code"
          readOnly={isApplied}
          className={`border rounded p-2 pr-10 w-full text-sm ${
            isApplied ? "bg-gray-100 text-green-700 font-semibold" : ""
          }`}
        />
        {isApplied ? (
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
          <span className="font-semibold">₹ 1399</span>
        </div>
        <div className="flex justify-between">
          <span>Discount</span>
          <span className="font-semibold text-green-600">
            {isApplied ? "- ₹ 600" : "- ₹ 0"}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="font-semibold">₹ 79</span>
        </div>
        <div className="flex justify-between">
          <span>Platform fee</span>
          <span className="font-semibold text-green-600">Free</span>
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center text-base font-bold border-t pt-4">
        <span>Total</span>
        <span>₹ {isApplied ? "799" : "1399"}</span>
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
