// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

//firestore setup
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  getDocs,
  query,
} from "firebase/firestore";

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

export const auth = getAuth(); //tracking all auth state instances
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

//firestore setup to create users
export const db = getFirestore();

// create a new collection and documents
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

//get collection and documents
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");

  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

// create user documents
export const createUserDocumentFromAuth = async (
  user,
  additionalInformation
) => {
  if (!user) return;

  const userDocRef = doc(db, "users", user.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  //if user data does not exists
  //create / set the document with the data from user in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.error("there was an error creating the user", error);
    }
  }

  return userDocRef;
};

//create a user with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

//sign in a user with email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

//signout a user with email and password
export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
