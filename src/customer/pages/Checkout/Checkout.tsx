import { useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import AddressCart from "./AddressCard";
import AddressForm from "./AddressForm";
import PaymentMethodCard from "./PaymentMethodCard";

export default function Checkout() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="pt-10 px-5 sm:px-10 md:px-20 lg:px-40 xl:px-60 min-h-screen bg-gray-50">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Address Selection Section */}
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
                <AddressCart />
                <AddressCart />
              </div>

              <Button
                variant="outlined"
                className="!normal-case !mt-5 !text-sm"
                onClick={handleOpen}
              >
                Add new Address
              </Button>
            </div>
          </div>

          {/* Pricing Summary */}
          <div className="bg-white p-4 rounded-2xl shadow-md w-[300px]">
            <PaymentMethodCard />
          </div>
        </div>
      </div>

      {/* Address Form Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box className="mt-10">
          <AddressForm onClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
}
