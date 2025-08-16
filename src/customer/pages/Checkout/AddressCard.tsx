import { useEffect } from "react";
import { Radio } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { fetchUserAddresses } from "../../../redux/customer/actions/addressAction";
import type { Address } from "../../../types/UserTypes";

export default function AddressCard({
  selectedAddress,
  setSelectedAddress,
}: {
  selectedAddress: Address | null;
  setSelectedAddress: (addr: Address) => void;
}) {
  const dispatch = useAppDispatch();
  const { addresses, loading, error } = useAppSelector((state) => state.address);

  useEffect(() => {
    const jwt = localStorage.getItem("user-jwt") || "";
    if (jwt) {
      dispatch(fetchUserAddresses(jwt));
    }
  }, [dispatch]);

  if (loading) return <p>Loading addresses...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!addresses || addresses.length === 0) return <p>No addresses found</p>;

  return (
    <div className="space-y-4">
      {addresses.map((address: Address) => (
        <div key={address.id} className="border rounded-md p-4 flex items-start space-x-4">
          <Radio
            checked={selectedAddress?.id === address.id}
            onChange={() => setSelectedAddress(address)}
          />
          <div className="space-y-1 text-sm">
            <p className="font-semibold">{address.name}</p>
            <p className="text-gray-700">{address.locality}, {address.city}, {address.state} - {address.pinCode}</p>
            <p className="text-gray-700">
              <span className="font-semibold">Mobile :</span> {address.mobile}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
