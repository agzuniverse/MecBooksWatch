import React, { Component } from 'react';
import '../App.css';
import '../assets/book1.jpg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class ProductDiv extends Component {
    constructor(props) {
      super(props);
      this.state = {semesterValue: "Semester 1",authorValue: "Indian"};
    }
    render() {
      return (
        <div className="ProductDiv">
          <MuiThemeProvider>
            <div className="imgDiv">
              <img src="../assets/book1.jpg"/>
            </div>
            <div className="infoDiv">
              <span id="bookName">Design and Engineering</span><br/>
              <span id="author">Aswin G</span><br/>
              <span id="price">Rs 120</span><br/><br/>
  
            </div>
          </MuiThemeProvider>
        </div>
        
      );
    }
  }
  
  export default ProductDiv;
