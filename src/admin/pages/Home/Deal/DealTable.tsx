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
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const dummyDeals = [
  {
    id: 1,
    image: "https://via.placeholder.com/50",
    category: "Electronics",
    discount: "20%",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/50",
    category: "Clothing",
    discount: "40%",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/50",
    category: "Books",
    discount: "15%",
  },
];

export default function DealTable() {
  return (
    <TableContainer component={Paper} className="shadow-md">
      <Table>
        <TableHead>
          <TableRow className="bg-gray-100">
            <TableCell>S.No</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Discount</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dummyDeals.map((deal, index) => (
            <TableRow key={deal.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <Avatar src={deal.image} alt="deal" variant="rounded" />
              </TableCell>
              <TableCell>{deal.category}</TableCell>
              <TableCell>{deal.discount}</TableCell>
              <TableCell align="center">
                <IconButton color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton color="error">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
