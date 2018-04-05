import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';


class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      placeholder:''
    }
  }

  componentDidMount(){
    this.props.update('SET_UID',{uid:localStorage.getItem('LOCAL_UID')});
    this.props.update('SET_NAME',{uid:localStorage.getItem('LOCAL_NAME')});
    this.props.update('SET_EMAIL',{uid:localStorage.getItem('LOCAL_EMAIL')});
    this.props.update('SET_PROPIC',{uid:localStorage.getItem('LOCAL_PROPIC')});
  }

  search = () => {
    let query = document.getElementById('input').value;
    this.props.update('SEARCH_STRING',{query:query});
    this.props.history.push('/search');
  }

  render() {
    return (
            <div className="Container">
                <div className="topWrapper">
                    <h1 id="head">Books<span id="watch">Watch</span></h1>
                    <form onSubmit={this.search}>
                      <input id="input" type="text" placeholder="Search for Books" />
                    </form>
                    <div id="tagLine">An official KTU Book exchange platform For Mecians!</div>

                    <div id="bottom">@Copyright Original from Model Engineering College.</div>
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