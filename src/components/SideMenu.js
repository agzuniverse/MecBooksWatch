import React, { Component } from 'react';
import '../App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';



class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      semesterValue: "Semester 1",
      branchValue:'Computer Science'
    };
  }
  componentWillMount() {
    if (this.props.isFilter == false) {
      this.setState({ imgURL: this.props.userDetails.imgURL });
    }
  }

  semChange = (event, index, value) => {
    this.setState({
        semesterValue:value
    });
  }

  branchChange = (event, index, value) => {
      this.setState({
          branchValue:value
      });
  }

  render() {
    if (this.props.isFilter == true) {
      return (
        <div className="SideMenu mainBackground mainColor">
          <MuiThemeProvider>
            <a href="#" className="logo">Books<span id="watchPart">Watch</span></a>
            <div className="filterDiv">
              <br /><br />
              Semester<br />
              <DropDownMenu onChange={this.semChange} value={this.state.semesterValue} autoWidth={false} className="dropDownMenu" labelStyle={{ "color": "rgba(255,255,255,0.87)" }}>
                <MenuItem value="Semester 1" primaryText="Semester 1" />
                <MenuItem value="Semester 2" primaryText="Semester 2" />
                <MenuItem value="Semester 3" primaryText="Semester 3" />
                <MenuItem value="Semester 4" primaryText="Semester 4" />
                <MenuItem value="Semester 5" primaryText="Semester 5" />
                <MenuItem value="Semester 6" primaryText="Semester 6" />
                <MenuItem value="Semester 7" primaryText="Semester 7" />
                <MenuItem value="Semester 8" primaryText="Semester 8" />
              </DropDownMenu>
              <br/>
              Branch<br />
              <DropDownMenu onChange={this.branchChange} value={this.state.branchValue} autoWidth={false} className="dropDownMenu" labelStyle={{ "color": "rgba(255,255,255,0.87)" }}>
                <MenuItem value="Computer Science" primaryText="Computer Science" />
                <MenuItem value="Electrical" primaryText="Electrical" />
                <MenuItem value="Electronics" primaryText="Electronics" />
                <MenuItem value="Mechanical" primaryText="Mechanical" />
                <MenuItem value="Civil" primaryText="Civil" />
              </DropDownMenu>
            </div>
            <div className="linksDiv">
              <Link to='/user'>
                <RaisedButton backgroundColor="lawngreen" fullWidth={true}>Sell Books</RaisedButton>
              </Link>
            </div>
          </MuiThemeProvider>
        </div>

      );
    } else {
      return (
        <div className="SideMenu mainBackground mainColor">
          <MuiThemeProvider>
            <a href="#" className="logo">Books<span id="watchPart">Watch</span></a>
            <div className="userInfoDiv">
              <br /><br />
              <img src={this.props.proPic} className="profilePic" /><br /><br />
              {this.props.userDetails.name}<br />
              {this.props.userDetails.email}<br />
            </div>
            <div className="linksDiv">
              <Link to='/addproduct'>
                <RaisedButton backgroundColor="lawngreen" fullWidth={true}>Add Book</RaisedButton><br /><br/>
              </Link>
              <Link to='/search'>
                <RaisedButton backgroundColor="lightblue" fullWidth={true}>Search for books</RaisedButton><br /><br/>
              </Link>
              <Link to='/login'>
                <RaisedButton backgroundColor="red" fullWidth={true}>Logout</RaisedButton>
              </Link>
            </div>
          </MuiThemeProvider>
        </div>
      );
    }
  }
}

export default connect(
  (store) => {
    return store;
  },
  (dispatch) => {
    return {
      update: (dispatchType, dispatchPayload) => {
        dispatch({ type: dispatchType, payload: dispatchPayload });
      }
    }
  }
)(SideMenu);