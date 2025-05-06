import { Box, Typography, Link } from "@mui/material";

export const About = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        About EMI Calculator
      </Typography>
      <Typography paragraph>
        This EMI Calculator helps you determine your monthly loan payments based
        on the principal amount, interest rate, and loan tenure.
      </Typography>
      <Typography paragraph>
        The app uses the standard EMI formula to calculate your monthly
        installments and provides a detailed amortization schedule showing the
        breakdown of principal and interest for each payment.
      </Typography>
      <Typography paragraph>
        For currency conversion, we use the Exchange Rate API to fetch live
        exchange rates.
      </Typography>
      <Typography>
        Git Repo:{" "}
        <Link
          href="https://github.com/Dhananjaya-dabeer/EMI-Calculator.git"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
        >
          here
        </Link>
      </Typography>
    </Box>
  );
};
