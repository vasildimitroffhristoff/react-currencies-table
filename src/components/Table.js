import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrencies } from '../actions';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import { searchForMatchingCurrency } from '../reducers/';
import TableRow from './TableRow';

class Table extends Component {
  componentDidMount() {
      this.props.getCurrencies();
  }

  render() {
    const { filter, currencies, matchingFields } = this.props;

    let content;
    
    if (filter.length > 0 && Object.keys(matchingFields).length > 0) {       
        content = (
            <>
                { matchingFields.match.map( row => <TableRow highlight={true} key={row.name} row={row} />) }
                { matchingFields.nomatch.map( row => <TableRow key={row.name} row={row} />) } */}
            </>
        )
    } else {
        content = currencies.map( row => <TableRow key={row.name} row={row} />);
    }

    return (
        <table className="table w-75 mx-auto mt-3">
            <TableHeader />
            <tbody>
                {content}
            </tbody>
        </table>
    )
  }
}

const mapStateToProps = state => {
    const { filter, currencies } = state.currencies;

    return {
        filter,
        currencies,
        matchingFields: searchForMatchingCurrency(state)
    }
}

export default connect(mapStateToProps, { getCurrencies })(Table);
