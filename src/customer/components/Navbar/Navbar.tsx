import {
  Avatar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { AddShoppingCart, FavoriteBorder, Store } from "@mui/icons-material";

export default function Navbar() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg")); // Example breakpoint for large screens
  return (
    <div>
      <Box>
        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b border-gray-200">
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              <IconButton>
                <MenuIcon />
              </IconButton>
              <h1 className="logo cursor-pointer text-lg md:text-2xl text-[#4F46E5]">
                SnapBuy
              </h1>
            </div>
            <ul className="flex items-center font-medium h-[70px]">
              {["Men", "Women", "Home", "Electronics"].map((item) => (
                <li
                  key={item}
                  className="px-4 text-gray-600 hover:text-[#4F46E5] cursor-pointer flex items-center h-full"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-1 lg:gap-3">
            <IconButton>
              <SearchIcon className="text-gray-600" />
            </IconButton>
            {false ? (
              <Button className="flex items-center gap-2" color="primary">
                <Avatar sx={{ width: 28, height: 28 }} />
                <h1 className="font-semibold hidden lg:block">Sawan</h1>
              </Button>
            ) : (
              <Button color="primary" variant="outlined">
                Login
              </Button>
            )}
            <IconButton>
              <FavoriteBorder className="text-gray-600" sx={{ fontSize: 26 }} />
            </IconButton>
            <IconButton>
              <AddShoppingCart
                className="text-gray-600"
                sx={{ fontSize: 26 }}
              />
            </IconButton>
            {isLargeScreen && (
              <Button variant="outlined" color="primary" startIcon={<Store />}>
                Seller
              </Button>
            )}
          </div>
        </div>
      </Box>
    </div>
  );
}
