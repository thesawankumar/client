import { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Avatar,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { fetchSellerProduct } from "../../../redux/seller/actions/productAction";

export default function ProductTable() {
  const dispatch = useAppDispatch();
  const { sellerProduct } = useAppSelector((store) => store);

  useEffect(() => {
    dispatch(fetchSellerProduct(localStorage.getItem("jwt")));
  }, []);
  return (
    <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
      <Typography variant="h6" sx={{ p: 2 }}>
        All Products
      </Typography>
      <Table>
        <TableHead>
          <TableRow className="bg-gray-100">
            <TableCell>
              <strong>Image</strong>
            </TableCell>
            <TableCell>
              <strong>Title</strong>
            </TableCell>
            <TableCell>
              <strong>MRP</strong>
            </TableCell>
            <TableCell>
              <strong>Selling Price</strong>
            </TableCell>
            <TableCell>
              <strong>Color</strong>
            </TableCell>
            <TableCell>
              <strong>Stock</strong>
            </TableCell>
            <TableCell>
              <strong>Update</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sellerProduct.product.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <div style={{ display: "flex", gap: "4px" }}>
                  {product.images.slice(0, 4).map((img, idx) => (
                    <Avatar
                      key={idx}
                      src={img}
                      variant="rounded"
                      sx={{ width: 40, height: 40 }}
                    />
                  ))}
                  {product.images.length > 4 && (
                    <Avatar
                      sx={{
                        width: 40,
                        height: 40,
                        fontSize: "0.75rem",
                        bgcolor: "#ccc",
                      }}
                    >
                      +{product.images.length - 4}
                    </Avatar>
                  )}
                </div>
              </TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>₹{product.mrpPrice}</TableCell>
              <TableCell>₹{product.sellingPrice}</TableCell>
              <TableCell>{product.color}</TableCell>
              <TableCell
                sx={{
                  color:
                    product.quantity !== product.quantity ? "green" : "red",
                }}
              >
                {product.quantity}
              </TableCell>
              <TableCell>
                <IconButton color="primary">
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
