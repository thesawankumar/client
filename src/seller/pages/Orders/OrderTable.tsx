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
  Chip,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert"; // icon for update
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { useEffect, useState } from "react";
import {
  fetchSellerOrder,
  updateOrderStatus,
} from "../../../redux/seller/actions/orderAction";
import { OrderStatus } from "../../../types/orderTypes";
// import { updateSellerOrderStatus } from "../../../redux/seller/actions/orderAction";

export default function OrderTable() {
  const dispatch = useAppDispatch();
  const { sellerOrder } = useAppSelector((store) => store);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null);

  const open = Boolean(anchorEl);

  useEffect(() => {
    dispatch(fetchSellerOrder(localStorage.getItem("jwt") || ""));
  }, [dispatch]);

  const getStatusColor = (status: string) => {
    switch (status?.toUpperCase()) {
      case "PLACED":
        return "info";
      case "CONFIRMED":
        return "primary";
      case "PENDING":
        return "warning";
      case "SHIPPED":
        return "secondary";
      case "DELIVERED":
        return "success";
      case "CANCELLED":
        return "error";
      default:
        return "default";
    }
  };

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    orderId: number
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedOrderId(orderId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedOrderId(null);
  };
  const handleStatusChange = (status: string) => {
    if (selectedOrderId) {

       // Backend call
      dispatch(
        updateOrderStatus({
          jwt: localStorage.getItem("jwt") || "",
          orderId: selectedOrderId,
          orderStatus: status as OrderStatus,
        })
      ).then(() =>
        dispatch(fetchSellerOrder(localStorage.getItem("jwt") || ""))
      );

      console.log("Updating Order:", selectedOrderId, "to", status);
    }
    handleMenuClose();
  };

  return (
    <TableContainer
      sx={{ borderRadius: 3, overflow: "hidden" }}
      component={Paper}
      elevation={4}
    >
      <Typography variant="h6" sx={{ p: 2, fontWeight: "bold" }}>
        All Orders
      </Typography>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
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
              <strong>Status</strong>
            </TableCell>
            <TableCell>
              <strong>Update</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sellerOrder.orders?.map((order, idx) => (
            <TableRow
              key={order.id}
              sx={{
                backgroundColor: idx % 2 === 0 ? "#ffffff" : "#fafafa",
                "&:hover": { backgroundColor: "#f1f1f1" },
              }}
            >
              {/* Order ID */}
              <TableCell>
                <Typography variant="body2" fontWeight="bold">
                  {order.id}
                </Typography>
              </TableCell>

              {/* Products */}
              <TableCell>
                <Stack spacing={1}>
                  {order.orderItems?.map((item, index) => (
                    <Stack
                      key={index}
                      direction="row"
                      spacing={2}
                      alignItems="center"
                    >
                      {item.product?.images?.[0] && (
                        <Avatar
                          variant="rounded"
                          src={item.product.images[0]}
                          alt={item.product.title}
                          sx={{ width: 56, height: 56 }}
                        />
                      )}
                      <Stack spacing={0}>
                        <Typography variant="body2" fontWeight="bold">
                          {item.quantity}x {item.product?.title || ""}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          ₹{item.sellingPrice} • Color:{" "}
                          {item.product?.color || "N/A"}
                        </Typography>
                      </Stack>
                    </Stack>
                  ))}
                </Stack>
              </TableCell>

              {/* Shipping Address */}
              <TableCell>
                <Typography variant="body2">
                  {order.shippingAddress?.address}
                  <br />
                  {order.shippingAddress?.city},{" "}
                  {order.shippingAddress?.locality} -{" "}
                  {order.shippingAddress?.pinCode}
                </Typography>
              </TableCell>

              {/* Order Status */}
              <TableCell>
                <Chip
                  label={order.orderStatus}
                  color={getStatusColor(order.orderStatus)}
                  variant="filled"
                  size="small"
                  sx={{ fontWeight: "bold" }}
                />
              </TableCell>

              {/* Update icon button */}
              <TableCell>
                <IconButton
                  size="small"
                  onClick={(e) => handleMenuOpen(e, order.id)}
                >
                  <MoreVertIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* Menu for status update */}

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            borderRadius: 5,
            minWidth: 140,
            boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
            mt: 1,
            "& .MuiMenuItem-root": {
              fontSize: "0.85rem",
              py: 1,
              borderRadius: 5,
              transition: "background-color 0.2s",
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.04)",
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "left", vertical: "top" }}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      >
        {Object.values(OrderStatus).map((status) => (
          <MenuItem key={status} onClick={() => handleStatusChange(status)}>
            {status}
          </MenuItem>
        ))}
      </Menu>
    </TableContainer>
  );
}
