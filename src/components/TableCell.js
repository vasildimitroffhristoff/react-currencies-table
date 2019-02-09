import React from 'react'

export default function TableCell({ children, elementClass }) {
  return (
    <td className={elementClass}>{ children }</td>
  )
}
