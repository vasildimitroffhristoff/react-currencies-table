import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
// import api from '../src/api/common-currencies';
import Table from './components/Table';
import SearchBar from './components/SearchBar';

class App extends Component { 
  render() {
    return (
      <Provider store={store}>
          <SearchBar />
          <Table />
      </Provider>
    );
  }
}

export default App;
