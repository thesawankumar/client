
import ElectricCategoryCard from "./ElectricCategoryCard";
import { useAppSelector } from "../../../../redux/store";

type Category = {
  name: string;
  image: string;
};


export default function ElectricCategory() {
  const { customer } = useAppSelector((store) => store);
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 py-5 px-4 sm:px-10 lg:px-20 border-b border-gray-300">
      {customer.homePageData?.electricCategories.slice(0, 7).map((item) => (
        <ElectricCategoryCard
          key={item.name}
          image={item.image}
          name={item.name || ""}
        />
      ))}
    </div>
  );
}
