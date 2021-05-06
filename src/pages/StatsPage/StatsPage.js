import React from 'react';
import Container from '../../components/Container';
import DenseTable from '../../components/StatsTable';
// import BasicPagination from '../../components/TablePagination/TablePagination';
// import TablePagination from '../../components/TablePagination';

export default function StatsPage() {
  return (
    <Container>
      <h2>This is StatsPage</h2>
      <DenseTable />
      {/* <TablePagination /> */}
      {/* <BasicPagination /> */}
    </Container>
  );
}
