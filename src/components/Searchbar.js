import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

const Searchbar = (props) => {
    return(
      <div className="Searchbar">
        <MuiThemeProvider>
          <IconButton>
            <NavigationMenu />
          </IconButton>
          <form onSubmit={props.search}>
            <input id="input2" type="text" placeholder="Search for Books" />
          </form>
        </MuiThemeProvider>
      </div>
    )
}

export default Searchbar;