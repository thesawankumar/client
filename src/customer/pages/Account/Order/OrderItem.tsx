import Chip from "@mui/material/Chip";

type Order = {
  id: number;
  status: string;
  expectedArrival: string;
  image: string;
  title: string;
  description: string;
  size: string;
};

type OrderItemProps = {
  order: Order;
};

export default function OrderItem({ order }: OrderItemProps) {
  if (!order) return null;

  const getStatusColor = () => {
    switch (order.status) {
      case "PENDING":
        return "text-yellow-600";
      case "PLACED":
        return "text-blue-600";
      case "CONFIRMED":
        return "text-purple-600";
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
    <div className="bg-white border border-gray-200 rounded-xl p-4 mt-4 space-y-4 shadow-sm">
      {/* Order Status */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className={`${statusColor} text-lg`}>🏷️</div>
          <div>
            <p className={`${statusColor} font-semibold uppercase`}>
              {order.status}
            </p>
            <p className="text-gray-500 text-xs">{order.expectedArrival}</p>
          </div>
        </div>
        {order.status !== "CANCELLED" && (
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
          src={order.image}
          alt={order.title}
          className="w-20 h-20 object-cover rounded-lg border border-gray-300"
        />
        <div className="flex-1 space-y-1">
          <h3 className="font-semibold text-gray-800">{order.title}</h3>
          <p className="text-gray-600 text-sm">{order.description}</p>
          <p className="text-gray-700 text-sm font-medium">
            Size: <span className="uppercase">{order.size}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
