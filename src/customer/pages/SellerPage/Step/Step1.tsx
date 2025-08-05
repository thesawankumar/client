import { useFormik } from "formik";
import * as Yup from "yup";

export default function Step1() {
  const formik = useFormik({
    initialValues: {
      mobile: "",
      gstin: "",
    },
    validationSchema: Yup.object({
      mobile: Yup.string()
        .required("Mobile number is required")
        .matches(/^[0-9]{10}$/, "Enter a valid 10-digit mobile number"),
      gstin: Yup.string()
        .required("GSTIN number is required")
        .matches(/^[0-9A-Z]{15}$/, "Enter a valid 15-character GSTIN"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const fields = [
    { label: "Mobile Number", name: "mobile", type: "tel" },
    { label: "GSTIN Number", name: "gstin", type: "text" },
  ] as const;

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">

      <div className="flex flex-col mt-5 sm:flex-row gap-6 justify-center">
        {fields.map(({ label, name, type }) => (
          <div key={name} className="flex flex-col">
            <label htmlFor={name} className="text-sm font-medium mb-1">
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
              onChange={(e) => {
                let value = e.target.value;
                if (name === "mobile") {
                  value = value.replace(/[^0-9]/g, ""); // allow only digits for mobile
                }
                if (name === "gstin") {
                  value = value.toUpperCase().replace(/[^0-9A-Z]/g, ""); // only A-Z, 0-9 for GSTIN
                }
                formik.setFieldValue(name, value);
              }}
              onBlur={formik.handleBlur}
            />
            <div className="h-2 ">
              {formik.touched[name] && formik.errors[name] && (
                <span className="text-xs text-red-600">
                  {formik.errors[name]}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </form>
  );
}
