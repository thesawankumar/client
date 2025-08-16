import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import type { HomeCategory } from "../../../types/homeCategoryTypes";

export default function HomePageTable({ data }: { data: HomeCategory[] }) {
  const handleUpdate = (itemId: string) => {
    console.log(`Update item with ID: ${itemId}`);
    // Here you can open a dialog or navigate to update page
  };


  return (
    <div className="p-6">
      <TableContainer component={Paper} className="shadow-md">
        <Table>
          <TableHead>
            <TableRow className="bg-gray-100">
              <TableCell>S.No</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>
                  <Avatar alt={item.name} src={item.image} />
                </TableCell>
                <TableCell>{item.categoryId}</TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    // onClick={() => handleUpdate(item.id||)}
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
