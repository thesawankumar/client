import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Stack,
  Typography,
} from "@mui/material";
import ProductImage from "../../../images/shirt.png";
import ProductImage2 from "../../../images/shirt.png";
const orders = [
  {
    orderId: "ORD001",
    products: "2x iPhone 14, 1x MacBook Air",
    productImage: ProductImage,
    shippingAddress: "123 Main St, New York, NY",
    orderStatus: "Shipped",
    update: "Status",
  },
  {
    orderId: "ORD002",
    products: "1x Samsung Galaxy S22",
    productImage: ProductImage2,
    shippingAddress: "456 Market St, San Francisco, CA",
    orderStatus: "Processing",
    update: "Status",
  },
];

export default function OrderTable() {
  return (
    <TableContainer sx={{ borderRadius: 3 }} component={Paper} elevation={3}>
      <Typography variant="h6" sx={{ p: 2 }}>
        All Orders
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Order ID</strong>
            </TableCell>
            <TableCell>
              <strong>Products</strong>
            </TableCell>
            <TableCell>
              <strong>Shipping Address</strong>
            </TableCell>
            <TableCell>
              <strong>Order Status</strong>
            </TableCell>
            <TableCell>
              <strong>Update</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow key={index}>
              <TableCell>{order.orderId}</TableCell>

              {/* Product image + text */}
              <TableCell>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar
                    variant="rounded"
                    src={order.productImage}
                    alt="Product"
                    sx={{ width: 56, height: 56 }}
                  />
                  <Typography variant="body2">{order.products}</Typography>
                </Stack>
              </TableCell>

              <TableCell>{order.shippingAddress}</TableCell>
              <TableCell>{order.orderStatus}</TableCell>
              <TableCell>{order.update}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
