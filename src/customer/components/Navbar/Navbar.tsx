import {
  Avatar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { AddShoppingCart, FavoriteBorder, Store } from "@mui/icons-material";
import { mainCategories } from "../../../data/category/MainCategory";
import CategorySheet from "./CategorySheet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/store";

export default function Navbar() {
  const data = mainCategories;
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [selectedCategory, setSelectedCategory] = useState("men");
  const [showCategorySheet, setShowCategorySheet] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useAppSelector((store) => store.auth);

  const toggleDrawer = (open: boolean) => {
    setMobileMenuOpen(open);
  };

  return (
    <Box>
      <Box className="sticky top-0 right-0 left-0 bg-white" sx={{ zIndex: 2 }}>
        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b border-gray-200">
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              {!isLargeScreen && (
                <IconButton onClick={() => toggleDrawer(true)}>
                  <MenuIcon />
                </IconButton>
              )}
              <h1
                onClick={() => navigate("/")}
                className="logo cursor-pointer text-lg md:text-2xl text-[#4F46E5]"
              >
                SnapBuy
              </h1>
            </div>

            {isLargeScreen && (
              <ul className="flex items-center font-medium h-[70px]">
                {data.map((item, index) => (
                  <li
                    key={index}
                    onMouseLeave={() => setShowCategorySheet(false)}
                    onMouseEnter={() => {
                      setShowCategorySheet(true);
                      setSelectedCategory(item.categoryId.toString());
                    }}
                    className="px-4 text-gray-600 hover:text-[#4F46E5] cursor-pointer flex items-center h-full"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Right Icons */}
          {/* Right Icons */}
          <div className="flex items-center gap-1 lg:gap-3">
            {isLargeScreen && (
              <>
                <IconButton>
                  <SearchIcon className="text-gray-600" />
                </IconButton>

                {user ? (
                  <Button
                    onClick={() => navigate("/account/profile")}
                    className="flex items-center gap-2"
                    color="primary"
                  >
                    <Avatar sx={{ width: 28, height: 28 }} />
                    <h1 className="font-semibold hidden lg:block">
                      {user?.fullName}
                    </h1>
                  </Button>
                ) : (
                  <Button
                    onClick={() => navigate("/auth")}
                    color="primary"
                    variant="outlined"
                  >
                    Login
                  </Button>
                )}
              </>
            )}

            {/* Always visible on mobile & desktop */}
            <IconButton onClick={() => navigate("/wishlist")} size="small">
              <FavoriteBorder className="text-gray-600" sx={{ fontSize: 22 }} />
            </IconButton>
            <IconButton onClick={() => navigate("/cart")} size="small">
              <AddShoppingCart
                className="text-gray-600"
                sx={{ fontSize: 22 }}
              />
            </IconButton>

            {isLargeScreen && (
              <Button
                onClick={() => navigate("/become-seller")}
                variant="outlined"
                color="primary"
                startIcon={<Store />}
              >
                Seller
              </Button>
            )}
          </div>
        </div>

        {/* Hover Category Sheet */}
        {isLargeScreen && showCategorySheet && (
          <div
            className="absolute top-[4.41rem] left-20 right-20 gap-2"
            onMouseLeave={() => setShowCategorySheet(false)}
            onMouseEnter={() => setShowCategorySheet(true)}
          >
            <CategorySheet selectedCategory={selectedCategory} />
          </div>
        )}
      </Box>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={() => toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#fff",
            paddingTop: 2,
          },
        }}
      >
        <Box sx={{ width: 260 }} role="presentation">
          {/* Logo */}
          <Box sx={{ px: 2, mb: 2 }}>
            <h1
              onClick={() => {
                navigate("/");
                toggleDrawer(false);
              }}
              className="text-2xl font-bold text-[#4F46E5] cursor-pointer"
            >
              SnapBuy
            </h1>
          </Box>

          {/* Categories */}
          <Box sx={{ px: 2, fontSize: 14, fontWeight: 600, color: "gray" }}>
            Categories
          </Box>
          <List>
            {data.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate(`/category/${item.categoryId}`);
                    toggleDrawer(false);
                  }}
                  sx={{
                    py: 1.2,
                    "&:hover": { backgroundColor: "#f5f5f5" },
                  }}
                >
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{ fontSize: 15 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 1 }} />

          {/* User Section */}
          <Box sx={{ px: 2, fontSize: 14, fontWeight: 600, color: "gray" }}>
            Account
          </Box>
          {user ? (
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate("/account/profile");
                    toggleDrawer(false);
                  }}
                  sx={{ py: 1.2 }}
                >
                  <Avatar sx={{ width: 28, height: 28, mr: 1 }} />
                  <ListItemText
                    primary={user.fullName}
                    primaryTypographyProps={{ fontSize: 15 }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          ) : (
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate("/auth");
                    toggleDrawer(false);
                  }}
                  sx={{ py: 1.2 }}
                >
                  <ListItemText
                    primary="Login"
                    primaryTypographyProps={{ fontSize: 15 }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          )}

          {/* Seller Option */}
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/become-seller");
                  toggleDrawer(false);
                }}
                sx={{ py: 1.2 }}
              >
                <Store sx={{ mr: 1, color: "#4F46E5" }} />
                <ListItemText primary="Seller" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
