import { useEffect } from "react";
import UserAddressCard from "./UserAddressCard";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { fetchUserAddresses } from "../../../../redux/customer/actions/addressAction";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export default function UserAddressList() {
  const dispatch = useAppDispatch();
  const { addresses, loading, error } = useAppSelector(
    (state) => state.address
  );

  useEffect(() => {
    const jwt = localStorage.getItem("user-jwt") || "";
    dispatch(fetchUserAddresses(jwt));
  }, [dispatch]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-gray-500 text-sm">Loading addresses...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-red-500 text-sm">{error}</p>
      </div>
    );

  if (!addresses.length)
    return (
      <div className="flex flex-col justify-center items-center min-h-[200px] text-gray-400 space-y-2">
        <HomeOutlinedIcon style={{ fontSize: 48 }} />
        <p className="text-sm font-medium">No saved addresses found.</p>
        <p className="text-xs text-gray-500">
          You can add a new address to get started.
        </p>
      </div>
    );

  return (
    <div className="space-y-4">
      {addresses.map((addr) => (
        <UserAddressCard key={addr.id} {...addr} />
      ))}
    </div>
  );
}
