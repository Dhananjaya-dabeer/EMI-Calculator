import { useState, useEffect } from "react";
import axios from "axios";

export const useExchangeRates = (apiKey, baseCurrency) => {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`
        );
        setRates(response.data.conversion_rates);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRates();
  }, [apiKey, baseCurrency]);

  return { rates, loading, error };
};
