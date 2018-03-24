import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
  render() {
    return (
        <div className="Container">
            <div className="topWrapper">
                <h1 id="head">Books<span id="watch">Watch</span></h1>
                <input id="input" type="text" placeholder="Search for Books" />
                <div id="tagLine">An official KTU Book exchange platform For Mecians!</div>
                
                <div id="bottom">@Copyright Original from Model Engineering College.</div>
            </div>
    );
  }
}

export default Home;