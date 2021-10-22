import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {

    apiKey: "AIzaSyBwEbW0VI-vQiED7I4R_YSJlOTq-JmfpBc",
  
    authDomain: "live-chat-aa06c.firebaseapp.com",
  
    projectId: "live-chat-aa06c",
  
    storageBucket: "live-chat-aa06c.appspot.com",
  
    messagingSenderId: "978257609008",
  
    appId: "1:978257609008:web:33655c89f0846f0d7d48f5"
  
  };

  //init firebase 

  firebase.initializeApp(firebaseConfig)


  const projectAuth = firebase.auth();
  const projectFire  = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp


  export { projectAuth,projectFire, timestamp} 