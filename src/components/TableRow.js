import React from 'react';
import PropTypes from 'prop-types';
import TableCell from './TableCell';

export default function TableRow({ row, highlight }) {
  return (
    <tr className={highlight ? 'highlighted' : null} key={row.code}>
        <TableCell elementClass={"text-left"}>{row.name}</TableCell>
        <TableCell elementClass={"text-center"}>{row.code}</TableCell>
        <TableCell elementClass={"text-center"}>{row.decimal_digits}</TableCell>
    </tr>
  )
}

TableRow.propTypes = {
  row: PropTypes.object,  
  highlight: PropTypes.bool
};

