import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Table from './components/Table';
import SearchBar from './components/SearchBar';

class App extends Component { 
  render() {
    const columns = [
      {name: "Name", key:"name"}, 
      {name: "Code", key:"code"},
      {name: "Decimal digits", key:"decimal_digits"}
   ];

    return (
      <Provider store={store}>
          <SearchBar />
          <Table columns={columns} />
      </Provider>
    );
  }
}

export default App;
