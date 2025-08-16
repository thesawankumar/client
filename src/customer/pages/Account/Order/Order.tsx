import { Divider } from "@mui/material";
import OrderItemCard from "./OrderItemCard";

import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { useEffect } from "react";
import { fetchUserOrderHistory } from "../../../../redux/customer/actions/orderAction";

export default function Order() {
  const dispatch = useAppDispatch();
  const { order } = useAppSelector((store) => store);

  useEffect(() => {
    dispatch(fetchUserOrderHistory(localStorage.getItem("user-jwt") || ""));
  }, []);

  return (
    <div className="text-sm min-h-screen">
      <div>
        <h1 className="text-lg font-semibold text-gray-700">All Orders</h1>
        <p className="italic text-sm font-extralight">from anytime</p>
      </div>
      <Divider className="border-gray-300" />

      <div className="pb-9">
        {order.orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-gray-500">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
              alt="No Orders"
              className="w-24 h-24 mb-4 opacity-80"
            />
            <h2 className="text-lg font-medium">No orders yet</h2>
            <p className="text-sm">Start shopping to see your orders here</p>
          </div>
        ) : (
          order.orders.map((order) =>
            order.orderItems.map((item) => (
              <OrderItemCard key={item.id} order={order} item={item} />
            ))
          )
        )}
      </div>
    </div>
  );
}
