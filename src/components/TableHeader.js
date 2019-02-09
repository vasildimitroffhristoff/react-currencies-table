import React, { Component } from 'react'

export default class TableHeader extends Component {
  render() {
    return (
        <thead className="thead-light">
            <tr>
                <th scope="col">
                    Name 
                    <i className="fas fa-sort-down float-right"></i>
                </th>
                <th scope="col" className="border-left border-right w-25 text-center">
                    Code 
                    <i className="fas fa-sort-down float-right"></i>              
                </th>
                <th scope="col" className="text-center">
                    Decimal digits 
                    <i className="fas fa-sort-down float-right"></i>    
                </th>
            </tr>
        </thead>
    )
  }
}
