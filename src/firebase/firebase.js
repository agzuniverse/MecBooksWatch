import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDw_Tpy96dXGAd3z65s_s98pdd007MPysU",
    authDomain: "mecbookswatch.firebaseapp.com",
    projectId: "mecbookswatch",
    storageBucket: "mecbookswatch.appspot.com"
};

firebase.initializeApp(config);

export function addToStorage(file){
    var storageRef = firebase.storage().ref();
    var storageAdd = storageRef.child('test.jpg');

    storageAdd.put(file).then(function(snapshot) {
        console.log('Uploaded a blob or file!');
    });
}

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;