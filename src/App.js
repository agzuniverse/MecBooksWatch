import React, { Component } from 'react';
import './App.css';
import AddProduct from './components/AddProduct';
import Home from './components/Home';
import ProductDisplay from './components/ProductDisplay';
import SearchPage from './components/searchPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (      
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/addproduct" component={AddProduct}/>
          <Route path="/search" component={SearchPage}/>
          <Route path="/productdisplay" component={ProductDisplay}/>
        </div>
      </Router>
    );
  }
}

export default App;
