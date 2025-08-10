import { Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  mobile: "",
  pinCode: "",
  houseNo: "",
  address: "",
  locality: "",
  city: "",
  state: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Enter valid 10-digit mobile")
    .required("Mobile is required"),
  pincode: Yup.string()
    .matches(/^[0-9]{6}$/, "Enter valid 6-digit pincode")
    .required("Pincode is required"),
  houseNo: Yup.string().required("House No. / Building is required"),
  locality: Yup.string().required("Locality / Town is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
});

const FloatingInput = ({
  name,
  label,
  type = "text",
}: {
  name: string;
  label: string;
  type?: string;
}) => (
  <div className="relative">
    <Field
      id={name}
      name={name}
      type={type}
      placeholder=" "
      className="peer w-full border border-gray-300 px-2 pt-4 pb-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
    />
    <label
      htmlFor={name}
      className="absolute left-2 top-2 text-sm text-gray-500 transition-all
        peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
        peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
    >
      {label}
    </label>
    <ErrorMessage
      name={name}
      render={(msg) => (
        <div className="text-red-500 text-xs mt-1 animate-slide-in">{msg}</div>
      )}
    />
  </div>
);

export default function AddressForm({ onClose }: { onClose?: () => void }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Address Submitted:", values);
        if (onClose) onClose();
      }}
    >
      <Form className="relative bg-white p-6 rounded-2xl w-[400px] max-w-xl mx-auto space-y-6 shadow-lg">
        {/* Close Button */}
        {onClose && (
          <IconButton
            onClick={onClose}
            className="!absolute top-2 right-2 text-gray-600 hover:text-red-600"
          >
            <CloseIcon />
          </IconButton>
        )}

        <h2 className="text-2xl font-bold text-center text-gray-800">
          Add New Address
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FloatingInput name="name" label="Full Name" />
          <FloatingInput name="mobile" label="Mobile Number" />
          <FloatingInput name="pincode" label="Pincode" />
          <FloatingInput name="houseNo" label="House No. / Building" />
          <FloatingInput name="locality" label="Locality / Town" />
          <FloatingInput name="city" label="City" />
          <FloatingInput name="state" label="State" />
        </div>

        <div className="text-center">
          <Button
            type="submit"
            variant="outlined"
            className=" text-white px-6 py-2 rounded-md transition"
          >
            Add Address
          </Button>
        </div>
      </Form>
    </Formik>
  );
}
