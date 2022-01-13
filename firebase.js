import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC6C-iZV5iXFgSFAvHPLsv7HaI3m1EefFY",
    authDomain: "challenge-b58a4.firebaseapp.com",
    projectId: "challenge-b58a4",
    storageBucket: "challenge-b58a4.appspot.com",
    messagingSenderId: "528248868820",
    appId: "1:528248868820:web:16f1b748e19978867a5041",
    measurementId: "G-R23PCKLBPY"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };