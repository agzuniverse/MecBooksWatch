import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDw_Tpy96dXGAd3z65s_s98pdd007MPysU",
    authDomain: "mecbookswatch.firebaseapp.com",
    databaseURL: "https://mecbookswatch.firebaseio.com",
    projectId: "mecbookswatch",
    storageBucket: "mecbookswatch.appspot.com",
    messagingSenderId: "420778505954"
  };

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
