/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const { randomUUID } = require('crypto');
const admin = require('firebase-admin');


const firebaseConfig = {
  apiKey: "AIzaSyBigw7mJf0KYy4OBJv7Y6QI8nGDuDIXRbY",
  authDomain: "cs-322-0.firebaseapp.com",
  projectId: "cs-322-0",
  storageBucket: "cs-322-0.appspot.com",
  messagingSenderId: "416702487992",
  appId: "1:416702487992:web:45bb3fdfc16dc674cd434d",
  measurementId: "G-3NSQJDVRRL"
};

admin.initializeApp(firebaseConfig);

const db = admin.firestore();

const docRef = db.collection('Facts').doc('Cat');

const labRef = db.collection('lab').doc('test');



const functions = require("firebase-functions");
const axios = require('axios');

const params = {}

exports.pubsub = functions
                  .runWith({timeoutSeconds: 60, memory: "1GB"})
                  .pubsub
                  .schedule('every 12 hours')
                  .onRun(async context => {

                    await axios.get('https://cat-fact.herokuapp.com/facts', {params})
                    .then(response => {
                      const apiResponse = response.data;
                      docRef.set({
                        current: apiResponse,
                      })
                    }).catch(error => {
                      console.log(error);
                    });
                  });


exports.helloWorld = onRequest({timeoutSeconds: 15, cors: true, maxInstances: 10}, (request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  console.log(request.query)

  docRef.get().then((doc) => {
    if (doc.exists){
        response.send(request.query);
    }
    else{ 
        logger.info("No such Document!", {structuredData: true});
    }
  })
});


exports.queryTest = onRequest({timeoutSeconds: 15, cors: true, maxInstances: 10}, (request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  console.log(request.query)

  labRef.set({
    current: request.query
  }).then(()=>{
    response.send("got it")
  })
});




exports.flashBriefing = onRequest({timeoutSeconds: 15, cors: true, maxInstances: 10}, async (request, response) => {
  logger.info("Flash Briefing Requested!", {structuredData: true});
  response.writeHead(200, { 'Content-Type' : 'text/html'});
  response.end("<br/><br/><div><p>name:"+JSON.stringify(request.query.test)+"</p></div>")
});