const firebaseConfig = {
    apiKey: "AIzaSyCd1ON4qTbIQN5ODIPFEpBR19rYtQwyEcM",
    authDomain: "project501st.firebaseapp.com",
    projectId: "project501st",
    storageBucket: "project501st.appspot.com",
    messagingSenderId: "341733331898",
    appId: "1:341733331898:web:dc45d9f71ad13a783c0383",
    measurementId: "G-4BJNT5RS90"
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
        console.log(error);
      })
  