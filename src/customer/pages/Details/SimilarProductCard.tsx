import { useState } from "react";
import shirt1 from "../../../images/shirt.png";
import shirt2 from "../../../images/formal-shirt.png";
import saree1 from "../../../images/saree.png";
import saree2 from "../../../images/saree.png";
import formal1 from "../../../images/formal-shirt.png";
import formal2 from "../../../images/formal-shirt.png";
import skirt1 from "../../../images/skirt.png";
import skirt2 from "../../../images/skirt.png";
import { ChatBubble, Favorite } from "@mui/icons-material";

const products = [
  {
    id: 1,
    images: [shirt1, shirt2],
    name: "Stylish Shirt",
    description: "Comfort Fit | Cotton",
    price: "₹899",
    originalPrice: "₹1199",
    discountPercent: Math.round(((1199 - 899) / 1199) * 100),
  },
  {
    id: 2,
    images: [saree1, saree2],
    name: "Elegant Cotton Saree",
    description: "Pure Handloom | Free Size",
    price: "₹999",
    originalPrice: "₹1499",
    discountPercent: Math.round(((1499 - 999) / 1499) * 100),
  },
  {
    id: 3,
    images: [formal1, formal2],
    name: "Classic Formal Shirt",
    description: "Slim Fit | Soft Fabric",
    price: "₹799",
    originalPrice: "₹1099",
    discountPercent: Math.round(((1099 - 799) / 1099) * 100),
  },
  {
    id: 4,
    images: [skirt1, skirt2],
    name: "Trendy Skirt",
    description: "Soft Crepe | Elastic Waist",
    price: "₹699",
    originalPrice: "₹999",
    discountPercent: Math.round(((999 - 699) / 999) * 100),
  },
  {
    id: 4,
    images: [skirt1, skirt2],
    name: "Trendy Skirt",
    description: "Soft Crepe | Elastic Waist",
    price: "₹699",
    originalPrice: "₹999",
    discountPercent: Math.round(((999 - 699) / 999) * 100),
  },
  {
    id: 4,
    images: [skirt1, skirt2],
    name: "Trendy Skirt",
    description: "Soft Crepe | Elastic Waist",
    price: "₹699",
    originalPrice: "₹999",
    discountPercent: Math.round(((999 - 699) / 999) * 100),
  },
  {
    id: 4,
    images: [skirt1, skirt2],
    name: "Trendy Skirt",
    description: "Soft Crepe | Elastic Waist",
    price: "₹699",
    originalPrice: "₹999",
    discountPercent: Math.round(((999 - 699) / 999) * 100),
  },
  {
    id: 4,
    images: [skirt1, skirt2],
    name: "Trendy Skirt",
    description: "Soft Crepe | Elastic Waist",
    price: "₹699",
    originalPrice: "₹999",
    discountPercent: Math.round(((999 - 699) / 999) * 100),
  },
];

export default function SimilarProductCard() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  mb-5 gap-6">
      {products.map((product, index) => (
        <div
          key={product.id}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          {/* Image Slider Container */}
          <div className="relative w-full h-64 overflow-hidden">
            <div
              className={`flex h-full transition-transform duration-500 ease-in-out`}
              style={{
                width: `${product.images.length * 100}%`,
                transform:
                  hoveredIndex === index
                    ? "translateX(-50%)"
                    : "translateX(0%)",
              }}
            >
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={product.name}
                  className="w-1/2 h-full object-cover"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="p-4 space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition-colors">
                {product.name}
              </h3>

              {/* ❤️ Favorite & 💬 Comment Icons */}
              <div className="flex flex-col space-y-2 text-gray-500  transition">
                <Favorite fontSize="small" className="cursor-pointer" />
                <ChatBubble fontSize="small" className="cursor-pointer" />
              </div>
            </div>
            <p className="text-gray-500 text-sm">{product.description}</p>
            <div className="flex justify-between items-center pt-2">
              <span className="text-sm text-gray-400 line-through">
                {product.originalPrice}
              </span>
              <span className="text-indigo-600 font-bold text-md">
                {product.price}
              </span>
              <span className="ml-2 text-green-600 text-sm font-semibold">
                {product.discountPercent}% off
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
