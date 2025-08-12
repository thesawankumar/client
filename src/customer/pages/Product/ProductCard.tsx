import { useState } from "react";
import { ChatBubble, Favorite } from "@mui/icons-material";
import { useAppSelector } from "../../../redux/store";
import { useNavigate } from "react-router-dom";

export default function ProductCard() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { product } = useAppSelector((store) => store);
  const navigate = useNavigate();

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
          className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <div className="relative w-full h-56 sm:h-64 overflow-hidden">
            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
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

          <div className="p-4 space-y-2">
            <div className="flex justify-between items-start gap-2">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 hover:text-indigo-600 transition-colors line-clamp-2">
                {p.title}
              </h3>
              <div className="flex flex-col space-y-1 text-gray-500">
                <Favorite fontSize="small" className="cursor-pointer" />
                <ChatBubble fontSize="small" className="cursor-pointer" />
              </div>
            </div>
            <p className="text-gray-500 text-sm line-clamp-2">
              {p.description}
            </p>
            <div className="flex flex-wrap justify-between items-center pt-2 gap-2">
              <span className="text-sm text-gray-400 line-through">
                ₹{p.mrpPrice}
              </span>
              <span className="text-indigo-600 font-bold text-md">
                ₹{p.sellingPrice}
              </span>
              <span className="text-green-600 text-sm font-semibold">
                {p.discountPercentage}% off
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
