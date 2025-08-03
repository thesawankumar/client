import {
  Box,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FilterSection from "./FilterSection";
import ProductCard from "./ProductCard";
import { FilterAlt } from "@mui/icons-material";
import { useState } from "react";

export default function Product() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);

  const handleSortChange = (event: any) => {
    setSort(event.target.value);
  };
  const handlePageChange = (value: number) => {
    setPage(value);
    // You can fetch new data here based on `value`
    console.log("Current Page:", value);
  };

  return (
    <div className="mt-16 px-4 md:px-10 lg:px-20">
      {/* Title */}
      <div className="text-3xl md:text-4xl text-center font-bold text-gray-700 tracking-wide uppercase mb-8 transition-all duration-300">
        Women Sarees
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filter Sidebar (Desktop Only) */}
        {isLargeScreen && (
          <aside className="w-full lg:w-[22%] bg-white rounded-xl shadow-md p-4">
            <FilterSection />
          </aside>
        )}

        {/* Main Product Section */}
        <main className="w-full lg:w-[78%] space-y-6">
          {/* Top Controls */}
          <div className="flex justify-between items-center gap-4">
            {/* Filter Button (Mobile) */}
            {!isLargeScreen && (
              <div className="lg:hidden">
                <IconButton color="primary">
                  <FilterAlt />
                </IconButton>
                <Box className="mt-2">
                  <FilterSection />
                </Box>
              </div>
            )}

            {/* Sort Dropdown */}
            <div className="w-full md:w-1/2 lg:w-1/4 ml-auto">
              <FormControl fullWidth size="small">
                <InputLabel id="sort-label">Sort</InputLabel>
                <Select
                  labelId="sort-label"
                  id="sort"
                  value={sort}
                  label="Sort"
                  onChange={handleSortChange}
                >
                  <MenuItem value={"price_low"}>Price: Low to High</MenuItem>
                  <MenuItem value={"price_high"}>Price: High to Low</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <Divider className="border-gray-300" />

          {/* Product Grid */}
          <section>
            <ProductCard />
            {/* Map through more <ProductCard /> if available */}
          </section>
          <div className="flex items-center justify-center mb-5">
            <Pagination
              count={10}
              variant="outlined"
              page={page}
              onChange={() => handlePageChange}
              shape="rounded"
              color="primary"
            />
          </div>
        </main>
      </div>
    </div>
  );
}
