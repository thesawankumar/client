import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
  IconButton,
  Menu,
  MenuItem,
  Chip,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import {
  getSellerByAdmin,
  updateSellerStatus,
} from "../../../redux/seller/actions/sellerAction";
import { AccountStatus, type Seller } from "../../../types/SellerTypes";
import AccountStatusChange from "../../components/AccountSatus";

export default function SellerTable() {
  const dispatch = useAppDispatch();
  const { seller, loading, error } = useAppSelector((state) => state.seller);

  const [statusUpdate, setStatusUpdate] = useState<
    Record<number, AccountStatus>
  >({});
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeSellerId, setActiveSellerId] = useState<number | null>(null);
  const [filterStatus, setFilterStatus] = useState<AccountStatus | "ALL">(
    "ALL"
  );

  const open = Boolean(anchorEl);

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    sellerId: number
  ) => {
    setAnchorEl(event.currentTarget);
    setActiveSellerId(sellerId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActiveSellerId(null);
  };

  const handleStatusChange = (sellerId: number, newStatus: AccountStatus) => {
    setStatusUpdate((prev) => ({ ...prev, [sellerId]: newStatus }));
    dispatch(updateSellerStatus({ id: sellerId, status: newStatus }));
    handleClose();
  };

  const parseAccountStatus = (status: string | undefined): AccountStatus => {
    if (!status) return AccountStatus.PENDING_VERIFICATION;
    const key = status
      .toUpperCase()
      .replaceAll(" ", "_") as keyof typeof AccountStatus;
    return AccountStatus[key] ?? AccountStatus.PENDING_VERIFICATION;
  };

  const getStatusColor = (status: AccountStatus) => {
    switch (status) {
      case AccountStatus.ACTIVE:
        return "success";
      case AccountStatus.SUSPENDED:
        return "warning";
      case AccountStatus.PENDING_VERIFICATION:
        return "info";
      default:
        return "error";
    }
  };

  useEffect(() => {
    dispatch(getSellerByAdmin());
  }, [dispatch]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  // Filtered sellers based on selected status
  const filteredSellers =
    filterStatus === "ALL"
      ? seller
      : seller.filter(
          (s) => parseAccountStatus(s.accountStatus) === filterStatus
        );

  return (
    <>
      {/* Pass filter state to AccountStatusChange */}
      <AccountStatusChange
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />

      <TableContainer
        component={Paper}
        sx={{ borderRadius: 3, mt: 3, boxShadow: 4 }}
      >
        <Table>
          <TableHead>
            <TableRow className="bg-gray-100">
              <TableCell>Seller Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Mobile</TableCell>
              <TableCell>GSTIN</TableCell>
              <TableCell>Business Name</TableCell>
              <TableCell>Account Staus</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredSellers.map((s: Seller) => {
              const status = parseAccountStatus(s.accountStatus);
              return (
                <TableRow key={s.id ?? s.email} hover>
                  <TableCell>{s.sellerName}</TableCell>
                  <TableCell>{s.email}</TableCell>
                  <TableCell>{s.mobile}</TableCell>
                  <TableCell>{s.GSTIN}</TableCell>
                  <TableCell>
                    {s.businessDetails?.businessName || "-"}
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={status.replaceAll("_", " ")}
                      color={getStatusColor(status)}
                      size="small"
                      sx={{ fontWeight: 400, fontSize: 10 }}
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton
                      onClick={(e) => handleClick(e, s.id!)}
                      size="small"
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      anchorEl={anchorEl}
                      open={open && activeSellerId === s.id}
                      onClose={handleClose}
                      PaperProps={{
                        sx: { minWidth: 160, borderRadius: 2, boxShadow: 3 },
                      }}
                    >
                      {Object.values(AccountStatus).map((st) => {
                        const parsed = parseAccountStatus(st);
                        return (
                          <MenuItem
                            key={parsed}
                            onClick={() => handleStatusChange(s.id!, parsed)}
                          >
                            <Chip
                              label={parsed.replaceAll("_", " ")}
                              color={getStatusColor(parsed)}
                              size="small"
                              sx={{ fontWeight: 300, fontSize: 10 }}
                            />
                          </MenuItem>
                        );
                      })}
                    </Menu>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
