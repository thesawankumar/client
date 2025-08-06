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
import AccountStatusChange from "../../components/AccountSatus";

// Dummy Data
const sellers = [
  {
    sellerName: "John Doe",
    email: "john@example.com",
    mobile: "+91 9876543210",
    gstin: "22AAAAA0000A1Z5",
    businessName: "John's Electronics",
    accountStatus: "Active",
    changeStatus: "Change",
  },
  {
    sellerName: "Priya Sharma",
    email: "priya@example.com",
    mobile: "+91 9123456780",
    gstin: "29BBBBB1111B2Z6",
    businessName: "Priya's Fashion",
    accountStatus: "Suspended",
    changeStatus: "Change",
  },
];

export default function SellerTable() {
  return (
    <div>
      <AccountStatusChange />
      <TableContainer
        sx={{ borderRadius: 3, mt: 3 }}
        component={Paper}
        elevation={3}
      >
        <Table>
          <TableHead>
            <TableRow className="bg-gray-100">
              <TableCell>
                <strong>Seller Name</strong>
              </TableCell>
              <TableCell>
                <strong>Email</strong>
              </TableCell>
              <TableCell>
                <strong>Mobile</strong>
              </TableCell>
              <TableCell>
                <strong>GSTIN</strong>
              </TableCell>
              <TableCell>
                <strong>Business Name</strong>
              </TableCell>
              <TableCell>
                <strong>Account Status</strong>
              </TableCell>
              <TableCell>
                <strong>Change Status</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sellers.map((seller, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography variant="body2">{seller.sellerName}</Typography>
                </TableCell>
                <TableCell>{seller.email}</TableCell>
                <TableCell>{seller.mobile}</TableCell>
                <TableCell>{seller.gstin}</TableCell>
                <TableCell>{seller.businessName}</TableCell>
                <TableCell>{seller.accountStatus}</TableCell>
                <TableCell>{seller.changeStatus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
