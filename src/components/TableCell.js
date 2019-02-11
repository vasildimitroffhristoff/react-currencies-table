import React from 'react';
import PropTypes from 'prop-types';

export default function TableCell({ children, elementClass }) {
  return (
    <td className={elementClass}>{ children }</td>
  )
}

TableCell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  elementClass: PropTypes.string
};
