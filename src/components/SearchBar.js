import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchItem } from '../actions';

class SearchBar extends Component {
  constructor(props) {
      super(props);
      this.state = {
          searchField: ''
      }
  }  

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    this.props.searchItem(e.target.value)
  }

  render() {
    return (
        <div className="w-25 mx-auto mt-5">
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

const mapStateToProps = state => ({
    searchFilter: state.currencies.searchFilter
})

export default connect(mapStateToProps, { searchItem })(SearchBar);