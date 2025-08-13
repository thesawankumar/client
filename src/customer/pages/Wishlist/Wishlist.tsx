import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import WishlistCard from "./WishlistCard";
import { getWishlistByUserId } from "../../../redux/customer/actions/wishlistAction";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Wishlist() {
  const dispatch = useAppDispatch();
  const { wishlist } = useAppSelector((store) => store);

  useEffect(() => {
    dispatch(getWishlistByUserId());
  }, [dispatch]);

  const totalItems = wishlist.wishlist?.products?.length || 0;

  return (
    <div className="mt-10 px-10 mb-10">
      {/* Wishlist Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <FavoriteBorderIcon className="text-indigo-600" fontSize="medium" />
          <h2 className="text-2xl font-bold text-gray-800">My Wishlist</h2>
          <span className="bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full">
            {totalItems} {totalItems === 1 ? "item" : "items"}
          </span>
        </div>
      </div>

      {/* Wishlist Grid / Empty State */}
      {totalItems > 0 ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.wishlist?.products.map((item) => (
            <WishlistCard key={item.id} product={item} />
          ))}
        </section>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center text-gray-500">
          <FavoriteBorderIcon
            className="text-gray-400"
            style={{ fontSize: "3rem" }}
          />
          <p className="mt-4 text-lg font-medium">Your wishlist is empty</p>
          <p className="text-sm text-gray-400">
            Start adding products you love!
          </p>
        </div>
      )}
    </div>
  );
}
