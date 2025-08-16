import { useState } from "react";
import { Button, Modal } from "@mui/material";
import AddressForm from "./AddressForm";
import PaymentMethodCard from "./PaymentMethodCard";
import AddressCard from "./AddressCard";
import { useAppSelector, useAppDispatch } from "../../../redux/store";
import type { Address } from "../../../types/UserTypes";
import { createOrder } from "../../../redux/customer/actions/orderAction";

export default function Checkout() {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [paymentGateway, setPaymentGateway] = useState("RAZORPAY");
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { cart } = useAppSelector((state) => state.cart);

  const subtotal =
    cart?.cartItems?.reduce((acc, item) => acc + item.sellingPrice, 0) || 0;
  const discount = cart?.discount || 0;
  const shipping = 79;
  const platformFee = 0;
  const total = subtotal - discount + shipping + platformFee;

  const handleCheckout = async () => {
    if (!selectedAddress?.id) {
      alert("Please select an address before checkout!");
      return;
    }

    try {
      const jwt = localStorage.getItem("user-jwt") || "";

      await dispatch(
        createOrder({
          addressId: selectedAddress.id, // send only ID
          jwt,
          paymentGateway,
        })
      ).unwrap();
    } catch (err: any) {
      console.error("Checkout failed:", err);
      alert(err || "Failed to create order");
    }
  };

  return (
    <>
      <div className="pt-10 px-5 sm:px-10 md:px-20 lg:px-40 xl:px-60 min-h-screen bg-gray-50">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Address Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex justify-between items-center border-b pb-4 mb-4">
                <h1 className="text-2xl font-bold">Select Address</h1>
                <Button
                  variant="outlined"
                  className="!normal-case !text-sm"
                  onClick={handleOpen}
                >
                  Add new Address
                </Button>
              </div>

              <div className="space-y-4">
                <AddressCard
                  selectedAddress={selectedAddress}
                  setSelectedAddress={setSelectedAddress}
                />
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="bg-white p-4 rounded-2xl shadow-md w-[300px]">
            <PaymentMethodCard
              selectedGateway={paymentGateway}
              setSelectedGateway={setPaymentGateway}
              subtotal={subtotal}
              discount={discount}
              shipping={shipping}
              platformFee={platformFee}
              total={total}
              onCheckout={handleCheckout}
            />
          </div>
        </div>
      </div>

      {/* Address Form Modal */}
      <Modal open={open} onClose={handleClose}>
        <div className="mt-10">
          <AddressForm
            onClose={handleClose}
            setSelectedAddress={setSelectedAddress} // auto-select new address
          />
        </div>
      </Modal>
    </>
  );
}
