import React from "react";
import PropTypes from "prop-types";
import "../App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

const Searchbar = (props) => {
    return(
      <div className="Searchbar">
        <MuiThemeProvider>
          <div id="iconDiv">
            <IconButton>
              <NavigationMenu />
            </IconButton>
          </div>
          <div id="inputDiv">
            <form onSubmit={props.search} id="searchForm">
              <input id="input2" type="text" placeholder="Search for Books" />
            </form>
          </div>
        </MuiThemeProvider>
      </div>
    )
}

Searchbar.propTypes = {
  search: PropTypes.func.isRequired
};

export default Searchbar;