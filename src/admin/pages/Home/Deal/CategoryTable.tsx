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
import { useAppSelector } from "../../../../redux/store";

export default function CategoryTable() {
  const { customer } = useAppSelector((store) => store);
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
          {customer.homePageData?.dealCategories.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.id}</TableCell>
              <TableCell>
                <Avatar src={item.image} alt={item.name} />
              </TableCell>
              <TableCell>{item.categoryId}</TableCell>
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
