"use client";
import { CircularProgress, Box } from "@mui/material";

const Loading = () => (
  <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
    <CircularProgress />
  </Box>
);

export default Loading;
