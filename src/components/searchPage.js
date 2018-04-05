import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { searchAll } from '../firebase/firebase';
import SideMenu from './SideMenu';
import ProductDiv from './ProductDiv';

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

  componentDidMount(){
    this.props.update('SET_UID',{uid:localStorage.getItem('LOCAL_UID')});
    this.props.update('SET_NAME',{uid:localStorage.getItem('LOCAL_NAME')});
    this.props.update('SET_EMAIL',{uid:localStorage.getItem('LOCAL_EMAIL')});
    this.props.update('SET_PROPIC',{uid:localStorage.getItem('LOCAL_PROPIC')});
  }

  performSearch = async (query) => {
    let data = await searchAll(query);
    console.log(data);
    this.setState = {
      searchResults:data
    }
  }

  render() {
    return (
      <div className="App">
        <SideMenu/>
        <div className="mainDiv">
          <ProductDiv/>
          <ProductDiv/>
          <ProductDiv/>
          <ProductDiv/>


        </div>
      </div>
    );
  }
}

export default connect(
  (store) => {
    return store;
  },
  (dispatch) => {
    return {
        update:(dispatchType, dispatchPayload) => {
            dispatch({type:dispatchType,payload:dispatchPayload});
        }
    }
  }
)(SearchPage);
