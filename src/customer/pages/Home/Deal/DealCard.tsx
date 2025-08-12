interface DealCardProps {
  image: string;
  title: string;
  offer: string;
}

export default function DealCard({ image, title, offer }: DealCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] mx-auto">
      <img
        src={image}
        alt={title}
        className="w-full h-28 sm:h-32 md:h-36 lg:h-40 object-cover"
      />
      <div className="p-2 sm:p-3 md:p-4 text-center space-y-1 sm:space-y-2">
        <p className="text-sm sm:text-base md:text-lg font-semibold truncate">{title}</p>
        <p className="text-red-600 font-bold text-xs sm:text-sm md:text-base">{offer}</p>
        <p className="text-blue-600 font-medium text-xs sm:text-sm cursor-pointer hover:underline">
          Shop Now
        </p>
      </div>
    </div>
  );
}
