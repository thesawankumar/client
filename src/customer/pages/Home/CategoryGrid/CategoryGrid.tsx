import categoryImage from "../../../../images/Category.png";

export default function CategoryGrid() {
  return (
    <div className="px-4 sm:px-6 lg:px-10">
      <img
        src={categoryImage}
        alt="Category"
        className="w-full h-48 sm:h-64 md:h-80 lg:h-[500px] xl:h-[600px] rounded-2xl object-cover"
      />
    </div>
  );
}
