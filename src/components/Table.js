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
        sortParams: {
            direction: null,
            sortKey: 'name'
        }
    }
  }  

  componentDidMount() {
      this.props.getCurrencies();
  }

  handleColumnHeaderClick(sortKey) {
    this.props.clearSearchItem();
    const {
      sortParams: { direction }
    } = this.state;

    const sortDirection = direction === "desc" ? "asc" : "desc";
    // const sortedCollection = this.props.currencies.concat().sort(sortBy(col));
    this.setState({
      sortParams: {
        direction: sortDirection,
        key: sortKey
      }
    });
    this.props.sortBy(sortKey,this.state.sortParams.direction);
  }

  render() {
    const { searchFilter, currencies, matchingFields } = this.props;
    const { direction, sortKey } = this.state.sortParams;
    const sortIcon = direction === "desc" ? 
        <i className="fas fa-sort-up float-right"></i> : 
        <i className="fas fa-sort-down float-right"></i>; 

    let tableRows;

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

    return (
        <table className="table w-75 mx-auto mt-3">
            <thead className="thead-light">
                <tr>
                    <th onClick={() => this.handleColumnHeaderClick("name")} scope="col">
                        Name 
                        <i class="fas fa-sort float-right"></i>
                    </th>
                    <th onClick={() => this.handleColumnHeaderClick("code")} scope="col" className="border-left border-right w-25 text-center">
                        Code 
                        <i class="fas fa-sort float-right"></i>
                    </th>
                    <th onClick={() => this.handleColumnHeaderClick("decimal_digits")} scope="col" className="text-center">
                        Decimal digits 
                        <i class="fas fa-sort float-right"></i>
                    </th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    )
  }
}

const mapStateToProps = state => {
    const { searchFilter, key: sortKey, direction } = state.currencies;

    return {
        searchFilter,
        currencies: getSortedCurrencylist(state),
        matchingFields: searchForMatchingCurrency(state),
        sortKey,
        direction
    }
}

export default connect(mapStateToProps, { getCurrencies, sortBy, clearSearchItem })(Table);
