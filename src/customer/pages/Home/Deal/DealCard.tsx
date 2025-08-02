interface DealCardProps {
  image: string;
  title: string;
  offer: string;
}

export default function DealCard({ image, title, offer }: DealCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-xs">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 text-center space-y-2">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-red-600 font-bold">{offer}</p>
        <p className="text-blue-600 font-medium cursor-pointer hover:underline">
          Shop Now
        </p>
      </div>
    </div>
  );
}
