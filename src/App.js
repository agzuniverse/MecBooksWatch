import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import SideMenu from './components/Components';
import AddProduct from './components/AddProduct';
import Home from './components/Home';
import ProductDisplay from './components/ProductDisplay';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.setUId = this.setUId.bind(this);

    this.state = {
      uid: '',
      isLoggedIn: false,
    };
  }

  setUId(uid) {
    this.setState({
      uid: uld,
      isLoggedIn: (uid === null) ? true : false,
    })
  }



  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/addproduct" component={AddProduct}/>
          <Route path="/search" component={SideMenu}/>
          <Route path="/productdisplay" component={ProductDisplay}/>
        </div>
      </Router>
    );
  }
}

export default App;
