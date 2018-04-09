import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Store from './components/Store';
import AddProduct from './components/AddProduct';
import Home from './components/Home';
import ProductDisplay from './components/ProductDisplay';
import SearchPage from './components/searchPage';
import Auth from './components/auth';
import Userpage from './components/Userpage';
import Appbar from './components/appBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (  
      <Provider store={Store}>    
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/addproduct" component={AddProduct}/>
            <Route path="/search" component={SearchPage}/>
            <Route path="/productdisplay" component={ProductDisplay}/>
            <Route path="/login" component={Auth}/>
            <Route path="/user" component={Userpage}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
