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

const couponData = [
  {
    code: "SAVE20",
    startDate: "2025-08-01",
    endDate: "2025-08-31",
    minOrderValue: 500,
    discountPercent: 20,
    status: "Active",
  },
  {
    code: "WELCOME50",
    startDate: "2025-07-15",
    endDate: "2025-08-15",
    minOrderValue: 1000,
    discountPercent: 50,
    status: "Expired",
  },
];

export default function CouponTable() {
  return (
    <TableContainer sx={{ mt: 3 }} component={Paper} elevation={2}>
      <Table>
        <TableHead>
          <TableRow className="bg-gray-100">
            <TableCell>Coupon Code</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>Min Order Value</TableCell>
            <TableCell>Discount %</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {couponData.map((coupon) => (
            <TableRow key={coupon.code}>
              <TableCell>{coupon.code}</TableCell>
              <TableCell>{coupon.startDate}</TableCell>
              <TableCell>{coupon.endDate}</TableCell>
              <TableCell>₹{coupon.minOrderValue}</TableCell>
              <TableCell>{coupon.discountPercent}%</TableCell>
              <TableCell>{coupon.status}</TableCell>
              <TableCell align="center">
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
