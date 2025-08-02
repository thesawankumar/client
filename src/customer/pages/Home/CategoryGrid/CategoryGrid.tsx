import categoryImage from "../../../../images/Category.png";

export default function CategoryGrid() {
  return (
    <div className="lg:px-10 lg-h-[600px]">
      <img
        src={categoryImage}
        alt="Category"
        className="w-full h-[500px] rounded-2xl  object-cover"
      />
    </div>
  );
}
