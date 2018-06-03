import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../App.css";
import "../assets/book1.jpg";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class ProductDiv extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="ProductDiv">
        <MuiThemeProvider>
          <div className="imgDiv">
            <img src={this.props.details.imageURL} id="productImg" alt="" />
          </div>
          <Link
            to={{ pathname: "/productdisplay", state: this.props.details }}
            properties={this.props.details}
            style={{ textDecoration: "none" }}
          >
            <div className="infoDiv">
              <span id="bookName">{this.props.details.title}</span>
              <br />
              <span id="author">{this.props.details.author}</span>
              <br />
              <span id="price">Rs {this.props.details.price}</span>
              <br />
              <br />
            </div>
          </Link>
        </MuiThemeProvider>
      </div>
    );
  }
}

ProductDiv.propTypes = {
  details: PropTypes.object.isRequired
};

export default ProductDiv;
