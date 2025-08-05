export default function ProfileCard({
  keys,
  value,
}: {
  keys: string;
  value: string;
}) {
  return (
    <div className="flex justify-between items-center  rounded-lg p-2">
      <span className="text-gray-600 font-medium">{keys}</span>
      <span className="text-gray-800 font-semibold">{value}</span>
    </div>
  );
}
