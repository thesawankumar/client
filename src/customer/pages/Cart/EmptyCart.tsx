import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-gray-500">
      <ShoppingCartOutlinedIcon sx={{ fontSize: 60, color: "#9ca3af" }} />
      <h2 className="mt-4 text-xl font-semibold">Your cart is empty</h2>
      <p className="mt-1 text-sm text-gray-400">
        Looks like you haven’t added anything yet.
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow">
        Start Shopping
      </button>
    </div>
  );
}
