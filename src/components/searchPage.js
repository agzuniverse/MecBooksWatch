import React, { Component } from 'react';
import '../App.css';
import SideMenu from './SideMenu';
import ProductDiv from './ProductDiv';

class SearchPage extends Component {

  render() {
    return (
      <div className="App">
        <SideMenu/>
        <div className="mainDiv">
          <ProductDiv/>
          <ProductDiv/>
        </div>
      </div>
    );
  }
}

export default SearchPage;
