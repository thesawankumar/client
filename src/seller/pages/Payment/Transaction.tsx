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

const transactions = [
  {
    id: 1,
    date: "2025-08-05T14:23:00",
    customer: {
      name: "Sawan Kumar",
      email: "sawan@example.com",
      phone: "9876543210",
    },
    orderId: "ORD12345",
    amount: 1499,
  },
  {
    id: 2,
    date: "2025-08-04T11:15:00",
    customer: {
      name: "John Doe",
      email: "john@example.com",
      phone: "9123456789",
    },
    orderId: "ORD12346",
    amount: 799,
  },
];

export default function TransactionTable() {
  return (
    <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
      <Typography variant="h6" sx={{ p: 2 }}>
        Transactions
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Date</strong>
            </TableCell>
            <TableCell>
              <strong>Customer Details</strong>
            </TableCell>
            <TableCell>
              <strong>Order</strong>
            </TableCell>
            <TableCell>
              <strong>Amount</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((tx) => (
            <TableRow key={tx.id}>
              <TableCell>{new Date(tx.date).toLocaleString()}</TableCell>
              <TableCell>
                <div>{tx.customer.name}</div>
                <div style={{ fontSize: "0.85rem", color: "#555" }}>
                  {tx.customer.email}
                </div>
                <div style={{ fontSize: "0.85rem", color: "#555" }}>
                  {tx.customer.phone}
                </div>
              </TableCell>
              <TableCell>{tx.orderId}</TableCell>
              <TableCell>₹{tx.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
