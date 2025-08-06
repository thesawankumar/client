import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const sampleData = [
  {
    id: "001",
    image: "https://via.placeholder.com/40",
    category: "Topwear",
    name: "T-shirt",
  },
  {
    id: "002",
    image: "https://via.placeholder.com/40",
    category: "Footwear",
    name: "Sneakers",
  },
];

export default function HomePageTable() {
  const handleUpdate = (itemId: string) => {
    console.log(`Update item with ID: ${itemId}`);
    // Here you can open a dialog or navigate to update page
  };

  return (
    <div className="p-6">
      <TableContainer component={Paper} className="shadow-md">
        <Table>
          <TableHead>
            <TableRow className="bg-gray-100">
              <TableCell>S.No</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleData.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>
                  <Avatar alt={item.name} src={item.image} />
                </TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    onClick={() => handleUpdate(item.id)}
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
