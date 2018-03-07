import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import SideMenu from './components/Components';
import AddProduct from './components/AddProduct';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <SideMenu/> */}
        <AddProduct/>
      </div>
      
    );
  }
}




export default App;
