import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export const AmortizationTable = ({
  emi,
  principal,
  interestRate,
  loanTenure,
  currency,
}) => {
  const monthlyRate = interestRate / 12 / 100;
  let balance = principal;
  const schedule = [];

  for (let month = 1; month <= loanTenure; month++) {
    const interest = balance * monthlyRate;
    const principalPaid = emi - interest;
    balance -= principalPaid;

    schedule.push({
      month,
      payment: emi,
      principal: principalPaid,
      interest,
      balance: balance > 0 ? balance : 0,
    });
  }

  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Month</TableCell>
            <TableCell align="right">Payment ({currency})</TableCell>
            <TableCell align="right">Principal ({currency})</TableCell>
            <TableCell align="right">Interest ({currency})</TableCell>
            <TableCell align="right">Balance ({currency})</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schedule.map((row) => (
            <TableRow key={row.month}>
              <TableCell>{row.month}</TableCell>
              <TableCell align="right">{row.payment.toFixed(2)}</TableCell>
              <TableCell align="right">{row.principal.toFixed(2)}</TableCell>
              <TableCell align="right">{row.interest.toFixed(2)}</TableCell>
              <TableCell align="right">{row.balance.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
