import {
  Grid,
  Typography,
  TextField,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import { useExchangeRates } from "../../hooks/useExchangeRates";
import { useAppContext } from "../../context/AppContext";

export const CurrencyConverter = ({ emi, baseCurrency }) => {
  const { targetCurrency, setTargetCurrency } = useAppContext();
  const apiKey = import.meta.env.VITE_API_KEY;
  const { rates, loading, error } = useExchangeRates(apiKey, baseCurrency);

  const convertedAmount =
    rates && rates[targetCurrency] ? emi * rates[targetCurrency] : 0;

  if (loading) return <CircularProgress color="info" />;
  if (error) return <Typography color="error">Error: {error}</Typography>;

  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <Grid item xs={12} md={6}>
        <TextField
          label="Base Currency"
          value={baseCurrency}
          fullWidth
          disabled
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          select
          label="Target Currency"
          value={targetCurrency}
          onChange={(e) => setTargetCurrency(e.target.value)}
          fullWidth
        >
          {rates &&
            Object.keys(rates).map((currency) => (
              <MenuItem key={currency} value={currency}>
                {currency}
              </MenuItem>
            ))}
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Typography variant="h6" align="center">
            {emi.toFixed(2)} {baseCurrency} = {convertedAmount.toFixed(2)}{" "}
            {targetCurrency}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
