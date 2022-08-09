// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnP60Ae3reIHBPq4yutNrd8cutkUpnE7k",
  authDomain: "basic-ecom-db.firebaseapp.com",
  projectId: "basic-ecom-db",
  storageBucket: "basic-ecom-db.appspot.com",
  messagingSenderId: "836849857492",
  appId: "1:836849857492:web:b770eca6147292b41fdc41",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
