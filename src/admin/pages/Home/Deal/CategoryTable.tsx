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

const categoryData = [
  {
    id: "c1",
    image: "https://via.placeholder.com/40",
    category: "Electronics",
  },
  {
    id: "c2",
    image: "https://via.placeholder.com/40",
    category: "Clothing",
  },
  {
    id: "c3",
    image: "https://via.placeholder.com/40",
    category: "Books",
  },
];

export default function CategoryTable() {
  return (
    <TableContainer component={Paper} className="shadow-lg rounded-xl">
      <Table>
        <TableHead>
          <TableRow className="bg-gray-100">
            <TableCell>SNO</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Category</TableCell>
            <TableCell align="center">Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categoryData.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.id}</TableCell>
              <TableCell>
                <Avatar src={item.image} alt={item.category} />
              </TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell align="center">
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
