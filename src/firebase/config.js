// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQcz-jRPqdL7AOxBtQG8q5S7_NpU5VLCQ",
  authDomain: "react-jurnal.firebaseapp.com",
  projectId: "react-jurnal",
  storageBucket: "react-jurnal.firebasestorage.app",
  messagingSenderId: "543374625514",
  appId: "1:543374625514:web:fc2d1b542ef8d8b6316593"
};

// Initialize Firebase
export const FirebasApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebasApp);
export const FirebaseDB = getFirestore(FirebasApp);