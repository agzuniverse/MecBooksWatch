import React, { Component } from 'react';
import '../App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class ProductDisplay extends Component{
    render(){
        return(
            <div className="mainBackground sellWrapper">
                <div className="appbar">
                    <a href="" className="logo">Books<span id="watchPart">Watch</span></a>
                </div>
                <div className="centerTotal">
                    <div className="imageHolder">
                        <img id="textbook" src={require("../img/text1.jpg")} />
                   </div>
                    <div className="detailCard">
                        <div id="textName">Differential Equations</div>
                        <div id="author">BruceWayn (Author Name)</div>
                        <div id="amount"><span id="priceTag">Price</span>: Rs 200/-</div>
                        <div id="productDetails">
                            Cash on Delivery <span id="available">Available<br /></span>.
                        <div className="details">
                            Buyers are required to contact the corresponding
                        </div>
                        <div className="details">
                            Seller and arrange a meeting place for Themselves.
                        </div> 
                        </div>
                        <button type="submit" id="sellerInfo">Seller Info</button>
                   </div>
                </div>
            </div>
        )
    }
}

export default ProductDisplay;