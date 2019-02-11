import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchCurrency } from '../actions';

class SearchBar extends Component {
  state = {
    searchField: ""
  }

  static getDerivedStateFromProps(props, state) {
    if (props.searchFilter !== state.searchField) {
        if (props.searchFilter === "") {
            return {
                searchField: props.searchFilter      
            }       
        }
      }
      return null;
  }

  handleOnChange = (e) => {
    const { searchCurrency } = this.props;
    this.setState({ [e.target.name]: e.target.value })
    searchCurrency(e.target.value)
  }

  render() {
    return (
        <div className="w-50 mx-auto mt-5">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text rounded-0" id="inputGroupPrepend">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    </span>
                </div>
                <input 
                    value={this.state.searchField}
                    onChange={(e) => this.handleOnChange(e)}
                    type="text" 
                    name="searchField"
                    className="form-control rounded-0 p-4 d-block" 
                    placeholder="Enter search" />
            </div>
        </div>
    )
  }
}

SearchBar.propTypes = {
    searchCurrency: PropTypes.func,
    searchFilter: PropTypes.string
};

const mapStateToProps = state => ({
    searchFilter: state.currencies.searchFilter
})

export default connect(mapStateToProps, { searchCurrency })(SearchBar);