const firebaseConfig = {
    apiKey: "AIzaSyCw_O-r4zITRdVsHlS1f6h2UT0kfYFoZrs",
    authDomain: "webdevproject322.firebaseapp.com",
    databaseURL: "https://webdevproject322-default-rtdb.firebaseio.com",
    projectId: "webdevproject322",
    storageBucket: "webdevproject322.appspot.com",
    messagingSenderId: "65749245086",
    appId: "1:65749245086:web:26b9a2c348ebfaf4c4af8f"
  };



firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

var docRef = db.collection("").dec("");

docRef.get().then({}) => {
    if(docRef.exists) {
        document.getElementById("").innerHTML = JSON.stringify(doc.data());
    }
    else {
        console.log("No doc");
    }
    
}