import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";

export default function EmptyCart() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center py-10 text-gray-500 text-center">
      <ShoppingCartOutlinedIcon sx={{ fontSize: 60, color: "#9ca3af" }} />
      <h2 className="mt-4 text-lg sm:text-xl font-semibold">
        Your cart is empty
      </h2>
      <p className="mt-1 text-sm text-gray-400 px-4">
        Looks like you haven’t added anything yet.
      </p>
      <button
        onClick={() => navigate("/products")}
        className="mt-4 px-5 py-2 bg-blue-600 cursor-pointer hover:bg-blue-700 text-white rounded-full shadow text-sm sm:text-base"
      >
        Start Shopping
      </button>
    </div>
  );
}
