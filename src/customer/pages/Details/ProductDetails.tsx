import { useState } from "react";
import ProdctImage from "../../../images/saree.png";
import ProdctImage2 from "../../../images/skirt.png";
import ProdctImage3 from "../../../images/saree.png";
import { Star, ShoppingBag, FavoriteBorder } from "@mui/icons-material";
import SimilarProduct from "./SimilarProduct";
import ReviewCard from "../Review/ReviewCard";

export default function ProductDetails() {
  const productImages = [ProdctImage, ProdctImage2, ProdctImage3];
  const [mainImage, setMainImage] = useState(productImages[0]);
  const [quantity, setQuantity] = useState(1);

  const handleQty = (type: "inc" | "dec") => {
    setQuantity((prev) =>
      type === "inc" ? prev + 1 : prev > 1 ? prev - 1 : 1
    );
  };
  return (
    <div className="px-5 pt-5 lg:px-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {productImages.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setMainImage(img)}
                className="w-20 h-20 rounded-lg object-cover cursor-pointer border border-gray-300 hover:border-black"
              />
            ))}
          </div>
          <div className="w-full lg:w-[85%] ">
            <img
              src={mainImage}
              className="w-[70%] max-h-[400px] object-fill rounded-2xl  transition-transform duration-300 hover:scale-105 border"
            />
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Elegant Saree</h2>
          <p className="text-sm text-gray-600">
            Brand: <span className="font-semibold">Sawan Fashions</span>
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center text-yellow-500">
              {[...Array(4)].map((_, i) => (
                <Star key={i} fontSize="small" htmlColor="#facc15" />
              ))}
              <Star fontSize="small" color="disabled" />
            </div>
            <span className="text-gray-500 text-sm">(122 ratings)</span>
          </div>

          {/* Price */}
          <div className="text-2xl font-bold text-pink-600">
            ₹1,299{" "}
            <span className="line-through text-gray-400 text-lg ml-2">
              ₹1,799
            </span>
          </div>
          <p className="text-green-600 text-sm">You save ₹500 (28%)</p>

          {/* Short Description */}
          <p className="text-gray-700 text-sm mt-2">
            Elegant, lightweight saree perfect for casual and festive occasions.
            Designed with traditional patterns and soft fabric.
          </p>

          {/* Quantity */}
          <div className="flex items-center gap-3 mt-4">
            <span className="font-semibold">Quantity:</span>
            <button
              onClick={() => handleQty("dec")}
              className="px-3 py-1 border rounded hover:bg-gray-100"
            >
              −
            </button>
            <span className="w-6 text-center">{quantity}</span>
            <button
              onClick={() => handleQty("inc")}
              className="px-3 py-1 border rounded hover:bg-gray-100"
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
            <p>• Premium quality fabric with a soft feel.</p>
            <p>• Easy to drape and maintain, suitable for all seasons.</p>
            <p>• Traditional design that blends elegance with comfort.</p>
            <p>• Ideal for festive, party, or daily wear.</p>
          </div>
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
