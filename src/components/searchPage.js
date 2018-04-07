import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { searchAll } from '../firebase/firebase';
import SideMenu from './SideMenu';
import ProductDiv from './ProductDiv';
import GetAuthDetails from './GetAuthDetails';

class SearchPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchResults:{}
    }
  }

  componentWillMount(){
    if(this.props.query!='' && this.props.query!=null){
      this.performSearch(this.props.query);
    }
  }

  performSearch = async (query) => {
    let data = await searchAll(query);
    console.log(data);
    this.setState = {
      searchResults:data
    }
  }

  render() {
    const books = Object.keys(this.state.bookData).map(key => {
      return (
        <ProductDiv details={this.state.bookData[key]} />
      );
    });
    return (
      <div className="App">
        <GetAuthDetails/>
        <SideMenu isFilter={false}/>
        <div className="mainDiv">
          {books}


        </div>
      </div>
    );
  }
}

export default connect(
  (store) => {
    return store;
  }
)(SearchPage);
