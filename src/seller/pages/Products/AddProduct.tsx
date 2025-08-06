import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Typography,
} from "@mui/material";
import { colors } from "../../../data/Filter/color";

import { electronicsLevelThreeCategories } from "../../../data/category/levelThree/electronicLevelThree";
import { homeLevelThreeCategories } from "../../../data/category/levelThree/homeLevelThree";
import { menLevelThreeCategories } from "../../../data/category/levelThree/menLevelThree";
import { womenLevelThreeCategories } from "../../../data/category/levelThree/womenLevelThree";
import { electronicsLevelTwoCategories } from "../../../data/category/levelTwo/electronicLevelTwo";
import { homeLevelTwoCategories } from "../../../data/category/levelTwo/homeLevelTwo";
import { menLevelTwoCategories } from "../../../data/category/levelTwo/menLevelTwo";
import { womenLevelTwoCategories } from "../../../data/category/levelTwo/womenLevelTwo";
import { mainCategories } from "../../../data/category/MainCategory";
import { uploadToCloudinary } from "../../../utils/Cloudinary";
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

type ProductFormValues = {
  title: string;
  description: string;
  mrp: string;
  sellingPrice: string;
  color: string;
  size: string;
  images: string[];
  mainCategory: string;
  levelTwoCategory: string;
  levelThreeCategory: string;
};
const categoryTwo: { [key: string]: any[] } = {
  men: menLevelTwoCategories,
  women: womenLevelTwoCategories,
  home: homeLevelTwoCategories,
  electronics: electronicsLevelTwoCategories,
};

const categoryThree: { [key: string]: any[] } = {
  men: menLevelThreeCategories,
  women: womenLevelThreeCategories,
  home: homeLevelThreeCategories,
  electronics: electronicsLevelThreeCategories,
};

