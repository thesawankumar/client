import cat1 from "../../../../images/Category.png";
import cat2 from "../../../../images/skirt.png";
import cat3 from "../../../../images/shirt.png";
import cat4 from "../../../../images/formal-shirt.png";
import cat5 from "../../../../images/saree.png";
import cat6 from "../../../../images/tops.png";
import cat7 from "../../../../images/smartwatch.jpg";
import cat8 from "../../../../images/skirt.png";
import cat9 from "../../../../images/shirt.png";
import cat10 from "../../../../images/smartwatch.jpg";

const categories = [
  { title: "Kitchen & Table", image: cat1 },
  { title: "Skirts", image: cat2 },
  { title: "Shirts", image: cat3 },
  { title: "Formal Shirts", image: cat4 },
  { title: "Sarees", image: cat5 },
  { title: "Tops", image: cat6 },
  { title: "Smartwatches", image: cat7 },
  { title: "Western Wear", image: cat8 },
  { title: "Men's Fashion", image: cat9 },
  { title: "Accessories", image: cat10 },
];

export default function ShopByCategoryList() {
  return (
    <>
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Shop By Category
      </h2>
      <div className="py-10 px-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-[150px] h-[150px] rounded-full overflow-hidden border border-gray-200 shadow-md transition-all duration-500 group-hover:shadow-xl group-hover:scale-105 group-hover:ring-2 group-hover:ring-pink-400">
              <img
                className="object-cover object-center h-full w-full transition-transform duration-700 ease-in-out group-hover:scale-110"
                src={cat.image}
                alt={cat.title}
              />
            </div>
            <h1 className="mt-2 text-sm font-medium text-gray-700 text-center">
              {cat.title}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
}
