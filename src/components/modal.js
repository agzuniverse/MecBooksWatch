import React from "react";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <MuiThemeProvider>
        <div className="modal-main">
          <div className="chatBox">You recieved one message from Vivek.R</div>
          <div className="chatBox" />
          <div className="chatBox" />
          <div className="chatBox" />
          <RaisedButton
            secondary
            onClick={handleClose}
            style={{ width: "20", margin: "auto" }}
          >
            close
          </RaisedButton>
        </div>
      </MuiThemeProvider>
    </div>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default Modal;
