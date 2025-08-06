import React from "react";
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
import shirt1 from "../../../images/shirt.png";
import shirt2 from "../../../images/formal-shirt.png";
import saree1 from "../../../images/saree.png";
import saree2 from "../../../images/saree.png";
import formal1 from "../../../images/formal-shirt.png";
import skirt1 from "../../../images/skirt.png";

type Product = {
  id: string;
  title: string;
  images: string[];
  mrp: number;
  sellingPrice: number;
  color: string;
  stock: string;
};

const dummyProducts: Product[] = [
  {
    id: "1",
    title: "Nike Air Max",
    images: [shirt1, shirt2, formal1],
    mrp: 2000,
    sellingPrice: 1800,
    color: "Red",
    stock: "IN_STOCK",
  },
  {
    id: "2",
    title: "Adidas Ultraboost",
    images: [saree1, saree2, skirt1],
    mrp: 2500,
    sellingPrice: 2100,
    color: "Blue",
    stock: "OUT_OF_STOCK",
  },
];

export default function ProductTable() {
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
          {dummyProducts.map((product) => (
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
              <TableCell>₹{product.mrp}</TableCell>
              <TableCell>₹{product.sellingPrice}</TableCell>
              <TableCell>{product.color}</TableCell>
              <TableCell
                sx={{ color: product.stock === "IN_STOCK" ? "green" : "red" }}
              >
                {product.stock}
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
