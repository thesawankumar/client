import { useState, useRef, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { sendLoginOtp, signin } from "../../../redux/auth/AuthAction";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [otpSent, setOtpSent] = useState(false);
  const [otpValues, setOtpValues] = useState<string[]>(Array(6).fill(""));
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);
  const dispatch = useAppDispatch();
  const auth = useAppSelector((store) => store.auth); // useAppSelector corrected

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    otp: Yup.string().when("email", {
      is: () => otpSent,
      then: (schema) =>
        schema
          .required("OTP is required")
          .length(6, "OTP must be 6 digits")
          .matches(/^\d+$/, "OTP must be numeric"),
      otherwise: (schema) => schema.notRequired(),
    }),
    name: Yup.string().when([], {
      is: () => !isLogin && otpSent,
      then: (schema) => schema.required("Name is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
  });

  const formik = useFormik({
    initialValues: { email: "", otp: "", name: "" },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const resultAction = await dispatch(signin(values));
        if (signin.fulfilled.match(resultAction)) {
          toast.success("Sign-in successful!");
          // After signin, reset or do something else if needed
        } else {
          toast.error("Sign-in failed");
        }
      } catch (error) {
        toast.error("Unexpected error during sign-in");
      }
    },
  });

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

  useEffect(() => {
    formik.setFieldValue("otp", otpValues.join(""));
  }, [otpValues]);

  const sendOtpHandler = async () => {
    if (!formik.values.email || formik.errors.email) {
      formik.setTouched({ email: true });
      return;
    }
    try {
      const resultAction = await dispatch(
        sendLoginOtp({ email: formik.values.email, role: "ROLE_CUSTOMER" })
      );
      if (sendLoginOtp.fulfilled.match(resultAction)) {
        toast.success("OTP sent successfully!");
        setOtpSent(true);
      } else {
        toast.error("Failed to send OTP");
      }
    } catch (error) {
      toast.error("Unexpected error sending OTP");
    }
  };

  const handleTabSwitch = (login: boolean) => {
    setIsLogin(login);
    setOtpSent(false);
    setOtpValues(Array(6).fill(""));
    otpRefs.current = [];
    formik.resetForm();
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-[360px] bg-white p-6 rounded-2xl shadow-lg">
          {/* Tab Switch */}
          <div className="flex mb-6 relative">
            <button
              onClick={() => handleTabSwitch(true)}
              className={`flex-1 py-2 text-sm font-medium transition-colors ${
                isLogin ? "text-blue-600" : "text-gray-500"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => handleTabSwitch(false)}
              className={`flex-1 py-2 text-sm font-medium transition-colors ${
                !isLogin ? "text-blue-600" : "text-gray-500"
              }`}
            >
              Register
            </button>
            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-blue-600 transition-all duration-300 ${
                isLogin ? "w-1/2" : "w-1/2 translate-x-full"
              }`}
            />
          </div>

          {/* Form */}
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                disabled={otpSent || auth.loading}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={`w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 text-sm ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500 focus:ring-red-300"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>
            {/* OTP Fields */}
            {otpSent && (
              <>
                <div className="flex justify-between">
                  {otpValues.map((digit, idx) => (
                    <input
                      key={idx}
                      type="text"
                      maxLength={1}
                      value={digit}
                      ref={(el: HTMLInputElement | null) => {
                        otpRefs.current[idx] = el;
                      }}
                      onChange={(e) => handleOtpChange(idx, e.target.value)}
                      className="w-12 h-12 text-center border rounded-lg text-lg font-medium outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ))}
                </div>
                {formik.errors.otp && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.otp}
                  </p>
                )}
              </>
            )}
            {otpSent && !isLogin && (
              <div className="mt-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name || ""}
                  className={`w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 text-sm ${
                    formik.touched.name && formik.errors.name
                      ? "border-red-500 focus:ring-red-300"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.name}
                  </p>
                )}
              </div>
            )}

            {!otpSent ? (
              <button
                type="button"
                onClick={sendOtpHandler}
                disabled={auth.loading}
                className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 disabled:opacity-70 text-white py-2 rounded-md text-sm font-medium transition"
              >
                {auth.loading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  "Send OTP"
                )}
              </button>
            ) : (
              <button
                type="submit"
                disabled={auth.loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-70 text-white py-2 rounded-md text-sm font-medium transition"
              >
                {auth.loading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : isLogin ? (
                  "Login"
                ) : (
                  "Register"
                )}
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
