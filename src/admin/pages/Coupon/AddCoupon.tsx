import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../../redux/store";
import {
  createCoupon,
} from "../../../redux/admin/actions/copuonAction";

// Yup validation schema
const validationSchema = Yup.object({
  couponCode: Yup.string().required("Coupon code is required"),
  discountPercentage: Yup.number()
    .required("Discount is required")
    .min(1, "Min 1%")
    .max(100, "Max 100%"),
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date()
    .required("End date is required")
    .min(Yup.ref("startDate"), "End date must be after start date"),
  minOrderValue: Yup.number()
    .required("Minimum order value is required")
    .min(0, "Must be at least 0"),
});

export default function AddCoupon() {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      couponCode: "",
      discountPercentage: 0,
      startDate: "",
      endDate: "",
      minOrderValue: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const payload = {
        code: values.couponCode,
        discountPercentage: values.discountPercentage,
        validityStartDate: values.startDate,
        validityEndDate: values.endDate,
        minimumOrderValue: Number(values.minOrderValue),
      };

      dispatch(createCoupon(payload)).then(() => {
        resetForm();
      });
    },
  });

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Create Coupon
      </h2>

      <form className="space-y-4" onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Coupon Code
            </label>
            <input
              type="text"
              name="couponCode"
              className="w-full border border-gray-300 rounded-md p-2 text-sm"
              value={formik.values.couponCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.couponCode && formik.errors.couponCode && (
              <p className="text-red-600 text-xs mt-1">
                {formik.errors.couponCode}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Discount Percentage
            </label>
            <input
              type="number"
              name="discountPercentage"
              className="w-full border border-gray-300 rounded-md p-2 text-sm"
              value={formik.values.discountPercentage}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.discountPercentage &&
              formik.errors.discountPercentage && (
                <p className="text-red-600 text-xs mt-1">
                  {formik.errors.discountPercentage}
                </p>
              )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              className="w-full border border-gray-300 rounded-md p-2 text-sm"
              value={formik.values.startDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.startDate && formik.errors.startDate && (
              <p className="text-red-600 text-xs mt-1">
                {formik.errors.startDate}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Date
            </label>
            <input
              type="date"
              name="endDate"
              className="w-full border border-gray-300 rounded-md p-2 text-sm"
              value={formik.values.endDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.endDate && formik.errors.endDate && (
              <p className="text-red-600 text-xs mt-1">
                {formik.errors.endDate}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Minimum Order Value
          </label>
          <input
            type="number"
            name="minOrderValue"
            className="w-full border border-gray-300 rounded-md p-2 text-sm"
            value={formik.values.minOrderValue}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.minOrderValue && formik.errors.minOrderValue && (
            <p className="text-red-600 text-xs mt-1">
              {formik.errors.minOrderValue}
            </p>
          )}
        </div>

        <Button
          variant="outlined"
          type="submit"
          className="text-white py-2 px-4 !rounded-full w-full"
        >
          Create Coupon
        </Button>
      </form>
    </div>
  );
}
