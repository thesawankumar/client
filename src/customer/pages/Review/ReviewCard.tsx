import {
  Avatar,
  Box,
  Typography,
  IconButton,
  Rating,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ReviewImage from "../../../images/saree.png";

export default function ReviewCard() {
  return (
    <Box
      sx={{
        border: "1px solid #e0e0e0",
        borderRadius: 2,
        padding: 1.5,
        backgroundColor: "#fff",
        boxShadow: 0,
        maxWidth: 320,
        fontSize: 14,
        position: "relative",
      }}
    >
      {/* Delete Icon */}
      <IconButton size="small" sx={{ position: "absolute", top: 6, right: 6 }}>
        <DeleteIcon fontSize="small" className="text-red-500" />
      </IconButton>

      {/* Header: Avatar + Name + Date */}
      <Stack direction="row" spacing={1.5} alignItems="center">
        <Avatar sx={{ width: 36, height: 36 }} />
        <Box>
          <Typography fontSize={13} fontWeight={600}>
            Sawan Kumar
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Aug 2, 2025
          </Typography>
        </Box>
      </Stack>

      {/* Rating */}
      <Box mt={1}>
        <Rating value={4} readOnly size="small" />
      </Box>

      {/* Review text */}
      <Typography
        variant="body2"
        mt={1}
        color="text.primary"
        fontSize={13}
        lineHeight={1.4}
      >
        Quality is amazing. Fabric feels premium. Delivered on time. Totally
        worth it!
      </Typography>

      {/* Image */}
      <Box mt={1}>
        <img
          src={ReviewImage}
          alt="Review"
          style={{
            width: 50,
            height: 50,
            objectFit: "cover",
            borderRadius: 6,
            marginTop: 4,
            border: "1px solid #ddd",
          }}
        />
      </Box>
    </Box>
  );
}
