import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setYearFilter, setBranchFilter } from "../redux/ActionCreators";
import RaisedButton from "material-ui/RaisedButton";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import Auth from "./auth";

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yearValue: "Any year",
      branchValue: "Any branch"
    };
  }

  yearChange = (event, index, value) => {
    this.setState({
      yearValue: value
    });
    this.props.updateYearFilter(value);
  };

  branchChange = (event, index, value) => {
    this.setState({
      branchValue: value
    });
    this.props.updateBranchFilter(value);
  };

  render() {
    if (this.props.isFilter === true) {
      return (
        <div className="SideMenu mainBackground mainColor">
          <MuiThemeProvider>
            <Link to="/">
              <span className="logo">
                Books
                <span id="watchPart">Watch</span>
              </span>
            </Link>
            <div className="filterDiv">
              <br />
              <br />
              Year
              <br />
              <DropDownMenu
                onChange={this.yearChange}
                value={this.state.yearValue}
                autoWidth={false}
                className="dropDownMenu"
                labelStyle={{ color: "rgba(255,255,255,0.87)" }}
              >
                <MenuItem value="Any year" primaryText="Any year" />
                <MenuItem value="1" primaryText="1" />
                <MenuItem value="2" primaryText="2" />
                <MenuItem value="3" primaryText="3" />
                <MenuItem value="4" primaryText="4" />
              </DropDownMenu>
              <br />
              Branch
              <br />
              <DropDownMenu
                onChange={this.branchChange}
                value={this.state.branchValue}
                autoWidth={false}
                className="dropDownMenu"
                labelStyle={{ color: "rgba(255,255,255,0.87)" }}
              >
                <MenuItem value="Any branch" primaryText="Any branch" />
                <MenuItem
                  value="Computer Science"
                  primaryText="Computer Science"
                />
                <MenuItem value="Electrical" primaryText="Electrical" />
                <MenuItem value="Electronics" primaryText="Electronics" />
                <MenuItem value="Mechanical" primaryText="Mechanical" />
                <MenuItem value="Civil" primaryText="Civil" />
              </DropDownMenu>
            </div>
            <div className="linksDiv">
              {this.props.uid !== "" && this.props.uid !== null ? (
                <Link to="/user">
                  <RaisedButton backgroundColor="lawngreen" fullWidth>
                    Sell Books
                  </RaisedButton>
                </Link>
              ) : (
                <RaisedButton
                  backgroundColor="lawngreen"
                  fullWidth
                  onClick={this.login}
                >
                  Sell Books
                </RaisedButton>
              )}
            </div>
          </MuiThemeProvider>
        </div>
      );
    }
    return (
      <div className="SideMenu mainBackground mainColor">
        <MuiThemeProvider>
          <Link to="/">
            <span className="logo">
              Books
              <span id="watchPart">Watch</span>
            </span>
          </Link>
          <div className="userInfoDiv">
            <br />
            <br />
            <img
              src={this.props.proPic}
              className="profilePic"
              alt="Fetch error"
            />
            <br />
            <br />
            {this.props.userDetails.name}
            <br />
            {this.props.userDetails.email}
            <br />
            <Auth navigateOnAuthChange={this.props.navigateOnAuthChange} />
          </div>
          <div className="linksDiv">
            <Link to="/addproduct">
              <RaisedButton backgroundColor="lawngreen" fullWidth>
                Add Book
              </RaisedButton>
              <br />
              <br />
            </Link>
            <Link to="/search">
              <RaisedButton backgroundColor="lightblue" fullWidth>
                Search for books
              </RaisedButton>
              <br />
              <br />
            </Link>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

SideMenu.propTypes = {
  isFilter: PropTypes.bool.isRequired,
  updateYearFilter: PropTypes.func.isRequired,
  updateBranchFilter: PropTypes.func.isRequired,
  proPic: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  userDetails: PropTypes.object.isRequired,
  navigateOnAuthChange: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  uid: state.auth.uid,
  proPic: state.auth.proPic
});

const mapDispatchToProps = dispatch => ({
  updateYearFilter: year => {
    dispatch(setYearFilter(year));
  },
  updateBranchFilter: branch => {
    dispatch(setBranchFilter(branch));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
