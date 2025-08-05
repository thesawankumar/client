import { Divider } from "@mui/material";
import ProfileCard from "../../../../components/ProfileCard";

export default function UserDetails() {
  return (
    <div className=" rounded-xl p-4 space-y-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800">Personal Details</h1>

      <div className="space-y-4">
        <ProfileCard keys="Name" value="John Doe" />
        <Divider className="border-gray-300" />
        <ProfileCard keys="Email" value="john@example.com" />
        <Divider className="border-gray-300" />
        <ProfileCard keys="Mobile" value="+91 9876543210" />
      </div>
    </div>
  );
}
