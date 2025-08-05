import { Divider } from "@mui/material";
import OrderItem from "./OrderItem";
import dummyOrders from "../../../../data/order/order";
export default function Order() {
  return (
    <div className="text-sm min-h-screen">
      <div>
        <h1 className="text-lg font-semibold text-gray-700">All Orders</h1>
        <p className="italic text-sm font-extralight">from anytime</p>
      </div>
      <Divider className="border-gray-300" />
      <div className="pb-9">
        {dummyOrders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}
