import { useState } from "react";
import { useAppDispatch } from "../../../redux/store";
import { addUserAddress } from "../../../redux/customer/actions/addressAction";
import type { Address } from "../../../types/UserTypes";

interface AddressFormProps {
  onClose: () => void;
  setSelectedAddress: (addr: Address) => void;
}

export default function AddressForm({
  onClose,
  setSelectedAddress,
}: AddressFormProps) {
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const [address, setAddress] = useState(""); // street address
  const [locality, setLocality] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !name ||
      !address ||
      !locality ||
      !city ||
      !state ||
      !pinCode ||
      !mobile
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      const jwt = localStorage.getItem("user-jwt") || "";
      const action = await dispatch(
        addUserAddress({
          jwt,
          address: { name, address, locality, city, state, pinCode, mobile },
        })
      );

      const newAddress = (action.payload as Address) || null;
      if (newAddress) {
        setSelectedAddress(newAddress); // automatically select it in Checkout
      }

      onClose(); // close modal
    } catch (err) {
      console.error(err);
      alert("Failed to add address");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto space-y-3"
    >
      <h2 className="text-xl font-bold mb-3">Add New Address</h2>

      <input
        className="w-full border p-2 rounded"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="w-full border p-2 rounded"
        placeholder="Street Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        className="w-full border p-2 rounded"
        placeholder="Locality"
        value={locality}
        onChange={(e) => setLocality(e.target.value)}
      />
      <input
        className="w-full border p-2 rounded"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        className="w-full border p-2 rounded"
        placeholder="State"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <input
        className="w-full border p-2 rounded"
        placeholder="Pin Code"
        value={pinCode}
        onChange={(e) => setPinCode(e.target.value)}
      />
      <input
        className="w-full border p-2 rounded"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />

      <div className="flex justify-end gap-3 mt-3">
        <button
          type="button"
          className="border px-4 py-2 rounded"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Save
        </button>
      </div>
    </form>
  );
}
