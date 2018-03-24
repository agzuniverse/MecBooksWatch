import firebase, { auth, provider } from './firebase/firebase';
import React from 'react';
import Button from 'material-ui/Button';



class Auth extends React.Component {
    signIn = () => {
        auth.signInWithPopup(provider)
            .then(function(result) {
                var token = result.credential.accessToken;
                var user = result.user;
                console.log(result.user);
            })
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode + errorMessage);
         });
    }

    logout = () => {
        auth.signOut()
            .then(function() {
                console.log("Signout Successful");
            })
            .catch(function(error) {
                console.log("Error during signout: " + error);
        });
    }

    login = () => {
        auth.setPersistence (firebase.auth.Auth.Persistence.LOCAL)
            .then(function() {
                signIn();
            })
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode + errorMessage);
        });
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}