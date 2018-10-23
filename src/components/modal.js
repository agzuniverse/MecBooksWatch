import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export default class Modal extends Component {
  fetchChat() {
    if (this.props.sendToUid) {
      //FETCH MESSAGES WITH THIS PARTICULAR PERSON
      //RENDER AND RETURN CHAT WINDOW
      return null;
    }
    return null;
  }
  render() {
    const { handleClose, show, sendToUid } = this.props;
    const showHideClassName = show
      ? "modal display-block"
      : "modal display-none";

    return (
      <div className={showHideClassName}>
        <MuiThemeProvider>
          {sendToUid ? (
            <div className="modal-main">
              {this.fetchChat()}
              <RaisedButton
                secondary={true}
                onClick={handleClose}
                style={{ width: "20", margin: "auto" }}
              >
                close
              </RaisedButton>
            </div>
          ) : (
            <div className="modal-main">
              <div className="chatBox">
                You recieved one message from Vivek.R
              </div>
              <div className="chatBox" />
              <div className="chatBox" />
              <div className="chatBox" />
            </div>
          )}
        </MuiThemeProvider>
      </div>
    );
  }
}
