import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import GetAuthDetails from './GetAuthDetails';

class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      placeholder:''
    }
  }

  search = () => {
    let query = document.getElementById('input').value;
    this.props.update('SEARCH_STRING',{query:query});
    this.props.history.push('/search');
  }

  render() {
    return (
            <div>
              <GetAuthDetails/>
              <div className="Container">
                  <div className="topWrapper">

                      <button  id="button">Login</button>
                      <center><h1 id="head">Books<span id="watch">Watch</span></h1></center>
                      <form onSubmit={this.search}>
                        <input id="input" type="text" placeholder="Search for Books" />
                      </form>
                      <div id="tagLine">An Official KTU book exchange platform For MECians!</div>
                      <div id="bottom">Developed by Students of Govt. Model Engineering College
                          <a href="/credits" style={{color:"#2ecc71"}}>BooksWatch Crew</a>
                      </div>
                  </div>
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
)(Home);
