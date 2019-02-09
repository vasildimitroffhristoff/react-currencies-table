import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencies } from '../actions';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

class Table extends Component {
  componentDidMount() {
      this.props.getCurrencies();
  }

  render() {
    const { currencies } = this.props.api;
    
    const rows = Object.keys(currencies).map(currency => { 
        const { name, code, decimal_digits } = currencies[currency];
        return { name, code, decimal_digits }
    });

    return (
        <table className="table w-75 mx-auto mt-3">
            <TableHeader />
            <tbody>
                {rows.map( row => <TableRow key={row.name} row={row} /> )}
            </tbody>
        </table>
    )
  }
}

const mapStateToProps = state => ({
    api: state.currencies
})

export default connect(mapStateToProps, { getCurrencies })(Table);
