import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";
import { colors } from "../../../data/Filter/color";
import { priceRanges } from "../../../data/Filter/price";
import { discounts } from "../../../data/Filter/discount";
import { useSearchParams } from "react-router-dom";

export default function FilterSection() {
  const [selectedColor, setSelectedColor] = useState("");
  const [showAllColors, setShowAllColors] = useState(false);

  const visibleCount = showAllColors ? colors.length : 4;
  const visibleColors = colors.slice(0, visibleCount);
  const remaining = colors.length - visibleCount;

  const [selectedPrice, setSelectedPrice] = useState("");
  const [showAllPrice, setShowAllPrices] = useState(false);

  const visiblePriceCount = showAllPrice ? priceRanges.length : 2;
  const visiblePrices = priceRanges.slice(0, visiblePriceCount);
  const remainingPrices = priceRanges.length - visiblePriceCount;
  const [selectedDiscount, setSelectedDiscount] = useState("");
  const [showAllDiscounts, setShowAllDiscounts] = useState(false);

  const visibleDiscountCount = showAllDiscounts ? discounts.length : 4;
  const visibleDiscounts = discounts.slice(0, visibleDiscountCount);
  const hiddenDiscountCount = discounts.length - visibleDiscountCount;
  const [searchParams, setSearchParams] = useSearchParams();

  const updateFilterParams = (e: any) => {
    const { value, name } = e.target;
    if (value) {
      searchParams.set(name, value);
    } else {
      searchParams.delete(name);
    }
    setSearchParams(searchParams);
  };
  const clearAllFilters = () => {
    setSelectedColor("");
    setSelectedPrice("");
    setSelectedDiscount("");

    searchParams.delete("color");
    searchParams.delete("price");
    searchParams.delete("discount");

    setSearchParams(searchParams);
  };

  return (
    <div className="space-y-5 bg-white shadow-md rounded-lg border p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold text-gray-800">Filters</p>
        <Button
          variant="outlined"
          size="small"
          color="error"
          sx={{
            textTransform: "none",
            fontWeight: 500,
            borderRadius: "8px",
            paddingX: "12px",
          }}
          onClick={clearAllFilters}
        >
          Clear All
        </Button>
      </div>

      <Divider className="border-gray-300" />

      {/* Color Filter */}
      <section>
        <FormControl>
          <FormLabel className="mb-2 text-base text-gray-700">Color</FormLabel>
          <RadioGroup
            name="color"
            aria-labelledby="color"
            value={selectedColor}
            onChange={(e) => {
              setSelectedColor(e.target.value);
              updateFilterParams(e);
            }}
          >
            {visibleColors.map((item) => (
              <FormControlLabel
                key={item.name}
                value={item.hex}
                control={
                  <Radio
                    sx={{
                      color: "#ccc", // unselected radios in gray
                      "&.Mui-checked": {
                        color: selectedColor === item.hex ? item.hex : "#ccc",
                      },
                    }}
                  />
                }
                label={
                  <div className="flex items-center gap-2">
                    <span
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: item.hex }}
                    />
                    <span>{item.name}</span>
                  </div>
                }
              />
            ))}
          </RadioGroup>

          {/* Toggle Button */}
          {colors.length > 4 && (
            <Button
              onClick={() => setShowAllColors(!showAllColors)}
              size="small"
              sx={{
                textTransform: "none",
                mt: 1,
                fontSize: "0.875rem",
              }}
            >
              {showAllColors ? "Show Less" : `Show ${remaining} More`}
            </Button>
          )}
        </FormControl>
      </section>
      {/* Price Filter */}
      <section>
        <FormControl>
          <FormLabel className="mb-2 text-base text-gray-700" id="price">
            Price
          </FormLabel>
          <RadioGroup
            name="price"
            aria-labelledby="price"
            value={selectedPrice}
            onChange={(e) => {
              setSelectedPrice(e.target.value);
              updateFilterParams(e);
            }}
          >
            {visiblePrices.map((item) => (
              <FormControlLabel
                key={item.name}
                value={item.value}
                control={<Radio size="small" />}
                label={item.name}
              />
            ))}
          </RadioGroup>

          {/* Show More / Show Less */}
          {priceRanges.length > 2 && (
            <Button
              onClick={() => setShowAllPrices(!showAllPrice)}
              size="small"
              sx={{
                textTransform: "none",
                mt: 1,
                fontSize: "0.875rem",
              }}
            >
              {showAllPrice ? "Show Less" : `Show ${remainingPrices} More`}
            </Button>
          )}
        </FormControl>
      </section>
      {/* Discount Filter */}
      <section>
        <FormControl>
          <FormLabel className="mb-2 text-base text-gray-700">
            Discount
          </FormLabel>
          <RadioGroup
            name="discount"
            aria-labelledby="brand"
            value={selectedDiscount}
            onChange={(e) => {
              setSelectedDiscount(e.target.value);
              updateFilterParams(e);
            }}
          >
            {visibleDiscounts.map((item) => (
              <FormControlLabel
                key={item.name}
                value={item.value}
                control={<Radio size="small" />}
                label={item.name}
              />
            ))}
          </RadioGroup>

          {discounts.length > 4 && (
            <Button
              onClick={() => setShowAllDiscounts((prev) => !prev)}
              size="small"
              sx={{
                textTransform: "none",
                mt: 1,
                fontSize: "0.875rem",
              }}
            >
              {showAllDiscounts
                ? "Show Less"
                : `Show More (${hiddenDiscountCount})`}
            </Button>
          )}
        </FormControl>
      </section>
    </div>
  );
}

//discount
