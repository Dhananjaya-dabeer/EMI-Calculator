import { Box, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const ErrorPage = ({ error }) => {
  const handleGoHome = () => {
    window.location.href = "/";
  };
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        p: 3,
      }}
    >
      <Typography variant="h4" color="error" gutterBottom>
        Something went wrong
      </Typography>
      <Typography paragraph>
        {error?.message || "An unexpected error occurred"}
      </Typography>
      <Button onClick={handleGoHome}>Go to Home</Button>
    </Box>
  );
};
