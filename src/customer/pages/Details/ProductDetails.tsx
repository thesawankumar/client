import { useEffect, useState } from "react";
import { Star, ShoppingBag, FavoriteBorder } from "@mui/icons-material";
import SimilarProduct from "./SimilarProduct";
import ReviewCard from "../Review/ReviewCard";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../../redux/customer/actions/customerProductAction";

export default function ProductDetails() {
  const [mainImage, setMainImage] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const { productId } = useParams();
  const { product } = useAppSelector((store) => store);

  const handleQty = (type: "inc" | "dec") => {
    setQuantity((prev) =>
      type === "inc" ? prev + 1 : prev > 1 ? prev - 1 : 1
    );
  };

  // Fetch product
  useEffect(() => {
    if (productId) {
      dispatch(fetchProductById(Number(productId)));
    }
  }, [productId, dispatch]);

  // Set first product image as main image
  useEffect(() => {
    const images = product?.product?.images;
    if (images?.length) {
      setMainImage(images[0]);
    }
  }, [product?.product]);

  return (
    <div className="px-4 sm:px-6 lg:px-20 pt-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {/* Image Section */}
        <section className="flex flex-col lg:flex-row gap-4 sm:gap-5">
          {/* Thumbnails */}
          <div className="flex flex-row lg:flex-col gap-2 sm:gap-3 w-full lg:w-[15%] flex-wrap">
            {product.product?.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setMainImage(img)}
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover cursor-pointer border ${
                  mainImage === img
                    ? "border-black"
                    : "border-gray-300 hover:border-black"
                }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="w-full lg:w-[85%] flex justify-center items-center">
            {mainImage && (
              <img
                src={mainImage}
                className="w-[80%] sm:w-[70%] max-h-[350px] sm:max-h-[400px] object-contain rounded-2xl border transition-transform duration-300 hover:scale-105"
              />
            )}
          </div>
        </section>

        {/* Product Details */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl sm:text-2xl font-bold">
            {product?.product?.title ?? "Product Name"}
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Brand:{" "}
            <span className="font-semibold">
              {product?.product?.seller?.businessDetails.businessName ??
                "Brand"}
            </span>
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(4)].map((_, i) => (
                <Star key={i} fontSize="small" htmlColor="#facc15" />
              ))}
              <Star fontSize="small" color="disabled" />
            </div>
            <span className="text-gray-500 text-xs sm:text-sm">
              {product?.product?.numRatings} (ratings)
            </span>
          </div>

          {/* Price */}
          <div className="text-xl sm:text-2xl font-bold text-pink-600">
            ₹{product?.product?.sellingPrice ?? "0"}{" "}
            <span className="line-through text-gray-400 text-sm sm:text-lg ml-2">
              ₹{product?.product?.mrpPrice ?? ""}
            </span>
          </div>
          {product?.product?.discountPercentage &&
            product?.product?.mrpPrice && (
              <p className="text-green-600 text-xs sm:text-sm">
                You save ₹
                {(
                  (product.product.mrpPrice *
                    product.product.discountPercentage) /
                  100
                ).toFixed(2)}{" "}
                ({product.product.discountPercentage}%)
              </p>
            )}

          {/* Short Description */}
          <p className="text-gray-700 text-xs sm:text-sm mt-1 sm:mt-2">
            {product?.product?.description ?? "No description available."}
          </p>

          {/* Quantity */}
          <div className="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-4">
            <span className="font-semibold text-sm sm:text-base">
              Quantity:
            </span>
            <button
              onClick={() => handleQty("dec")}
              className="px-2 sm:px-3 py-1 border rounded hover:bg-gray-100"
              disabled={quantity <= 1}
            >
              −
            </button>
            <span className="w-5 sm:w-6 text-center">{quantity}</span>
            <button
              onClick={() => {
                if (quantity < (product?.product?.quantity ?? 1)) {
                  handleQty("inc");
                }
              }}
              className="px-2 sm:px-3 py-1 border rounded hover:bg-gray-100"
              disabled={quantity >= (product?.product?.quantity ?? 1)}
            >
              +
            </button>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-5">
            <button className="flex items-center justify-center gap-2 bg-pink-600 text-white px-4 sm:px-6 py-2 rounded hover:bg-pink-700 transition">
              <ShoppingBag fontSize="small" />
              Add to Bag
            </button>
            <button className="flex items-center justify-center gap-2 border border-pink-600 text-pink-600 px-4 sm:px-6 py-2 rounded hover:bg-pink-50 transition">
              <FavoriteBorder fontSize="small" />
              Wishlist
            </button>
          </div>

          {/* Full Description */}
          <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-700 leading-relaxed">
            {product?.product?.description ? (
              product.product.description
                .split("\n")
                .map((line, idx) => <p key={idx}>• {line}</p>)
            ) : (
              <>
                <p>• Premium quality fabric with a soft feel.</p>
                <p>• Easy to drape and maintain, suitable for all seasons.</p>
                <p>• Traditional design that blends elegance with comfort.</p>
                <p>• Ideal for festive, party, or daily wear.</p>
              </>
            )}
          </div>

          {/* Reviews */}
          <div className="mt-4 sm:mt-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
              Reviews
            </h2>
            <ReviewCard />
          </div>
        </section>
      </div>

      {/* Similar Products */}
      <div className="mt-6 sm:mt-10">
        <SimilarProduct />
      </div>
    </div>
  );
}
