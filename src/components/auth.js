import firebase, { auth, provider } from '../firebase/firebase';
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';


class Auth extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
          uData: {},
          isNewUser: Boolean(),  
          isLoggedIn: Boolean(),
          uToken: ''
        };
    };
    
    logout = () => {
        auth.signOut()
            .then(function() {
                this.setState({
                    uData: {},
                    isNewUser: false,  
                    isLoggedIn: false,
                    uToken: '',
                });
                console.log("Signout Successful");
            })
            .catch(function(error) {
                console.log("Error during signout: " + error);
        });
    };

    login = () => {
        auth.setPersistence (firebase.auth.Auth.Persistence.LOCAL)
            .then(function() {
                auth.signInWithPopup(provider)
                    .then(function(result) {
                        var token = result.credential.accessToken;
                        var pData = result.user.providerData[0];
                        var isNewUser = result.additionalUserInfo.isNewUser;
                        var state = this.state;
                        this.setState({
                            uData: pData,
                            isNewUser: isNewUser,  
                            isLoggedIn: true,
                            uToken: token,
                        });
                        console.log("User has logged in");
                    })
                    .catch(function(error) {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        var email = error.email;
                        var credential = error.credential;
                        console.log(errorCode + errorMessage);
                });
            })
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode + errorMessage);
        });
    };

    render() {
        return(
            <div>
                <button onClick={ this.login }>Login</button>
                <button onClick={ this.logout }>Logut</button>
            </div>
        )
    }
}

export default Auth;