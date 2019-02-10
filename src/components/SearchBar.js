import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchItem } from '../actions';

class SearchBar extends Component {
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
                    onChange={(evt) => this.props.searchItem(evt.target.value)}
                    type="text" 
                    className="form-control rounded-0 p-4 d-block" 
                    placeholder="Enter search" />
            </div>
        </div>
    )
  }
}

export default connect(null, { searchItem })(SearchBar);