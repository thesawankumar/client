import ReviewImage from "../../../images/saree.png";
import { LinearProgress, Box, Rating } from "@mui/material";
import ReviewCard from "./ReviewCard";

export default function ReviewPage() {
  return (
    <div className="p-5 lg:px-20 flex flex-col lg:flex-row gap-8">
      {/* Left - Product Info */}
      <section className="w-full lg:w-[30%] flex flex-col gap-4">
        <img
          src={ReviewImage}
          alt="Product"
          className="w-[95%] max-h-[400px] object-fill rounded-2xl  transition-transform duration-300 hover:scale-105 "
        />
        <div>
          <h1 className="text-lg font-semibold text-gray-800">Raam Clothing</h1>
          <p className="text-sm text-gray-600">Silk Blend Kanjeevaram Saree</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xl font-bold text-green-600">₹1149</p>
          <p className="text-gray-500 line-through">₹1899</p>
          <p className="text-blue-600 text-sm font-semibold">39% off</p>
        </div>
      </section>

      {/* Right - Ratings & Reviews */}
      <section className="w-full lg:w-[70%] space-y-3 ">
        {/* Ratings summary */}
        <h2 className="text-2xl font-bold  text-gray-800">Reviews & Ratings</h2>
        <div className="bg-white rounded-xl p-4 shadow">
          <h2 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
            <Box mt={1}>
              <Rating value={4} readOnly size="small" />
            </Box>
            Ratings
          </h2>

          {[
            { label: "Excellent", value: 60, color: "#00C853" }, // Green
            { label: "Very Good", value: 50, color: "#64DD17" }, // Light Green
            { label: "Good", value: 35, color: "#FFD600" }, // Yellow
            { label: "Average", value: 20, color: "#FF9100" }, // Orange
            { label: "Poor", value: 10, color: "#D50000" }, // Red
          ].map((rating) => (
            <div key={rating.label} className="mb-3">
              <div className="flex justify-between text-sm mb-1">
                <span>{rating.label}</span>
                <span>19259</span>
              </div>
              <LinearProgress
                variant="determinate"
                value={rating.value}
                sx={{
                  height: 6,
                  borderRadius: 4,
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: rating.color, // yahan har rating ke hisaab se color set hoga
                  },
                }}
              />
            </div>
          ))}
        </div>

        {/* Single Review */}
        <div className="flex gap-2">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </section>
    </div>
  );
}
