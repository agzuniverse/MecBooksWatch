import React, { Component } from 'react';
import '../App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import SideMenu from '../components/SideMenu';

class ProductDisplay extends Component{
    constructor(props){
        super(props);
        this.state = {
            hidden:true
        }
    }
    toggleSellerInfoHidden = () =>{
        this.setState({hidden:!this.state.hidden});
    }
    
    render(){
        
        return(
            <div className="mainBackground sellWrapper">
                <div className="appbar">
                    <a href="" className="logo">Books<span id="watchPart">Watch</span></a>
                </div>
               
                <div id="centerTotal">
                    <div className="imageHolder">
                        <img id="textbook" src={require("../img/text1.jpg")} />
                   </div>
               
                    <div className="detailCard">
                        <div id="textName">Introduction to Computer and Problem Solving</div>
                        <div id="author">Elon Musk blah blah (Author Name)</div>
                        <div id="amount"><span id="priceTag">Price</span>: Rs 200 </div>
                        <div id="productDetails">
                            Cash on Exchange <span id="available">Available<br /></span>.
                        </div>
                        <div id="details">
                            Buyers are required to contact the sellers 
                            and set up a meeting place for themselves
                        </div>
                        <button type="submit" id="sellerInfo" onClick={() => this.toggleSellerInfoHidden()}>Seller Info</button>
                    </div>
                    
                    {!this.state.hidden ? <div id="sellerInfoCard">
                        <h2>Seller Info</h2>
                        <ul>
                            <li>Name: <span>Captain America</span></li>
                            <li>Semester: <span>4</span></li>
                            <li>Branch: <span>Computer Science</span></li>
                            <li>Mobile No: <span>9876543210</span></li>
                            <li>Is on Whatsapp: <span>Yes</span></li>
                            <li>Email: <span>avengers@gmail.com</span></li>
                            <button type="submit" onClick={() => this.toggleSellerInfoHidden()}>Done</button>
                        </ul>
                    </div>:null}
                    
                </div>
               <footer>
                    @Copyright Original From Model Engineering College
                </footer>
            </div>
        )
    }


    
}

export default ProductDisplay;