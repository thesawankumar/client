import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ReplayIcon from "@mui/icons-material/Replay";
import CancelIcon from "@mui/icons-material/Cancel";

export default function Dashboard() {
  const data = [
    {
      label: "Total Earning",
      value: "₹1,25,000",
      icon: <CurrencyRupeeIcon className="text-green-500" fontSize="large" />,
    },
    {
      label: "Total Sale",
      value: "980",
      icon: <ShoppingCartIcon className="text-blue-500" fontSize="large" />,
    },
    {
      label: "Total Refund",
      value: "₹12,300",
      icon: <ReplayIcon className="text-yellow-500" fontSize="large" />,
    },
    {
      label: "Cancelled Orders",
      value: "36",
      icon: <CancelIcon className="text-red-500" fontSize="large" />,
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Dashboard Overview
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {data.map((item) => (
          <div
            key={item.label}
            className="bg-white shadow-md border border-gray-200 rounded-xl p-5 text-center hover:shadow-lg transition duration-300"
          >
            <div className="flex justify-center items-center mb-3">
              {item.icon}
            </div>
            <div className="text-sm text-gray-500">{item.label}</div>
            <div className="text-xl font-bold text-gray-800 mt-1">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
