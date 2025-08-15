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
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { useEffect } from "react";
import { getAllDeal } from "../../../../redux/admin/actions/dealAction";



export default function DealTable() {
  const dispatch = useAppDispatch();
  const { deal } = useAppSelector((store) => store);
  useEffect(() => {
    dispatch(getAllDeal());
  }, []);
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
          {deal.deals.map((deal, index) => (
            <TableRow key={deal.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <Avatar src={deal.category.image} alt="deal" variant="rounded" />
              </TableCell>
              <TableCell>{deal.category.id}</TableCell>
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
