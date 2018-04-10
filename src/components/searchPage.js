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
      searchResults:[]
    }
  }

  componentWillMount(){
    if(this.props.query!='' && this.props.query!=null){
      this.performSearch(this.props.query);
    }
  }

  performSearch = async (query) => {
    console.log(query);
    let data = await searchAll(query);
    console.log(data);
    this.setState({
      searchResults:data
    });
  }

  search = (e) => {
    e.preventDefault();
    let query = document.getElementById('input2').value;
    this.performSearch(query);
  }

  render() {
    console.log(this.state.searchResults);
    const books = this.state.searchResults.map(book => {
      if(this.props.semFilter === 'Any semester' && this.props.branchFilter === 'Any branch')
        return (<ProductDiv details={book}/>);
      else if(this.props.semFilter !== 'Any semester' && this.props.branchFilter === 'Any branch'){
        if(book.semester === this.props.semFilter)
          return (<ProductDiv details={book}/>);
      }
      else if(this.props.semFilter === 'Any semester' && this.props.branchFilter !== 'Any branch'){
        if(book.branch === this.props.branchFilter)
          return (<ProductDiv details={book}/>);
      }
      else{
        if(book.branch === this.props.branchFilter && book.semester === this.props.semFilter)
          return (<ProductDiv details={book}/>);
      }
    });
    return (
      <div className="App">
        <GetAuthDetails/>
        <SideMenu isFilter={true}/>
        <div className="mainDiv">
          <div id="searchDiv">
            <form onSubmit={this.search}>
              <input id="input2" type="text" placeholder="Search for Books" />
            </form>
          </div>
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
