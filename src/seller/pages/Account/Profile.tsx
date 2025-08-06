import { Edit } from "@mui/icons-material";
import ProfileImage from "../../../images/shirt.png";

export default function Profile() {
  return (
    <div className="p-6 space-y-8">
      <h2 className="text-3xl font-semibold text-gray-800">Profile Details</h2>

      {/* Profile Card */}
      <div className="bg-white border border-gray-300 rounded-2xl p-6 shadow-sm space-y-6 relative">
        <div className="absolute top-4 right-4 cursor-pointer">
          <Edit />
        </div>
        <div className="flex items-center gap-6">
          <img
            src={ProfileImage}
            alt="profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="space-y-2">
            <div className="flex gap-4">
              <p className="text-gray-500 font-medium w-40">Seller Name:</p>
              <p className="text-gray-800 font-semibold">Sawan Kumar</p>
            </div>
            <div className="flex gap-4">
              <p className="text-gray-500 font-medium w-40">Email:</p>
              <p className="text-gray-800 font-semibold">sawan@email.com</p>
            </div>
            <div className="flex gap-4">
              <p className="text-gray-500 font-medium w-40">Mobile:</p>
              <p className="text-gray-800 font-semibold">+91 9876543210</p>
            </div>
          </div>
        </div>
      </div>

      {/* Business Details */}
      <div className="bg-white border border-gray-300 rounded-2xl p-6 shadow-sm space-y-4 relative">
        <div className="absolute top-4 right-4  cursor-pointer">
          <Edit />
        </div>
        <h3 className="text-xl font-semibold text-gray-700">
          Business Details
        </h3>
        <div className="space-y-3">
          <div className="flex gap-4">
            <p className="text-gray-500 font-medium w-40">Business Name:</p>
            <p className="text-gray-800 font-semibold">Sawan Traders</p>
          </div>
          <div className="flex gap-4">
            <p className="text-gray-500 font-medium w-40">GSTIN:</p>
            <p className="text-gray-800 font-semibold">27ABCDE1234F1Z5</p>
          </div>
          <div className="flex gap-4">
            <p className="text-gray-500 font-medium w-40">Account Status:</p>
            <p className="text-green-600 font-semibold">Verified</p>
          </div>
        </div>
      </div>

      {/* Pickup Address */}
      <div className="bg-white border border-gray-300 rounded-2xl p-6 shadow-sm space-y-4 relative">
        <div className="absolute top-4 right-4 cursor-pointer">
          <Edit />
        </div>
        <h3 className="text-xl font-semibold text-gray-700">Pickup Address</h3>
        <div className="space-y-3">
          <div className="flex gap-4">
            <p className="text-gray-500 font-medium w-40">Address:</p>
            <p className="text-gray-800 font-semibold">123 Main Street</p>
          </div>
          <div className="flex gap-4">
            <p className="text-gray-500 font-medium w-40">City:</p>
            <p className="text-gray-800 font-semibold">Patna</p>
          </div>
          <div className="flex gap-4">
            <p className="text-gray-500 font-medium w-40">State:</p>
            <p className="text-gray-800 font-semibold">Bihar</p>
          </div>
          <div className="flex gap-4">
            <p className="text-gray-500 font-medium w-40">Mobile:</p>
            <p className="text-gray-800 font-semibold">+91 9876543210</p>
          </div>
        </div>
      </div>

      {/* Bank Details */}
      <div className="bg-white border border-gray-300 rounded-2xl p-6 shadow-sm space-y-4 relative">
        <div className="absolute top-4 right-4 cursor-pointer">
          <Edit />
        </div>
        <h3 className="text-xl font-semibold text-gray-700">Bank Details</h3>
        <div className="space-y-3">
          <div className="flex gap-4">
            <p className="text-gray-500 font-medium w-40">Account Holder:</p>
            <p className="text-gray-800 font-semibold">Sawan Kumar</p>
          </div>
          <div className="flex gap-4">
            <p className="text-gray-500 font-medium w-40">Account Number:</p>
            <p className="text-gray-800 font-semibold">123456789012</p>
          </div>
          <div className="flex gap-4">
            <p className="text-gray-500 font-medium w-40">IFSC Code:</p>
            <p className="text-gray-800 font-semibold">SBIN0001234</p>
          </div>
        </div>
      </div>
    </div>
  );
}
