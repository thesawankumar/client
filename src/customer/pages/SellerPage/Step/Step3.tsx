import { useFormik } from "formik";
import * as Yup from "yup";

export default function Step3() {
  const formik = useFormik({
    initialValues: {
      accountNumber: "",
      ifsc: "",
      accountHolderName: "",
    },
    validationSchema: Yup.object({
      accountNumber: Yup.string()
        .required("Account Number is required")
        .matches(/^\d+$/, "Only numbers allowed"),
      ifsc: Yup.string()
        .required("IFSC Code is required")
        .matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Enter a valid IFSC code"),
      accountHolderName: Yup.string()
        .required("Account Holder Name is required")
        .matches(/^[A-Za-z ]+$/, "Only alphabets and spaces allowed"),
    }),
    onSubmit: (values) => {
      console.log("Submitted Data:", values);
    },
  });

  const fields = [
    { label: "Account Number", name: "accountNumber", type: "text" },
    { label: "IFSC Code", name: "ifsc", type: "text" },
    { label: "Account Holder Name", name: "accountHolderName", type: "text" },
  ] as const;

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="space-y-5 w-full max-w-md mx-auto"
    >
      {fields.map(({ label, name, type }) => (
        <div key={name} className="flex flex-col relative">
          <label htmlFor={name} className="text-sm font-medium mb-1">
            {label}
          </label>
          <input
            id={name}
            name={name}
            type={type}
            className={`border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 ${
              formik.touched[name] && formik.errors[name]
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-blue-300"
            }`}
            value={formik.values[name]}
            onChange={(e) => {
              let value = e.target.value;
              if (name === "accountNumber") {
                value = value.replace(/\D/g, "");
              } else if (name === "ifsc") {
                value = value.toUpperCase().replace(/[^A-Z0-9]/g, "");
              } else if (name === "accountHolderName") {
                value = value.replace(/[^A-Za-z ]/g, "");
              }
              formik.setFieldValue(name, value);
            }}
            onBlur={formik.handleBlur}
          />
          {formik.touched[name] && formik.errors[name] && (
            <span className="absolute left-0 -bottom-5 text-xs text-red-600">
              {formik.errors[name]}
            </span>
          )}
        </div>
      ))}
    </form>
  );
}