export default function AddProduct() {
  const [images, setImages] = useState<string[]>([]);
  const [imageError, setImageError] = useState("");
  const [levelTwoOptions, setLevelTwoOptions] = useState<any[]>([]);
  const [levelThreeOptions, setLevelThreeOptions] = useState<any[]>([]);
  const [uploading, setUploading] = useState(false);

  const formik = useFormik<ProductFormValues>({
    initialValues: {
      title: "",
      description: "",
      mrp: "",
      sellingPrice: "",
      color: "",
      images: [],
      size: "",
      mainCategory: "",
      levelTwoCategory: "",
      levelThreeCategory: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
      mrp: Yup.number()
        .typeError("MRP must be a number")
        .required("MRP is required"),
      sellingPrice: Yup.number()
        .typeError("Selling price must be a number")
        .required("Selling price is required"),
      color: Yup.string().required("Color is required"),
      size: Yup.string().required("Size is required"),
      mainCategory: Yup.string().required("Main category is required"),
      levelTwoCategory: Yup.string().required("Second category is required"),
      levelThreeCategory: Yup.string().required("Third category is required"),
    }),
    onSubmit: (values) => {
      if (images.length === 0) {
        setImageError("At least one image is required");
        return;
      }
      setImageError("");
      console.log("Form submitted:", { ...values, images });
    },
  });

  
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (formik.values.images.length >= 5) {
      setImageError("Maximum 5 images allowed");
      return;
    }

    setUploading(true); // Show spinner

    const url = await uploadToCloudinary(file);

    setUploading(false); // Hide spinner

    if (url) {
      formik.setFieldValue(
        "images",
        [...formik.values.images, url].slice(0, 5)
      );
      setImageError("");
    } else {
      setImageError("Image upload failed");
    }
  };

  const handleMainCategoryChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selected = e.target.value;
    formik.setFieldValue("mainCategory", selected);
    formik.setFieldValue("levelTwoCategory", "");
    formik.setFieldValue("levelThreeCategory", "");

    const levelTwo = categoryTwo[selected] || [];
    setLevelTwoOptions(levelTwo);
    setLevelThreeOptions([]);
  };

  const handleSecondCategoryChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selected = e.target.value;
    formik.setFieldValue("levelTwoCategory", selected);
    formik.setFieldValue("levelThreeCategory", "");

    const main = formik.values.mainCategory;
    const thirdAll = categoryThree[main] || [];
    const levelThree = thirdAll.filter(
      (cat) => cat.parentCategoryId === selected
    );
    setLevelThreeOptions(levelThree);
  };
  const removeImage = (index: number) => {
    const updated = [...formik.values.images];
    updated.splice(index, 1);
    formik.setFieldValue("images", updated);
  };
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="max-w-3xl mx-auto p-6 space-y-6 bg-white shadow-md rounded-xl"
    >
      <Typography variant="h6" sx={{ p: 2 }}>
        Create Product
      </Typography>

      {/* Image Upload Area */}
      <div className="flex flex-wrap justify-center gap-4">
        {/* Upload Box */}
        {formik.values.images.length < 5 && (
          <div className="w-24 h-24 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:border-blue-500 transition-all duration-200 relative">
            {uploading ? (
              // Spinner while uploading
              <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <span className="text-2xl text-gray-400 font-bold">+</span>
              </>
            )}
          </div>
        )}

        {/* Uploaded Images */}
        {formik.values.images.map((img, index) => (
          <div key={index} className="relative inline-block m-2">
            {/* Circular image */}
            <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-300 shadow-md">
              <img
                src={img}
                alt={`img-${index}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Close button - outside top-right of image */}
            <button
              type="button"
              onClick={() => removeImage(index)}
              className="absolute cursor-pointer  -top-1 -right-4  p-1.5 rounded-full  transition"
            >
              <CloseIcon fontSize="small" className="text-red-500" />
            </button>
          </div>
        ))}
      </div>

      {imageError && (
        <p className="text-sm text-red-500 text-center -mt-4">{imageError}</p>
      )}

      {/* Title & Description */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {formik.touched.title && formik.errors.title && (
            <p className="text-sm text-red-500 mt-1">{formik.errors.title}</p>
          )}
        </div>
        <div className="flex-1">
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {formik.touched.description && formik.errors.description && (
            <p className="text-sm text-red-500 mt-1">
              {formik.errors.description}
            </p>
          )}
        </div>
      </div>

      {/* MRP & Selling Price */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            name="mrp"
            placeholder="MRP Price"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mrp}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {formik.touched.mrp && formik.errors.mrp && (
            <p className="text-sm text-red-500 mt-1">{formik.errors.mrp}</p>
          )}
        </div>
        <div className="flex-1">
          <input
            type="text"
            name="sellingPrice"
            placeholder="Selling Price"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.sellingPrice}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {formik.touched.sellingPrice && formik.errors.sellingPrice && (
            <p className="text-sm text-red-500 mt-1">
              {formik.errors.sellingPrice}
            </p>
          )}
        </div>
      </div>

      {/* Color & Size Dropdowns */}
      <div className="flex flex-wrap gap-4">
        {/* Color Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Color
          </label>
          <select
            className="border rounded-md w-85 p-2 text-sm"
            {...formik.getFieldProps("color")}
          >
            <option value="">Select a color</option>
            {colors.map((color) => (
              <option key={color.name} value={color.name}>
                {color.name}
              </option>
            ))}
          </select>
          {formik.touched.color && formik.errors.color && (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.color}
            </div>
          )}
        </div>

        {/* Size Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Size
          </label>
          <select
            className="border rounded-md w-85 p-2 text-sm"
            {...formik.getFieldProps("size")}
          >
            <option value="">Select a size</option>
            {sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          {formik.touched.size && formik.errors.size && (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.size}
            </div>
          )}
        </div>
      </div>
      {/* category and sub category and sub sub category */}
      <div className="flex flex-wrap gap-4">
        {/* Main Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Main Category
          </label>
          <select
            className="border rounded-md w-55 p-2 text-sm"
            name="mainCategory"
            value={formik.values.mainCategory}
            onChange={handleMainCategoryChange}
          >
            <option value="">Select Main Category</option>
            {mainCategories.map((cat) => (
              <option
                key={cat.categoryId.toString()}
                value={cat.categoryId.toString()}
              >
                {cat.categoryId}
              </option>
            ))}
          </select>
          {formik.touched.mainCategory && formik.errors.mainCategory && (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.mainCategory}
            </div>
          )}
        </div>

        {/* Second Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Second Category
          </label>
          <select
            className="border rounded-md w-55 p-2 text-sm"
            name="levelTwoCategory"
            value={formik.values.levelTwoCategory}
            onChange={handleSecondCategoryChange}
          >
            <option value="">Select Second Category</option>
            {levelTwoOptions.map((cat) => (
              <option key={cat.categoryId} value={cat.categoryId}>
                {cat.name}
              </option>
            ))}
          </select>
          {formik.touched.levelTwoCategory &&
            formik.errors.levelTwoCategory && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.levelTwoCategory}
              </div>
            )}
        </div>

        {/* Third Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Third Category
          </label>
          <select
            className="border rounded-md w-55 p-2 text-sm"
            name="levelThreeCategory"
            value={formik.values.levelThreeCategory}
            onChange={(e) =>
              formik.setFieldValue("levelThreeCategory", e.target.value)
            }
          >
            <option value="">Select Third Category</option>
            {levelThreeOptions.map((cat) => (
              <option key={cat.categoryId} value={cat.categoryId}>
                {cat.name}
              </option>
            ))}
          </select>
          {formik.touched.levelThreeCategory &&
            formik.errors.levelThreeCategory && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.levelThreeCategory}
              </div>
            )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Submit Product
        </button>
      </div>
    </form>
  );
}
