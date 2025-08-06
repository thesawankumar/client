import { Button } from "@mui/material";
import { useState } from "react";
import { mainCategories } from "../../../../data/category/MainCategory";

export default function CreateDeal() {
  const [discount, setDiscount] = useState("");
  const [category, setCategory] = useState("");

  // You can replace this with dynamic data if needed

  const handleCreateDeal = () => {
    console.log({ discount, category });
    // Add your create logic here
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-bold text-gray-700 text-center">
        Create New Deal
      </h2>

      <div className="space-y-2">
        <label className="block text-gray-600 font-medium">Discount (%)</label>
        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          placeholder="Enter discount"
          className="w-full px-4 py-2 border rounded-md  "
        />
      </div>

      <div className="space-y-2">
        <label className="block text-gray-600 font-medium">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2 border rounded-md  "
        >
          <option value="">Select Category</option>
          {mainCategories.map((cat) => (
            <option key={cat.level} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <Button
        variant="outlined"
        type="submit"
        onClick={handleCreateDeal}
        className="w-full  text-white py-2 !rounded-lg "
      >
        Create Deal
      </Button>
    </div>
  );
}
