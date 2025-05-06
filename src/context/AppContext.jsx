import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [principal, setPrincipal] = useState(100000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(12);
  const [currency, setCurrency] = useState("INR");
  const [targetCurrency, setTargetCurrency] = useState("USD");

  return (
    <AppContext.Provider
      value={{
        principal,
        setPrincipal,
        interestRate,
        setInterestRate,
        loanTenure,
        setLoanTenure,
        currency,
        setCurrency,
        targetCurrency,
        setTargetCurrency,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
