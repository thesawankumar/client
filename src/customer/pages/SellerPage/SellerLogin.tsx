import { useState, useRef, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../../redux/store";
import { sendLoginOtp } from "../../../redux/auth/AuthAction";
import { sellerLogin } from "../../../redux/seller/actions/sellerAction";

export default function SellerLogin() {
  const [showOtp, setShowOtp] = useState(false);
  const [otpValues, setOtpValues] = useState<string[]>(Array(6).fill(""));
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      otp: Yup.string().when("email", {
        is: () => showOtp,
        then: (schema) =>
          schema
            .required("OTP is required")
            .length(6, "OTP must be 6 digits")
            .matches(/^\d+$/, "OTP must be numeric"),
        otherwise: (schema) => schema.notRequired(),
      }),
    }),
    onSubmit: (values) => {
      dispatch(sellerLogin(values));
    },
  });

  const sendOtpHandler = async () => {
    if (!formik.values.email || formik.errors.email) {
      formik.setTouched({ email: true });
      return;
    }
    await dispatch(
      sendLoginOtp({ email: formik.values.email, role: "ROLE_SELLER" })
    );
    setShowOtp(true); // Show OTP fields after successful OTP send
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otpValues];
    newOtp[index] = value;
    setOtpValues(newOtp);

    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    } else if (!value && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  // Keep Formik in sync with local OTP state
  useEffect(() => {
    formik.setFieldValue("otp", otpValues.join(""));
  }, [otpValues]);

  return (
    <div className="p-8 max-w-md mx-auto space-y-6 bg-white rounded-xl shadow">
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* Email Input */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            disabled={showOtp}
            className={`border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 ${
              formik.touched.email && formik.errors.email
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-blue-300"
            }`}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <span className="text-xs text-red-600 mt-1">
              {formik.errors.email}
            </span>
          )}
        </div>

        {/* OTP Input */}
        {showOtp && (
          <div className="flex flex-col items-center gap-2 mt-4">
            <div className="flex justify-center gap-2">
              {otpValues.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  className="w-10 h-12 border border-gray-400 text-center text-lg rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  ref={(el: HTMLInputElement | null) => {
                    otpRefs.current[index] = el;
                  }}
                />
              ))}
            </div>
            {formik.errors.otp && (
              <p className="text-sm text-red-600">{formik.errors.otp}</p>
            )}
          </div>
        )}

        {/* Dynamic Submit Button */}
        {!showOtp ? (
          <button
            type="button"
            onClick={sendOtpHandler}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium transition"
          >
            Send OTP
          </button>
        ) : (
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium transition"
          >
            Login
          </button>
        )}
      </form>
    </div>
  );
}
