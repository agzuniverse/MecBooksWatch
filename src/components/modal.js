import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import RaisedButton from "material-ui/RaisedButton";
import sentLogo from "../img/if_telegram_519183.png";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { sendMsg } from "../firebase/firebase";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recievedMessages: [
        "Hey,there I'm interested in purchasing your book, where can we meet?",
        "Sure man"
      ],
      sentMessages: [
        "Yeah Sure, we can meet up near college library at 1pm tomorrow..",
        "Deal."
      ]
    };
  }

  sendChat = () => {
    sendMsg(this.props.uid, this.props.sendToUid, this._input.value);
    this.setState({
      sentMessages: this.state.sentMessages.concat([this._input.value])
    });
    this._input.value = "";
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
            <input ref={e => (this._input = e)} />
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

Modal.propTypes = {
  uid: PropTypes.string.isRequired,
  sendToUid: PropTypes.string
};

Modal.defaultProps = {
  sendToUid: ""
};

const mapStateToProps = state => ({
  uid: state.auth.uid
});

export default connect(mapStateToProps)(Modal);
