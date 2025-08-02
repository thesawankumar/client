
import CategoryGrid from "./CategoryGrid/CategoryGrid";
import Deal from "./Deal/Deal";
import ElectricCategory from "./ElectricCategory/ElectricCategory";
import ShopByCategory from "./ShopByCategory/ShopByCategory";

export default function Home() {
  return (
    <>
      <div className="space-y-5 lg:space-y-5 relative ">
        <ElectricCategory />
        <CategoryGrid />
        <Deal />
        <ShopByCategory />
 
      </div>
    </>
  );
}
