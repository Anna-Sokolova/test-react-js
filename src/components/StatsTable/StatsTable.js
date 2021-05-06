import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import userDb from '../../db/users.json';
import userStattistic from '../../db/userStatestic.json';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(
  id,
  first_name,
  last_name,
  email,
  gender,
  IPaddress,
  ip_address,
  clicks,
  page_views,
) {
  return {
    id,
    first_name,
    last_name,
    email,
    gender,
    IPaddress,
    ip_address,
    clicks,
    page_views,
  };
}

// const rows = userDb.slice(userStattistic);
const rows = [...userDb, ...userStattistic];
console.log(rows);

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">IP adress</TableCell>
            <TableCell align="right">Total Clicks</TableCell>
            <TableCell align="right">Total Page views</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                onClick={() => console.log('Click')}
              >
                {row.first_name}
              </TableCell>
              <TableCell align="right">{row.last_name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.ip_address}</TableCell>
              <TableCell align="right">{row.clicks}</TableCell>
              <TableCell align="right">{row.page_views}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
