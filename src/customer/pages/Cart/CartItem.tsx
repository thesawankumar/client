import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import ProductImage from "../../../images/saree.png";
import { useState } from "react";

export default function CartItem() {
  const [quantity, setQuantity] = useState(1);

  const handleQty = (type: "inc" | "dec") => {
    setQuantity((prev) =>
      type === "inc" ? prev + 1 : prev > 1 ? prev - 1 : 1
    );
  };
  return (
    <div className="flex flex-col sm:flex-row gap-4 border  border-gray-400 rounded-lg p-4 relative">
      {/* Product Image */}
      <div className="w-24 h-28 flex-shrink-0">
        <img
          src={ProductImage}
          alt="Product"
          className="w-full h-full object-cover rounded"
        />
      </div>

      {/* Product Info */}
      <div className="flex-grow">
        <h2 className="font-semibold text-lg">Raam Clothing</h2>
        <p className="text-sm text-gray-700">
          Turquoise Blue Stonework Satin Designer Saree
        </p>
        <p className="text-xs text-gray-500 mt-1">
          <span className="font-medium">Sold by:</span> Natural Lifestyle
          Products Private Limited
        </p>
        <p className="text-xs mt-1">
          <span className="font-semibold">7 days replacement</span>{" "}
          <span className="text-gray-500">available</span>
        </p>
        <span className="text-sm font-medium">Quantity: {quantity}</span>
        {/* Quantity Controls */}
        <div className="flex py-2 justify-between items-center mt-4 ">
          <div className="flex items-center gap-3 ">
            <button
              onClick={() => handleQty("dec")}
              className="text-gray-600 border text-center rounded-2xl  hover:bg-gray-100"
            >
              <RemoveIcon fontSize="small" className="" />
            </button>
            <span className="text-sm font-medium">{quantity}</span>
            <button
              onClick={() => handleQty("inc")}
              className="text-gray-600 border text-center  rounded-2xl hover:bg-gray-100"
            >
              <AddIcon fontSize="small" />
            </button>
          </div>
          <p className="text-lg font-semibold text-gray-800">₹799</p>
        </div>
      </div>

      {/* Cross Icon and Price */}
      <div className="absolute top-2 right-2 flex flex-col items-end">
        <button className="text-gray-500 hover:text-red-500 ">
          <CloseIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
}
