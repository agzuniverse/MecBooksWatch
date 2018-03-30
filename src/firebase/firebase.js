import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDw_Tpy96dXGAd3z65s_s98pdd007MPysU",
    authDomain: "mecbookswatch.firebaseapp.com",
    projectId: "mecbookswatch",
    databaseURL: "https://mecbookswatch.firebaseio.com",
    storageBucket: "mecbookswatch.appspot.com"
};

firebase.initializeApp(config);

export function addToStorage(file,data){
    function guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }
    function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    let uuid=guid();

    var storageRef = firebase.storage().ref();
    var storageAdd = storageRef.child(uuid+file.name);

    storageAdd.put(file).then(function(snapshot) {
        data.imageURL=snapshot.downloadURL;
        console.log(data);

        var database = firebase.database();
        database.ref('store/textbooks/'+data.uid).push(data).then((snapshot) => {
            console.log("Book added successfully");
        })
    });
}

export function readFromStorage(uid){
    return new Promise((resolve,reject) => {
        firebase.database().ref('store/textbooks/'+uid).once('value',(snapshot) => {
            resolve(snapshot.val());   
        });
    });
}

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;