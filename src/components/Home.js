import React, { Component } from 'react';
import '../App.css';
import Auth from './auth';


class Home extends Component {
  render() {
    return (
        <div className="App">
            <div id="top">
            <Auth />
            <div id="search">
                <input id="input" type="text" placeholder="Search for Books" />
                <button type="submit" id="searchbutton">Begin Watch</button>
            </div>
            <h1 id="head">Books<span id="watch">Watch</span></h1>
            </div>
            <footer>
                @Copyright Original From Model Engineering College
            </footer>
        </div>
    );
  }
}

export default Home;