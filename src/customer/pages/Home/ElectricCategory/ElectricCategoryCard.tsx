type ElectricCategoryCardProps = {
  image: string;
  name: string;
};

export default function ElectricCategoryCard({
  image,
  name,
}: ElectricCategoryCardProps) {
  return (
    <div className="text-center flex flex-col items-center hover:scale-105 transition-transform">
      <img
        className="h-8 w-8 sm:h-6 sm:w-6 md:h-12 md:w-12 object-contain mx-auto"
        src={image}
        alt={name}
      />
      <h2 className="text-xs sm:text-sm md:text-base font-semibold mt-2">
        {name}
      </h2>
    </div>
  );
}
