import React from 'react';
import TableCell from './TableCell';

export default function TableRow({ row }) {
  return (
    <tr key={row.code}>
        <TableCell elementClass={"text-left"}>{row.name}</TableCell>
        <TableCell elementClass={"text-center"}>{row.code}</TableCell>
        <TableCell elementClass={"text-center"}>{row.decimal_digits}</TableCell>
    </tr>
  )
}
