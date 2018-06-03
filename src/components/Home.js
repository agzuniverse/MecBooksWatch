import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import GetAuthDetails from "./GetAuthDetails";

class Home extends Component {
  search = () => {
    const query = document.getElementById("input").value;
    this.props.update("SEARCH_STRING", { query });
    this.props.history.push("/search");
  };

  render() {
    return (
      <div>
        <GetAuthDetails />
        <div className="Container">
          <div className="topWrapper">
            {!this.props.uid ? (
              <Link to="/login">
                <button id="button">Login</button>
              </Link>
            ) : (
              <Link to="/user">
                <button id="button">Profile</button>
              </Link>
            )}
            <center>
              <h1 id="head">
                Books<span id="watch">Watch</span>
              </h1>
            </center>
            <form onSubmit={this.search}>
              <input id="input" type="text" placeholder="Search for Books" />
            </form>
            <div id="tagLine">
              An Official KTU book exchange platform For MECians!
            </div>
            <div id="bottom">
              <Link
                to="/credits"
                style={{ textDecoration: "none", color: "white" }}
              >
                Developed by Students of Govt. Model Engineering College
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  uid: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default connect(
  store => store,
  dispatch => ({
    update: (dispatchType, dispatchPayload) => {
      dispatch({ type: dispatchType, payload: dispatchPayload });
    }
  })
)(Home);
