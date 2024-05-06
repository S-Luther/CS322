const firebaseConfig = {
    apiKey: "AIzaSyChvh1AkzB0aLkE9t5yH4__odApZFGaVTY",
    authDomain: "connorsmyuniqueprojectname.firebaseapp.com",
    projectId: "connorsmyuniqueprojectname",
    storageBucket: "connorsmyuniqueprojectname.appspot.com",
    messagingSenderId: "427054301429",
    appId: "1:427054301429:web:88f79279b707425d25c5bc"
  };
  

  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

  var docRef = db.collection("Facts").doc("Cat");

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
  