import React from 'react';
import PropTypes from 'prop-types';

export default function TableHeader({ handleColumnHeaderClick, sortKey, direction, columns }) {  
  return (
    <tr>
            {columns.map(({name, key}) => {
                const isActive = sortKey === key;

                const icon = isActive ? (
                    direction === 'asc' ? 
                         <i className="fas fa-sort-up float-right"></i>
                        : <i className="fas fa-sort-down float-right"></i>
                  ) : null;

                return (
                    <th key={key} onClick={() => handleColumnHeaderClick(key)}>
                        {name} 
                        {icon}
                    </th>
                )  
            })}
    </tr>
  )
}

TableHeader.propTypes = {
    handleColumnHeaderClick: PropTypes.func,
    sortKey: PropTypes.string,
    direction: PropTypes.string,
    columns: PropTypes.array
};
