import { useState } from "react";
import SellerRegister from "./SellerRegister";
import SellerLogin from "./SellerLogin";
import { Button } from "@mui/material";

export default function SellerPage() {
  const [isLogin, setIsLogin] = useState(false); // true means show login by default

  const handleToggle = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          {!isLogin ? "Seller Login" : "Create Seller Account"}
        </h2>

        {/* Form Section */}
        <div>{!isLogin ? <SellerLogin /> : <SellerRegister />}</div>

        {/* Toggle Section */}
        <div className="text-center space-y-2">
          <p className="text-gray-600">
            {!isLogin ? "Don't have an account?" : "Already have an account?"}
          </p>
          <Button
            onClick={handleToggle}
            variant="contained"
            fullWidth
            sx={{
              borderRadius: 2,
              textTransform: "none",
              fontWeight: "bold",
              py: 1.2,
            }}
          >
            {isLogin ? "Login" : "Register"}
          </Button>
        </div>
      </div>
    </div>
  );
}
