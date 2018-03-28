import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import SideMenu from './components/SideMenu';
import ProductDiv from './components/ProductDiv';



class App extends Component {
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




export default App;
