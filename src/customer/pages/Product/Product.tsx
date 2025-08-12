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
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { fetchAllProduct } from "../../../redux/customer/actions/customerProductAction";
import { useParams, useSearchParams } from "react-router-dom";
import { priceRanges } from "../../../data/Filter/price";

export default function Product() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const { categoryId } = useParams();
  const { totalPages } = useAppSelector((store) => store.product);

  const handleSortChange = (event: any) => {
    setSort(event.target.value);
  };

  const handlePageChange = (_: any, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const priceValue = searchParams.get("price");
    const color = searchParams.get("color");
    const discount = searchParams.get("discount");

    const filters: any = {
      pageNumber: page - 1,
      totalPages: 8,
      categoryId,
    };

    if (priceValue) {
      const priceRange = priceRanges.find((p) => p.value === priceValue);
      if (priceRange) {
        filters.minPrice = priceRange.min;
        if (priceRange.max !== null) {
          filters.maxPrice = priceRange.max;
        }
      }
    }

    if (color) {
      filters.color = color;
    }

    if (discount) {
      filters.minDiscount = Number(discount);
    }

    if (sort === "price_low") {
      filters.sort = "price_low";
    } else if (sort === "price_high") {
      filters.sort = "price_high";
    }

    dispatch(fetchAllProduct(filters));
  }, [searchParams, sort, page, categoryId, dispatch]);

  return (
    <div className="mt-6 px-4 sm:px-6 lg:px-20 mb-5">
      <div className="text-2xl sm:text-3xl md:text-4xl text-center font-bold text-gray-700 mb-8">
        Women Sarees
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {isLargeScreen && (
          <aside className="w-full lg:w-[22%] bg-white rounded-xl shadow-md p-4">
            <FilterSection />
          </aside>
        )}

        <main className="w-full lg:w-[78%] space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {!isLargeScreen && (
              <div className="w-full sm:w-auto">
                <IconButton color="primary">
                  <FilterAlt />
                </IconButton>
                <Box className="mt-2 sm:mt-0">
                  <FilterSection />
                </Box>
              </div>
            )}

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 ml-auto">
              <FormControl fullWidth size="small">
                <InputLabel>Sort</InputLabel>
                <Select value={sort} onChange={handleSortChange} label="Sort">
                  <MenuItem value={"price_low"}>Price: Low to High</MenuItem>
                  <MenuItem value={"price_high"}>Price: High to Low</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <Divider />

          <ProductCard />

          <div className="flex items-center justify-center mb-5">
            <Pagination
              count={totalPages || 1}
              variant="outlined"
              page={page}
              onChange={handlePageChange}
              shape="rounded"
              color="primary"
            />
          </div>
        </main>
      </div>
    </div>
  );
}
