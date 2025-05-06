import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <Box sx={{ p: 3, textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography paragraph>
        The page you're looking for doesn't exist.
      </Typography>
      <Button component={Link} to="/" variant="contained">
        Go to Home
      </Button>
    </Box>
  );
};
