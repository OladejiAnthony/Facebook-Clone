import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6myM9j6N-C11PJlGrrtHos-hJmiIz3gk",
  authDomain: "facebook-clone-87046.firebaseapp.com",
  databaseURL: "https://facebook-clone-87046.firebaseio.com",
  projectId: "facebook-clone-87046",
  storageBucket: "facebook-clone-87046.appspot.com",
  messagingSenderId: "300968996815",
  appId: "1:300968996815:web:c627053c844364ef052cba",
  measurementId: "G-7HHEJ3PH1T"
};


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new GoogleAuthProvider();

export { auth, db };
export {provider};






//const firebaseApp = firebase.initializeApp(firebaseConfig);
//const db = firebaseApp.firestore();
//const auth = firebase.auth();
//const provider = new firebase.auth.GoogleAuthProvider();


//export {auth, provider};
//export default  db;
