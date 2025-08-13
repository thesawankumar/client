import { Divider } from "@mui/material";
import ProfileCard from "../../../../components/ProfileCard";
import { useAppSelector } from "../../../../redux/store";

export default function UserDetails() {
  const { auth } = useAppSelector((store) => store);

  if (!auth.user) return null; // handle no user case

  const { fullName, email, mobile } = auth.user;

  return (
    <div className="rounded-xl p-4 space-y-6 ">
      <h1 className="text-2xl font-bold text-gray-800">Personal Details</h1>

      <div className="space-y-4">
        <ProfileCard keys="Name" value={fullName || "-"} />
        <Divider className="border-gray-300" />
        <ProfileCard keys="Email" value={email || "-"} />
        <Divider className="border-gray-300" />
        <ProfileCard keys="Mobile" value={mobile || "-"} />
      </div>
    </div>
  );
}
