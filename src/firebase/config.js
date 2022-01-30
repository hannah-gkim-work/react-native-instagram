import firebase from "firebase/compat/app";
// import "firebase/auth";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuYtagT8BY_6RpAZdFcyTHzr2TOBFNBo0",
  authDomain: "instagram-react-native-5bd2a.firebaseapp.com",
  projectId: "instagram-react-native-5bd2a",
  storageBucket: "instagram-react-native-5bd2a.appspot.com",
  messagingSenderId: "332124346974",
  appId: "1:332124346974:web:0127aafd77cc076b8532cf",
};
let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;
