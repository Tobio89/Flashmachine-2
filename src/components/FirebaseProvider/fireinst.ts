import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyAss_pyRNhk9Fl0bCZuwgDr-ZvWYYJSaT8",
  authDomain: "flashmachine-c50f1.firebaseapp.com",
  projectId: "flashmachine-c50f1",
  storageBucket: "flashmachine-c50f1.appspot.com",
  messagingSenderId: "342231831393",
  appId: "1:342231831393:web:eee2d14b8c737916c56b20",
  measurementId: "G-QP8909BQQV",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
