import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  //   auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../SignUpForm/SignUpForm";

const SignIn = () => {
  //to authenticate the user with google login
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  //to authenticate the user with google redirect

  //   useEffect(() => {
  //     const asRes = async () => {
  //       const res = await getRedirectResult(auth);
  //       if (res) {
  //         const userDocRef = await createUserDocumentFromAuth(res.user);
  //       }
  //     };
  //     asRes();
  //   }, []);

  return (
    <>
      <button onClick={logGoogleUser}>SignIn</button>
      <button onClick={signInWithGoogleRedirect}>SignIn redirect</button>
      <SignUpForm />
    </>
  );
};

export default SignIn;
