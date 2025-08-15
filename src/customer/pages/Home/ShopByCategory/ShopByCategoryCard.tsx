import { useAppSelector } from "../../../../redux/store";

export default function ShopByCategoryList() {
  const { customer } = useAppSelector((store) => store);
  return (
    <>
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-6 text-gray-800">
        Shop By Category
      </h2>
      <div className="py-6 px-4 sm:px-6 md:px-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {customer.homePageData?.shopByCategories
          .slice(0, 10)
          .map((cat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[150px] lg:h-[150px] rounded-full overflow-hidden border border-gray-200 shadow-md transition-all duration-500 group-hover:shadow-xl group-hover:scale-105 group-hover:ring-2 group-hover:ring-pink-400">
                <img
                  className="object-cover object-center h-full w-full transition-transform duration-700 ease-in-out group-hover:scale-110"
                  src={cat.image}
                  alt={cat.name}
                />
              </div>
              <h1 className="mt-2 text-xs sm:text-sm md:text-base font-medium text-gray-700 text-center">
                {cat.name}
              </h1>
            </div>
          ))}
      </div>
    </>
  );
}
