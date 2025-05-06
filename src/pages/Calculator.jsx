import {
  Box,
  Slider,
  TextField,
  Typography,
  Paper,
  Grid,
  MenuItem,
  Input,
} from "@mui/material";
import { useEMICalculation } from "../hooks/useEMICalculation";
import { useAppContext } from "../context/AppContext";
import { AmortizationTable } from "../components/AmortizationTable";
import { CurrencyConverter } from "../components/currency/CurrencyConverter";

const currencyOptions = [
  { value: "INR", label: "Indian Rupee (INR)" },
  { value: "USD", label: "US Dollar (USD)" },
  { value: "EUR", label: "Euro (EUR)" },
  { value: "GBP", label: "British Pound (GBP)" },
  { value: "JPY", label: "Japanese Yen (JPY)" },
];

export const Calculator = () => {
  const {
    principal,
    setPrincipal,
    interestRate,
    setInterestRate,
    loanTenure,
    setLoanTenure,
    currency,
    setCurrency,
  } = useAppContext();

  const { emi, totalPayment, totalInterest } = useEMICalculation(
    principal,
    interestRate,
    loanTenure
  );

  const handlePrincipalChange = (e) => {
    setPrincipal(Number(e.target.value));
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleInterestChange = (e) => {
    setInterestRate(e.target.value);
  };

  const handleTenureChange = (e) => {
    setLoanTenure(e.target.value);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          EMI Calculator
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Currency"
              value={currency}
              onChange={handleCurrencyChange}
              fullWidth
            >
              {currencyOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Loan Amount"
              type="number"
              value={principal}
              onChange={handlePrincipalChange}
              fullWidth
              InputProps={{
                startAdornment: (
                  <Typography sx={{ mr: 1 }}>{currency}</Typography>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography gutterBottom>Interest Rate: {interestRate}%</Typography>
            <Input
              value={interestRate}
              onChange={handleInterestChange}
              min={1}
              max={30}
              step={0.1}
              valueLabelDisplay="auto"
            />
          </Grid>

          <Grid item xs={12}>
            <Typography gutterBottom>
              Loan Tenure: {loanTenure} months
            </Typography>
            <Input
              value={loanTenure}
              onChange={handleTenureChange}
              min={1}
              max={360}
              valueLabelDisplay="auto"
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h6">
            Monthly EMI: {emi.toFixed(2)} {currency}
          </Typography>
          <Typography>
            Total Payment: {totalPayment.toFixed(2)} {currency}
          </Typography>
          <Typography>
            Total Interest: {totalInterest.toFixed(2)} {currency}
          </Typography>
        </Box>
      </Paper>

      <CurrencyConverter emi={emi} baseCurrency={currency} />

      {emi > 0 && (
        <AmortizationTable
          emi={emi}
          principal={principal}
          interestRate={interestRate}
          loanTenure={loanTenure}
          currency={currency}
        />
      )}
    </Box>
  );
};
