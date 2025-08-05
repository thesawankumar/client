import { Card, CardContent, Typography, Box} from "@mui/material";
import TransactionTable from "./Transaction";

export default function Payment() {
  return (
    <Box className="p-6">
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Payment Overview
      </Typography>

      <Box className="grid grid-cols-1 sm:grid-cols-2 mb-6 gap-6">
        <Card className="rounded-2xl shadow-md">
          <CardContent>
            <Typography variant="subtitle1" color="textSecondary">
              Total Earnings
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              ₹1,25,000
            </Typography>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md ">
          <CardContent>
            <Typography variant="subtitle1" color="textSecondary">
              Last Payment
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              ₹20,000
            </Typography>
          </CardContent>
        </Card>
      </Box>
     
      <TransactionTable />
    </Box>
  );
}
