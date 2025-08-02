type ElectricCategoryCardProps = {
  image: string;
  name: string;
};

export default function ElectricCategoryCard({
  image,
  name,
}: ElectricCategoryCardProps) {
  return (
    <div className="text-center ">
      <img
        className="h-10 w-10 object-contain mx-auto"
        src={image}
        alt={name}
      />
      <h2 className="text-sm font-semibold mt-2">{name}</h2>
    </div>
  );
}
