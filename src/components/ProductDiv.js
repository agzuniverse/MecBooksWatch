import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const ProductDiv = ({ details }) => {
  const { imageURL, title, author, price } = details;

  return (
    <div className="ProductDiv">
      <MuiThemeProvider>
        <div className="imgDiv">
          <img src={imageURL} id="productImg" alt="Book" />
        </div>
        <Link
          to={{ pathname: "/productdisplay", state: details }}
          properties={details}
          style={{ textDecoration: "none" }}
        >
          <div className="infoDiv">
            <span id="bookName">{title}</span>
            <br />
            <span id="author">{author}</span>
            <br />
            <span id="price">Rs {price}</span>
            <br />
            <br />
          </div>
        </Link>
      </MuiThemeProvider>
    </div>
  );
};

ProductDiv.propTypes = {
  details: PropTypes.object.isRequired
};

export default ProductDiv;
