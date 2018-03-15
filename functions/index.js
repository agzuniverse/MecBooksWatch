const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((req, res) => {
    res.send("Hello Firebase");
});

exports.getData = functions.https.onRequest((req, res) => {
    const params = req.url.split("/");
    const id = params[2];
    return admin.database().ref('store/textbooks/'+id).once('value',(snapshot) => {
        res.send(
            JSON.stringify(snapshot.val())
        );
    })
});

exports.addBook = functions.https.onRequest((req, res) => {
    const data = req.body.data;
    return admin.database().ref('store/textbooks').push({data:data}).then((snapshot) => {
        return res.redirect(303, snapshot.ref);
    });
});