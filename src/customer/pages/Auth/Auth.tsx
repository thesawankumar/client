import { useState, useRef, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import {
  fetchUserProfile,
  sendLoginOtp,
  signin,
  signup,
} from "../../../redux/auth/AuthAction";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [otpSent, setOtpSent] = useState(false);
  const [otpValues, setOtpValues] = useState<string[]>(Array(6).fill(""));
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);
  const dispatch = useAppDispatch();
  const auth = useAppSelector((store) => store.auth); // useAppSelector corrected
  const navigate = useNavigate();

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
    initialValues: { email: "", otp: "", fullName: "" },
    validationSchema,
    onSubmit: async (values) => {
      try {
        let resultAction;
        if (isLogin) {
          resultAction = await dispatch(signin(values));
        } else {
          resultAction = await dispatch(signup(values));
        }

        if (
          (isLogin && signin.fulfilled.match(resultAction)) ||
          (!isLogin && signup.fulfilled.match(resultAction))
        ) {
          toast.success(
            isLogin ? "Sign-in successful!" : "Registration successful!"
          );
          dispatch(fetchUserProfile(values));
          navigate("/account/profile");
        } else {
          toast.error(isLogin ? "Sign-in failed" : "Registration failed");
        }
      } catch (error) {
        toast.error("Unexpected error during authentication");
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
        <div className="w-full max-w-[360px] bg-white p-6 rounded-2xl shadow-lg">
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
            {/* OTP Fields */}
            {otpSent && (
              <>
                <div className="flex flex-wrap justify-center gap-2">
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
                      className="w-8 sm:w-10 h-8 sm:h-10 text-center border rounded-lg text-lg font-medium outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ))}
                </div>
                {formik.errors.otp && (
                  <p className="text-red-500 text-xs mt-1 text-center">
                    {formik.errors.otp}
                  </p>
                )}
              </>
            )}

            {otpSent && !isLogin && (
              <div className="mt-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullName || ""}
                  className={`w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 text-sm ${
                    formik.touched.fullName && formik.errors.fullName
                      ? "border-red-500 focus:ring-red-300"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                />
                {formik.touched.fullName && formik.errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.fullName}
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
