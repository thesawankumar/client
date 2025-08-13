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
        {order.orders.map((order) =>
          order.orderItems.map((item) => (
            <OrderItemCard  key={item.id} order={order} item={item} />
          ))
        )}
      </div>
    </div>
  );
}
