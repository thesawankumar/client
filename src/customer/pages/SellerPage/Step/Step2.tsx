import { useFormik } from "formik";
import * as Yup from "yup";

export default function Step2() {
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      pincode: "",
      houseNo: "",
      locality: "",
      city: "",
      state: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      mobile: Yup.string()
        .matches(/^[0-9]{10}$/, "Enter a valid 10-digit mobile number")
        .required("Mobile number is required"),
      pincode: Yup.string()
        .matches(/^[0-9]{6}$/, "Enter a valid 6-digit pincode")
        .required("Pincode is required"),
      houseNo: Yup.string().required("House number is required"),
      locality: Yup.string().required("Locality is required"),
      city: Yup.string().required("City is required"),
      state: Yup.string().required("State is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const fields = [
    { label: "Full Name", name: "name", type: "text" },
    { label: "Mobile Number", name: "mobile", type: "tel" },
    { label: "Pincode", name: "pincode", type: "text" },
    { label: "House No. / Building", name: "houseNo", type: "text" },
    { label: "Locality / Town", name: "locality", type: "text" },
    { label: "City", name: "city", type: "text" },
    { label: "State", name: "state", type: "text" },
  ] as const;

  return (
    <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {fields.map(({ label, name, type }) => (
        <div key={name} className="flex flex-col">
          <label htmlFor={name} className="text-sm font-medium">
            {label}
          </label>
          <input
            id={name}
            name={name}
            type={type}
            inputMode={type === "tel" ? "numeric" : undefined}
            className={`border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 ${
              formik.touched[name] && formik.errors[name]
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-blue-300"
            }`}
            value={formik.values[name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="h-2">
            {formik.touched[name] && formik.errors[name] && (
              <span className="text-xs text-red-600">{formik.errors[name]}</span>
            )}
          </div>
        </div>
      ))}
    </form>
  );
}
