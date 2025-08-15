import { Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { createDeal } from "../../../../redux/admin/actions/dealAction";

// ✅ Yup validation schema
const DealSchema = Yup.object().shape({
  discount: Yup.number()
    .typeError("Discount must be a number")
    .required("Discount is required")
    .min(1, "Discount must be at least 1%")
    .max(100, "Discount cannot exceed 100%"),
  categoryId: Yup.number()
    .typeError("Please select a category")
    .required("Category is required"),
});

export default function CreateDeal() {
  const dispatch = useAppDispatch();
  const { customer } = useAppSelector((store) => store);

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-bold text-gray-700 text-center">
        Create New Deal
      </h2>

      <Formik
        initialValues={{
          discount: "",
          categoryId: "",
        }}
        validationSchema={DealSchema}
        onSubmit={(values, { resetForm }) => {
          const reqData = {
            discount: Number(values.discount),
            category: {
              id: Number(values.categoryId),
            },
          };
          console.log("Request Payload:", reqData);
          dispatch(createDeal(reqData));
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            {/* Discount Field */}
            <div className="space-y-1">
              <label className="block text-gray-600 font-medium">
                Discount (%)
              </label>
              <Field
                type="number"
                name="discount"
                placeholder="Enter discount"
                className="w-full px-4 py-2 border rounded-md"
              />
              <ErrorMessage
                name="discount"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Category Field */}
            <div className="space-y-1">
              <label className="block text-gray-600 font-medium">
                Category
              </label>
              <Field
                as="select"
                name="categoryId"
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="">Select Category</option>
                {customer.homePageData?.dealCategories?.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="categoryId"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Submit Button */}
            <Button
              variant="outlined"
              type="submit"
              disabled={isSubmitting}
              className="w-full !rounded-lg"
            >
              {isSubmitting ? "Creating..." : "Create Deal"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
