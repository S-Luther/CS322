const firebaseConfig = {
  apiKey: "AIzaSyBigw7mJf0KYy4OBJv7Y6QI8nGDuDIXRbY",
  authDomain: "cs-322-0.firebaseapp.com",
  projectId: "cs-322-0",
  storageBucket: "cs-322-0.appspot.com",
  messagingSenderId: "416702487992",
  appId: "1:416702487992:web:45bb3fdfc16dc674cd434d",
  measurementId: "G-3NSQJDVRRL"
};



firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

var docRef = db.collection("Facts").doc("Cat");

var provider = new firebase.auth.GoogleAuthProvider();

docRef.get().then((doc) => {
  if(doc.exists){
      console.log(doc.data());
      document.getElementById("text").innerHTML = JSON.stringify(doc.data());
  }
  else{
      console.log("No doc there!");
  }
}).catch((error)=>{
  console.log(error)
})

document.getElementById("signin").addEventListener("click", () =>{
  firebase.auth().signInWithPopup(provider)
})


