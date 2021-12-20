import Paper from '@mui/material/Paper';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(name, relationship, age) {
  return { name, relationship, age};
}

const rows = [
  createData('John Smith', 'Husband', 45),
  createData('Jane Smith', 'Wife', 43),
];

export default function SimpleTable() {
  return (
    <div class="simple-table">
    <Paper elevation={3}>
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Relationship</TableCell>
            <TableCell>Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.relationship}</TableCell>
              <TableCell>{row.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
    </div>
  );
}