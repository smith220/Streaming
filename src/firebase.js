

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";
// If using Firebase database

// import 'firebase/compat/auth
const firebaseConfig = {
    apiKey: "AIzaSyCH117EEO9yVV0BoCwWWe5qxz0CGLrKZok",
  authDomain: "streamer-d31f1.firebaseapp.com",
  projectId: "streamer-d31f1",
  storageBucket: "streamer-d31f1.appspot.com",
  messagingSenderId: "826241102907",
  appId: "1:826241102907:web:dc39ae0314696bd1b6d81e",
  measurementId: "G-65MZGQ6H99"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ experimentalForceLongPolling: true });

 export const db = firebaseApp.firestore();
const auth = firebase.auth();


export default auth;
