import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import sentLogo from "../img/if_telegram_519183.png";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export default class Modal extends Component {
  sendChat = () => {
    console.log("Inside send chat");
  };

  fetchChat() {
    if (this.props.sendToUid) {
      return (
        <div className="chatContainer">
          <div className="chatHead">MecBooksWatch</div>
          <div className="chatBody">
            <div className="buyerBox">
              Hey,there I'm interested in purchasing your book, where can we
              meet?
            </div>

            <div className="sellerBox">
              Yeah Sure, we can meet up near college library at 1pm tomorrow..
            </div>
          </div>
          <div className="chatInput">
            <input />
            <img
              src={sentLogo}
              height="40"
              width="40"
              onClick={() => {
                this.sendChat();
              }}
            />
          </div>
        </div>
      );
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
                id="closeBtn"
                buttonStyle={{
                  width: "20",
                  position: "absolute",
                  bottom: "10",
                  right: "10",
                  backgroundColor: "white"
                }}
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
              <RaisedButton
                secondary={true}
                onClick={handleClose}
                id="closeBtn"
                buttonStyle={{
                  width: "20",
                  position: "absolute",
                  bottom: "10",
                  right: "10",
                  backgroundColor: "white"
                }}
              >
                close
              </RaisedButton>
            </div>
          )}
        </MuiThemeProvider>
      </div>
    );
  }
}
