import { useEffect, useState } from "react";
import { Star, ShoppingBag, FavoriteBorder } from "@mui/icons-material";
import SimilarProduct from "./SimilarProduct";
import ReviewCard from "../Review/ReviewCard";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../../redux/customer/actions/customerProductAction";

export default function ProductDetails() {
  const [mainImage, setMainImage] = useState<string>("");
  const [quantity, setQuantity] = useState(0);
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

  // Set first product image as main image when product changes
  useEffect(() => {
    const images = product?.product?.images;
    if (images?.length) {
      setMainImage(images[0]);
    }
  }, [product?.product]);

  return (
    <div className="px-5 pt-5 lg:px-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
          {/* Thumbnails */}
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {product.product?.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 rounded-lg object-cover cursor-pointer border ${
                  mainImage === img
                    ? "border-black"
                    : "border-gray-300 hover:border-black"
                }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="w-full lg:w-[85%] flex justify-center">
            {mainImage && (
              <img
                src={mainImage}
                className="w-[70%] max-h-[400px] object-fill rounded-2xl  transition-transform duration-300 hover:scale-105 border"
              />
            )}
          </div>
        </section>

        {/* Product Details */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">
            {product?.product?.title ?? "Product Name"}
          </h2>
          <p className="text-sm text-gray-600">
            Brand:{" "}
            <span className="font-semibold">
              {product?.product?.seller?.businessDetails.businessName ??
                "Brand"}
            </span>
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center text-yellow-500">
              {[...Array(4)].map((_, i) => (
                <Star key={i} fontSize="small" htmlColor="#facc15" />
              ))}
              <Star fontSize="small" color="disabled" />
            </div>
            <span className="text-gray-500 text-sm">
              {product?.product?.numRatings} (ratings)
            </span>
          </div>

          {/* Price */}
          <div className="text-2xl font-bold text-pink-600">
            ₹{product?.product?.sellingPrice ?? "0"}{" "}
            <span className="line-through text-gray-400 text-lg ml-2">
              ₹{product?.product?.mrpPrice ?? ""}
            </span>
          </div>
          {product?.product?.discountPercentage &&
            product?.product?.mrpPrice && (
              <p className="text-green-600 text-sm">
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
          <p className="text-gray-700 text-sm mt-2">
            {product?.product?.description ?? "No description available."}
          </p>
          {/* Quantity */}
          <div className="flex items-center gap-3 mt-4">
            <span className="font-semibold">Quantity:</span>
            <button
              onClick={() => handleQty("dec")}
              className="px-3 py-1 border rounded hover:bg-gray-100"
              disabled={quantity <= 1} // minimum 1
            >
              −
            </button>
            <span className="w-6 text-center">{quantity}</span>
            <button
              onClick={() => {
                if (quantity < (product?.product?.quantity ?? 1)) {
                  handleQty("inc");
                }
              }}
              className="px-3 py-1 border rounded hover:bg-gray-100"
              disabled={quantity >= (product?.product?.quantity ?? 1)} // max available stock
            >
              +
            </button>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-5">
            <button className="flex items-center gap-2 bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition">
              <ShoppingBag fontSize="small" />
              Add to Bag
            </button>
            <button className="flex items-center gap-2 border border-pink-600 text-pink-600 px-6 py-2 rounded hover:bg-pink-50 transition">
              <FavoriteBorder fontSize="small" />
              Wishlist
            </button>
          </div>

          {/* Full Description */}
          <div className="mt-6 text-sm text-gray-700 leading-relaxed">
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
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Reviews</h2>
            <ReviewCard />
          </div>
        </section>
      </div>
      <div>
        <SimilarProduct />
      </div>
    </div>
  );
}
