import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrencies, sortBy, clearSearchItem } from '../actions';
import { searchForMatchingCurrency, getSortedCurrencylist } from '../reducers/';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
        direction: null,
        sortKey: null
    }
  }  

  componentDidMount() {
      this.props.getCurrencies();
  }

  handleColumnHeaderClick = (columnKey) => {
    this.props.clearSearchItem();
    const { direction } = this.state;
    const sortDirection = direction === "desc" ? "asc" : "desc";
    this.setState({
        direction: sortDirection,
        sortKey: columnKey
    });
    this.props.sortBy(columnKey, sortDirection);
  }

  render() {
    let tableRows;
    const { 
        searchFilter, 
        currencies, 
        matchingFields 
    } = this.props;

    const { 
        sortKey, 
        direction 
    } = this.state;
 
    if (searchFilter.length > 0 && Object.keys(matchingFields).length > 0) {       
        tableRows = (
            <>
                { matchingFields.match.map( row => <TableRow key={row.code} highlight={true} row={row} />) }
                { matchingFields.nomatch.map( row => <TableRow key={row.code} row={row} />) } 
            </>
        )
    } else {
        tableRows = currencies.map( row => <TableRow key={row.code} row={row} />);
    }
    
    const columns = [
        {name: "Name", key:"name"}, 
        {name: "Code", key:"code"},
        {name: "Decimal digits", key:"decimal_digits"}
    ];

    return (
        <table className="table w-50 mx-auto mt-3 border">
            <thead className="thead-light">
                <TableHeader 
                    handleColumnHeaderClick = {this.handleColumnHeaderClick} 
                    sortKey={sortKey} 
                    direction={direction}
                    columns={columns}
                    />
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    )
  }
}

const mapStateToProps = state => {
    const { 
        searchFilter, 
        key: sortKey, 
        direction 
    } = state.currencies;

    return {
        searchFilter,
        currencies: getSortedCurrencylist(state),
        matchingFields: searchForMatchingCurrency(state),
        sortKey,
        direction
    }
}

export default connect(mapStateToProps, { getCurrencies, sortBy, clearSearchItem })(Table);
