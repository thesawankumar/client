import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import OrderStepper from "./OrderStepper";
import { useParams } from "react-router-dom";
import {
  fetchOrderById,
  fetchOrderItemById,
} from "../../../../redux/customer/actions/orderAction";

export default function OrderDetails() {
  const dispatch = useAppDispatch();
  const { orderId, orderItemId } = useParams();
  const { order } = useAppSelector((store) => store);

  useEffect(() => {
    dispatch(
      fetchOrderById({
        orderId: Number(orderId),
        jwt: localStorage.getItem("user-jwt") || "",
      })
    );
    dispatch(
      fetchOrderItemById({
        orderItemId: Number(orderItemId),
        jwt: localStorage.getItem("user-jwt") || "",
      })
    );
  }, []);
  return (
    <div className="flex flex-col items-center text-center space-y-3 p-4">
      {/* Image */}
      <div className="w-36 h-36">
        <img
          src={order.orderItem?.product.images[0]}
          alt="Product"
          className="w-full h-full object-fill rounded-2xl"
        />
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold">
        {order.orderItem?.product.title}
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-sm max-w-md">
        {order.orderItem?.product.description}
      </p>

      {/* Size */}
      <p className="text-black font-semibold">
        Size: <span className="font-bold"> {order.orderItem?.size}</span>
      </p>

      {/* Write Review */}
      <button className="text-green-600 hover:underline font-medium text-sm">
        WRITE REVIEW
      </button>
      <section>
        <OrderStepper orderStatus="ARRIVING" />
      </section>
      <section className="w-full bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-green-100 text-green-600 flex items-center justify-center rounded-full font-semibold">
            📍
          </div>
        </div>
        <div className="space-y-1 text-left text-sm">
          <p className="text-base font-semibold text-gray-800">
            {order.currentOrder?.shippingAddress.name}
          </p>
          <p className="text-gray-700 text-sm">
            {order.currentOrder?.shippingAddress.address},&nbsp;
            {order.currentOrder?.shippingAddress.locality},&nbsp;
            {order.currentOrder?.shippingAddress.city} -&nbsp;
            {order.currentOrder?.shippingAddress.pinCode},&nbsp;
            {order.currentOrder?.shippingAddress.state}
          </p>

          <p className="text-gray-600">
            <span className="font-medium text-gray-800">Mobile:</span>{" "}
            {order.currentOrder?.shippingAddress.mobile}
          </p>
        </div>
      </section>
      <section className="bg-white border border-gray-300 rounded-xl w-full p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-800">Total Item Price</h3>
          <span className="font-medium text-gray-800">
            ₹{order.orderItem?.sellingPrice}
          </span>
        </div>
        <p className="text-sm text-green-600">
          You saved{" "}
          <span className="font-semibold">
            ₹
            {(order.orderItem?.product?.mrpPrice ?? 0) -
              (order.orderItem?.product?.sellingPrice ?? 0)}
          </span>{" "}
          on this item
        </p>

        <div className="flex items-center bg-green-50 text-green-800 p-2 px-3 rounded-md w-max text-sm font-medium">
          <span className="mr-2">💳</span>
          Pay On Delivery
        </div>

        <p className="text-sm text-gray-500">
          Sold by :{" "}
          <span className="text-gray-700">
            {order.orderItem?.product.seller?.businessDetails.businessName}
          </span>
        </p>

        <button className="w-full text-red-600 border border-red-300 rounded-md py-2 font-medium hover:bg-red-50 transition">
          CANCEL ORDER
        </button>
      </section>
    </div>
  );
}
