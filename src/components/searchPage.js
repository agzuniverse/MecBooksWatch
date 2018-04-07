import React, { Component } from 'react';
import '../App.css';
import SideMenu from './SideMenu';
import ProductDiv from './ProductDiv';

class SearchPage extends Component {

  render() {
    const books = Object.keys(this.state.bookData).map(key => {
      return (
        <ProductDiv details={this.state.bookData[key]} />
      );
    });
    return (
      <div className="App">
        <SideMenu isFilter={false}/>
        <div className="mainDiv">
          {books}


        </div>
      </div>
    );
  }
}

export default SearchPage;
