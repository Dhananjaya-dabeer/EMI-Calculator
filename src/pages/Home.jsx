import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Box sx={{ p: 3, textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        EMI Calculator
      </Typography>
      <Typography variant="body1" paragraph>
        Calculate your Equated Monthly Installment (EMI) for loans with our
        easy-to-use calculator.
      </Typography>
      <Button
        component={Link}
        to="/calculator"
        variant="contained"
        size="large"
        sx={{ mt: 2 }}
      >
        Get Started
      </Button>
    </Box>
  );
};
