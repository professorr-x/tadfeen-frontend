import Paper from '@mui/material/Paper';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(date, amount) {
  return { date, amount};
}

const rows = [
  createData('05-01-2021', '85'),
  createData('05-01-2020', '85'),
  createData('05-01-2019', '85'),
  createData('05-01-2018', '85'),
];

export default function PaymentTable() {
  return (
    <div class="payment-table">
    <Paper elevation={3}>
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell size="small">Date</TableCell>
            <TableCell size="small" align="right">Amount (EUR)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.date}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
    </div>
  );
}