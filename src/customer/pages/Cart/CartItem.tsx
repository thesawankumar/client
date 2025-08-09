import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import type { CartItem } from "../../../types/cartTypes";
import { useAppDispatch } from "../../../redux/store";
import {
  updateCartItem,
  deleteCartItem,
} from "../../../redux/customer/actions/cartAction";

export default function CartItem({ item }: { item: CartItem }) {
  const dispatch = useAppDispatch();

  const handleQty = (value: number) => {
    const newQty = item.quantity + value;
    if (newQty > 0) {
      dispatch(
        updateCartItem({
          jwt: localStorage.getItem("user-jwt"),
          cartItemId: item.id,
          cartItem: { quantity: newQty },
        })
      );
    }
  };

  const handleRemove = () => {
    dispatch(
      deleteCartItem({
        jwt: localStorage.getItem("user-jwt"),
        cartItemId: item.id,
      })
    );
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 border border-gray-400 rounded-lg p-4 relative">
      <div className="w-24 h-28 flex-shrink-0">
        <img
          src={item.product.images[0]}
          alt={item.product.title}
          className="w-full h-full object-cover rounded"
        />
      </div>

      <div className="flex-grow">
        <h2 className="font-semibold text-lg">{item.product.title}</h2>
        <p className="text-sm text-gray-700">{item.product.description}</p>
        <p className="text-xs text-gray-500 mt-1">
          <span className="font-medium">Sold by:</span>{" "}
          {item.product.seller?.businessDetails.businessName}
        </p>
        <p className="text-xs mt-1">
          <span className="font-semibold">7 days replacement</span>{" "}
          <span className="text-gray-500">available</span>
        </p>

        <div className="flex py-2 justify-between items-center mt-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleQty(-1)}
              className="text-gray-600 border text-center rounded-2xl hover:bg-gray-100"
            >
              <RemoveIcon fontSize="small" />
            </button>
            <span className="text-sm font-medium">{item.quantity}</span>
            <button
              onClick={() => handleQty(1)}
              className="text-gray-600 border text-center rounded-2xl hover:bg-gray-100"
            >
              <AddIcon fontSize="small" />
            </button>
          </div>
          <p className="text-lg font-semibold text-gray-800">
            ₹{item.sellingPrice}
          </p>
        </div>
      </div>

      <div className="absolute top-2 right-2 flex flex-col items-end">
        <button
          className="text-gray-500 hover:text-red-500"
          onClick={handleRemove}
        >
          <CloseIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
}
