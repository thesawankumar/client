import { CheckCircle } from "@mui/icons-material";
import {
  useParams,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useAppDispatch } from "../../../redux/store";
import { useEffect } from "react";
import { paymentSuccess } from "../../../redux/customer/actions/orderAction";

export default function PaymentSuccess() {
  const { orderId } = useParams();

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const getQueryParam = (key: string) => {
    const params = new URLSearchParams(window.location.search);
    return params.get(key) || "";
  };

  // const paymentId = searchParams.get("razorpay_payment_id");
  // const linkId = searchParams.get("razorpay_payment_link_id");
  // const status = searchParams.get("razorpay_payment_link_status");
  // const signature = searchParams.get("razorpay_signature");

  useEffect(() => {
    const paymentId = getQueryParam("razorpay_payment_id");
    const paymentLinkId = getQueryParam("razorpay_payment_link_id");
    dispatch(
      paymentSuccess({
        jwt: localStorage.getItem("user-jwt") || "",
        paymentId: paymentId || "",
        paymentLinkId: paymentLinkId || "",
      })
    );
  }, [orderId]);
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white max-w-lg w-full rounded-2xl shadow-lg p-8 text-center space-y-6">
        {/* Success Icon */}
        <div className="flex justify-center">
          <CheckCircle className="text-green-500" style={{ fontSize: 60 }} />
        </div>

        {/* Success Message */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Payment Successful 🎉
          </h1>
          <p className="text-gray-600 mt-2">
            Your payment has been processed successfully. Thank you for your
            purchase!
          </p>
        </div>

        {/* Payment Details */}
        {/* <div className="bg-gray-100 p-4 rounded-lg text-left text-sm space-y-1">
          <p>
            <span className="font-medium">Order ID:</span> {orderId}
          </p>
          <p>
            <span className="font-medium">Payment ID:</span> {}
          </p>
          <p>
            <span className="font-medium">Link ID:</span> {linkId}
          </p>
          <p>
            <span className="font-medium">Status:</span> {status}
          </p>
          <p className="break-all">
            <span className="font-medium">Signature:</span> {signature}
          </p>
        </div> */}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <Link
            to="/orders"
            className="flex-1 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition"
          >
            View Orders
          </Link>
          <Link
            to="/"
            className="flex-1 border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
