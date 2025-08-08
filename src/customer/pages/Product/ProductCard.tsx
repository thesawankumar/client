import { useState } from "react";

import { ChatBubble, Favorite } from "@mui/icons-material";
import { useAppSelector } from "../../../redux/store";
import { useNavigate } from "react-router-dom";

export default function ProductCard() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { product } = useAppSelector((store) => store);
  const navigate = useNavigate();
  return (
    <section className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-5 mb-5 gap-6">
      {product.products.map((p, index) => (
        <div
          key={p.id}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() =>
            navigate(
              `/product-details/${
                p.category?.id || p.category?.categoryId
              }/${encodeURIComponent(p.title)}/${p.id}`
            )
          }
          className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          {/* Image Slider Container */}
          <div className="relative w-full h-64 overflow-hidden">
            <div
              className={`flex h-full transition-transform duration-500 ease-in-out`}
              style={{
                width: `${p.images.length * 100}%`,
                transform:
                  hoveredIndex === index
                    ? "translateX(-50%)"
                    : "translateX(0%)",
              }}
            >
              {p.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={p.title}
                  className="w-1/2 h-full object-cover"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="p-4 space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition-colors">
                {p.title}
              </h3>

              {/* ❤️ Favorite & 💬 Comment Icons */}
              <div className="flex flex-col space-y-2 text-gray-500  transition">
                <Favorite fontSize="small" className="cursor-pointer" />
                <ChatBubble fontSize="small" className="cursor-pointer" />
              </div>
            </div>
            <p className="text-gray-500 text-sm">{p.description}</p>
            <div className="flex justify-between items-center pt-2">
              <span className="text-sm text-gray-400 line-through">
                ₹{p.mrpPrice}
              </span>
              <span className="text-indigo-600 font-bold text-md">
                ₹{p.sellingPrice}
              </span>

              <span className="ml-2 text-green-600 text-sm font-semibold">
                {p.discountPercentage}% off
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
