import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { useEffect } from "react";
import { fetchTransactionBySeller } from "../../../redux/seller/actions/transactionAction";

export default function TransactionTable() {
  const dispatch = useAppDispatch();
  const { transactions } = useAppSelector((store) => store.transactions); // ✅ Ensure correct slice

  useEffect(() => {
    dispatch(fetchTransactionBySeller(localStorage.getItem("jwt") || ""));
  }, [dispatch]);

  return (
    <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
      <Typography variant="h6" sx={{ p: 2 }}>
        Transactions
      </Typography>
      <Table>
        <TableHead>
          <TableRow className="bg-gray-100">
            <TableCell>
              <strong>Date</strong>
            </TableCell>
            <TableCell>
              <strong>Customer Details</strong>
            </TableCell>
            <TableCell>
              <strong>Order ID</strong>
            </TableCell>
            <TableCell>
              <strong>Amount</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions?.map((tx) => (
            <TableRow key={tx.id}>
              {/* ✅ Date */}
              <TableCell>
                {new Date(tx.order.orderDate).toLocaleString()}
              </TableCell>

              {/* ✅ Customer details */}
              <TableCell>
                <div>{tx.customer.fullName}</div>
                <div style={{ fontSize: "0.85rem", color: "#555" }}>
                  {tx.customer.email}
                </div>
                <div style={{ fontSize: "0.85rem", color: "#555" }}>
                  {tx.customer.mobile}
                </div>
              </TableCell>

              {/* ✅ Order info */}
              <TableCell>{tx.order.id}</TableCell>

              {/* ✅ Amount */}
              <TableCell>
                {" "}
                <Typography
                  variant="body1"
                  fontWeight="600"
                  color="success.main"
                >
                  ₹{tx.order.totalSellingPrice}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
