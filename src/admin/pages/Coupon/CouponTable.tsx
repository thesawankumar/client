import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { useEffect } from "react";
import {
  deleteCoupon,
  fetchAllCoupons,
} from "../../../redux/admin/actions/couponAction";
import { toast } from "react-toastify";

export default function CouponTable() {
  const { coupon } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllCoupons());
  }, []);
  const jwt = localStorage.getItem("admin-jwt") || "";
  const handleDelete = (id: number) => {
    dispatch(deleteCoupon({ id, jwt }))
      .unwrap()
      .then(() => {
        toast.success("Coupon deleted successfully!", { theme: "colored" });
      })
      .catch((err) => {
        toast.error(err || "Failed to delete coupon", { theme: "colored" });
      });
  };

  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Code</TableCell>
            <TableCell>Start</TableCell>
            <TableCell>End</TableCell>
            <TableCell>Min Order</TableCell>
            <TableCell>Discount %</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coupon.coupons.map((c) => (
            <TableRow key={c.id}>
              <TableCell>{c.code}</TableCell>
              <TableCell>{c.validityStartDate}</TableCell>
              <TableCell>{c.validityEndDate}</TableCell>
              <TableCell>₹{c.minimumOrderValue}</TableCell>
              <TableCell>{c.discountPercentage}%</TableCell>
              <TableCell>{c.active ? "Active" : "Expired"}</TableCell>
              <TableCell>
                <IconButton color="error" onClick={() => handleDelete(c.id)}>
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
