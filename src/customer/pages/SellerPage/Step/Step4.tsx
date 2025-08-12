import { useFormik } from "formik";
import * as Yup from "yup";

export default function Step4() {
  const formik = useFormik({
    initialValues: {
      businessName: "",
      sellerName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      businessName: Yup.string()
        .required("Business Name is required")
        .min(2, "Too short"),
      sellerName: Yup.string()
        .required("Seller Name is required")
        .matches(/^[A-Za-z ]+$/, "Only alphabets and spaces allowed"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Minimum 6 characters"),
    }),
    onSubmit: (values) => {
      console.log("Step 4 Submitted Data:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 gap-2">
        {/* Business Name */}
        <div>
          <label
            htmlFor="businessName"
            className="block text-sm font-medium mb-1"
          >
            Business Name
          </label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            value={formik.values.businessName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full px-3 py-2 border rounded text-sm focus:outline-none ${
              formik.touched.businessName && formik.errors.businessName
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {formik.touched.businessName && formik.errors.businessName && (
            <p className="text-xs text-red-500 mt-1">
              {formik.errors.businessName}
            </p>
          )}
        </div>

        {/* Seller Name */}
        <div>
          <label htmlFor="sellerName" className=" text-sm font-medium mb-1">
            Seller Name
          </label>
          <input
            id="sellerName"
            name="sellerName"
            type="text"
            value={formik.values.sellerName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full px-3 py-2 border rounded text-sm focus:outline-none ${
              formik.touched.sellerName && formik.errors.sellerName
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {formik.touched.sellerName && formik.errors.sellerName && (
            <p className="text-xs text-red-500 mt-1">
              {formik.errors.sellerName}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className=" text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full px-3 py-2 border rounded text-sm focus:outline-none ${
              formik.touched.email && formik.errors.email
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-xs text-red-500 mt-1">{formik.errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className=" text-sm font-medium mb-1">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full px-3 py-2 border rounded text-sm focus:outline-none ${
              formik.touched.password && formik.errors.password
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          <div className="h-2">
            {formik.touched.password && formik.errors.password && (
              <p className="text-xs text-red-500 ">{formik.errors.password}</p>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
