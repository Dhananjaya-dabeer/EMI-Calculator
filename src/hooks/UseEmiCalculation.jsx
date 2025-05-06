import { useMemo } from "react";

export const useEMICalculation = (principal, interestRate, loanTenure) => {
  return useMemo(() => {
    const monthlyRate = interestRate / 12 / 100;
    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, loanTenure)) /
      (Math.pow(1 + monthlyRate, loanTenure) - 1);

    const totalPayment = emi * loanTenure;
    const totalInterest = totalPayment - principal;

    return {
      emi: isFinite(emi) ? emi : 0,
      totalPayment: isFinite(totalPayment) ? totalPayment : 0,
      totalInterest: isFinite(totalInterest) ? totalInterest : 0,
    };
  }, [principal, interestRate, loanTenure]);
};
