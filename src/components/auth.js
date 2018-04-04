import firebase, { auth, provider } from '../firebase/firebase';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Userpage from './Userpage';


class Auth extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
          uData: {},
          isNewUser: 0,  
          isLoggedIn: 0,
          uToken: '',
          uid:'',
          userName:'',
          userProPic:'',
          userEmail:'',
        };
    }

    componentWillMount() {
        auth.onAuthStateChanged((user) => {
          if (user) {
            console.log('already logged in');
          } 
          else {
            console.log('No user logged in');
          }
        });
        this.props.update('TEST',{test:'WORKS'});
    }
    
    
    logout = () => {  
        auth.signOut()
            .then(() => {
                this.setState({
                    uData: {},
                    isNewUser: false,  
                    isLoggedIn: false,
                    uToken: '',
                });
                console.log("Signout Successful");
            });
    }

    login = () => {
        auth.signInWithPopup(provider)
                .then((result) => {
                    var token = result.credential.accessToken;
                    var pData = result.user.providerData[0];
                    console.log(result);
                    var isNewUser = result.additionalUserInfo.isNewUser;
                    this.setState({
                        uData: pData,
                        isNewUser: isNewUser,  
                        isLoggedIn: true,
                        uToken: token,
                        uid:result.user.providerData[0].uid,
                        userEmail:result.user.providerData[0].email,
                        userName:result.user.providerData[0].displayName,
                        userProPic:result.user.providerData[0].photoURL,
                    },() => {
                        this.props.update('SET_UID',{uid:this.state.uid});
                        this.props.update('SET_NAME',{name:this.state.userName});
                        this.props.update('SET_EMAIL',{email:this.state.userEmail});
                        this.props.update('SET_PROPIC',{propic:this.state.userProPic});
                        this.props.history.push('/user');
                    });
                    console.log("User has logged in");
                })
    }


    render() {
        return(
            <div className="topWrapper">
                <div className="appbar">
                    <a href="" className="logo">Books<span id="watchPart">Watch</span></a>
                    <button id="logout" onClick={ this.logout }>Logout</button>
                </div>
                <div id="buttons">
                    <button id="google-login" className="loginBtn loginBtn--google" onClick={ this.login }>Login with Google</button>
                    <button id="fb-login" className="loginBtn loginBtn--facebook" onClick={ this.login }>Login with Facebook</button>
                    <Link to='/user'>Click here to go to your userpage</Link>
                </div>
            </div>

        );
    }
}

export default withRouter(
    connect(
        (store) => {
            return store;
        },
        (dispatch) => {
            return {
                update:(dispatchType, dispatchPayload) => {
                    dispatch({type:dispatchType,payload:dispatchPayload});
                }
            }
        }
    )(Auth)
);