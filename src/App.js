import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import SideMenu from './components/Components';
import AddProduct from './components/AddProduct';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={AddProduct}/>
          <Route path="/addproduct" component={AddProduct}/>
          <Route path="/search" component={SideMenu}/>
        </div>
      </Router>      
    );
  }
}

export default App;
