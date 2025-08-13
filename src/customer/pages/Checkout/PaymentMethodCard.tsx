import { Payment } from "@mui/icons-material";


export default function PaymentMethodCard({
  selectedGateway,
  setSelectedGateway,
}: {
  selectedGateway: string;
  setSelectedGateway: (val: string) => void;
}) {
  const handlePaymentChange = (event: any) => {
    setSelectedGateway(event.target.value);
  };

  return (
    <div className="rounded-lg p-5 space-y-5 border border-gray-400">
      {/* Payment Method Header */}
      <div className="flex items-center gap-2 text-sm font-semibold">
        <Payment className="text-green-600" fontSize="small" />
        <span>Choose Payment Method</span>
      </div>

      <div className="flex items-center gap-4 pl-6">
        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <input
            type="radio"
            name="gateway"
            value="RAZORPAY"
            checked={selectedGateway === "RAZORPAY"}
            onChange={handlePaymentChange}
          />
          Razorpay
        </label>
        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <input
            type="radio"
            name="gateway"
            value="stripe"
            checked={selectedGateway === "stripe"}
            onChange={handlePaymentChange}
          />
          Stripe
        </label>
      </div>

      {/* Pricing Summary */}
      <div className="text-sm space-y-2 border-t pt-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-semibold">₹ 1399</span>
        </div>
        <div className="flex justify-between">
          <span>Discount</span>
          <span className="font-semibold ">₹ 600</span>
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
        <span>₹ 799 </span>
      </div>
      {/* Buy Button */}
      <button className="w-full cursor-pointer bg-green-600 text-white text-sm py-3 rounded hover:bg-green-700">
        CHECKOUT
      </button>
    </div>
  );
}
