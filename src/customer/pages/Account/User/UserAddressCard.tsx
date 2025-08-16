import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

interface UserAddressCardProps {
  name: string;
  locality: string;
  city: string;
  address: string;
  state: string;
  pinCode: string;
  mobile: string;
}

export default function UserAddressCard({
  name,
  locality,
  city,
  address,
  state,
  pinCode,
  mobile,
}: UserAddressCardProps) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 flex items-start space-x-4 hover:shadow-lg transition-shadow bg-white">
      <div className="text-red-500 mt-1">
        <LocationOnOutlinedIcon style={{ fontSize: 32 }} />
      </div>
      <div className="space-y-1 text-sm flex-1">
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="text-gray-700">
          {address}, {locality}, {city}, {state} - {pinCode}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Mobile:</span> {mobile}
        </p>
      </div>
    </div>
  );
}
