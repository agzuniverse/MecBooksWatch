import React, { Component } from 'react';
import '../App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class ProductsPage extends Component{
    render(){
        return(
            <div className="mainBackground Sellwrapper">
                <div className="appbar">
                <a href="" className="logo">Books<span id="watchPart">Watch</span></a>
                </div>

                <div className="centerTotal">
                </div>

            </div>
        )
    }
}

export default ProductDisplay;