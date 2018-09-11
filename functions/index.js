const functions = require('firebase-functions');
const admin = require('firebase-admin');
const algoliasearch = require('algoliasearch')

admin.initializeApp(functions.config().firebase);


const client = algoliasearch(functions.config().algolia.appid,functions.config().algolia.apikey);
const index = client.initIndex('textbooks');

// fire when a textbook is created
exports.indexTextbook = functions.firestore
  .document('textbooks/{textbookID}')
  .onCreate((snap, context) => {
    const data = snap.data();
    const objectID = snap.id;

    // add to algolia index
    return index.addObject({
      objectID,
      data
    });
  });

// fire when a textbook is deleted
exports.unindexTextbook = functions.firestore
  .document('textbooks/{textbookID}')
  .onDelete((snap, context) => {
    const objectID = snap.id;

    // del from algolia index
    return index.deleteObject(objectID);
  });
