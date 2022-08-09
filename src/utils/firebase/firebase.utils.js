// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

//firestore setup
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

//firestore setup to create users
export const db = getFirestore();

export const createUserDocumentFromAuth = async (user) => {
  const userDocRef = doc(db, "users", user.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  //if user data exists

  //if user data does not exists
  //create / set the document with the data from user in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.error("there was an error creating the user", error);
    }
  }

  return userDocRef;
};
