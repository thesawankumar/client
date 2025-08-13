import { useNavigate } from "react-router-dom";
import { ChatBubble, Favorite } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { addProductToWishlist } from "../../../redux/customer/actions/wishlistAction";

export default function WishlistCard({ product }: { product: any }) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { wishlist } = useAppSelector((store) => store);

  // Check if product is in wishlist
  const isInWishlist = wishlist?.wishlist?.products?.some(
    (item: any) => item.id === product.id
  );

  const handleWishlist = (e: any, productId: any) => {
    e.stopPropagation();
    dispatch(addProductToWishlist({ productId })); // same action for add/remove
  };

  return (
    <div
      onClick={() =>
        navigate(
          `/product-details/${
            product.category?.id || product.category?.categoryId
          }/${encodeURIComponent(product.title)}/${product.id}`
        )
      }
      className="group mt-5 mb-5 pb-5 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="relative w-full h-40 sm:h-44 overflow-hidden">
        <img
          src={product.images?.[0]}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="p-5 space-y-1">
        <div className="flex justify-between items-start gap-1">
          <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
            {product.title}
          </h3>
          <div className="flex flex-col text-gray-500">
            <Favorite
              onClick={(e) => handleWishlist(e, product.id)}
              fontSize="small"
              className={`cursor-pointer transition-colors ${
                isInWishlist ? "text-red-500" : "text-gray-500"
              }`}
            />
            <ChatBubble fontSize="small" className="cursor-pointer" />
          </div>
        </div>

        <p className="text-gray-500 text-xs line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center pt-1">
          <span className="text-xs text-gray-400 line-through">
            ₹{product.mrpPrice}
          </span>
          <span className="text-indigo-600 font-bold text-sm">
            ₹{product.sellingPrice}
          </span>
          <span className="text-green-600 text-xs font-semibold">
            {product.discountPercentage}% off
          </span>
        </div>
      </div>
    </div>
  );
}
