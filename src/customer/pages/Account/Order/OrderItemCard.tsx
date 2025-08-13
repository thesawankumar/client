import Chip from "@mui/material/Chip";
import type { Order, OrderItem } from "../../../../types/orderTypes";
import { useNavigate } from "react-router-dom";

export default function OrderItemCard({
  item,
  order,
}: {
  item: OrderItem;
  order: Order;
}) {
  const navigate = useNavigate();
  if (!item) return null;

  const getStatusColor = () => {
    switch (order.orderStatus) {
      case "PENDING":
        return "text-yellow-600";
      case "SHIPPED":
        return "text-green-600";
      case "DELIVERED":
        return "text-gray-700";
      case "CANCELLED":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const statusColor = getStatusColor();

  return (
    <div
      onClick={() => navigate(`/account/orders/${order.id}/${item.id}`)}
      className="bg-white border border-gray-200 rounded-xl p-4 mt-4 space-y-4 shadow-sm"
    >
      {/* Order Status */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className={`${statusColor} text-lg`}>🏷️</div>
          <div>
            <p className={`${statusColor} font-semibold uppercase`}>
              {order.orderStatus}
            </p>
            <p className="text-gray-500 text-sm">{order.deliverDate}</p>
          </div>
        </div>

        {order.orderStatus !== "CANCELLED" && (
          <Chip
            label="TRACK"
            color="primary"
            size="small"
            sx={{ textTransform: "uppercase" }}
          />
        )}
      </div>

      {/* Product Info */}
      <div className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg">
        <img
          src={item.product.images[0]}
          alt={item.product.title}
          className="w-20 h-20 object-cover rounded-lg border border-gray-300"
        />
        <div className="flex-1 space-y-1">
          <h3 className="font-semibold text-gray-800">{item.product.title}</h3>
          <p className="text-gray-600 text-sm">{item.product.description}</p>
          <p className="text-gray-700 text-sm font-medium">
            Size: <span className="uppercase">{item.size}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
