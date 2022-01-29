// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
// Other libraries might need to also be prefixed with "compat":
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuYtagT8BY_6RpAZdFcyTHzr2TOBFNBo0",
  authDomain: "instagram-react-native-5bd2a.firebaseapp.com",
  projectId: "instagram-react-native-5bd2a",
  storageBucket: "instagram-react-native-5bd2a.appspot.com",
  messagingSenderId: "332124346974",
  appId: "1:332124346974:web:0127aafd77cc076b8532cf",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
// const app = initializeApp(firebaseConfig);

export { firebase };
