import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  useEffect(() => {
    const asRes = async () => {
      const res = await getRedirectResult(auth);
      if (res) {
        const userDocRef = await createUserDocumentFromAuth(res.user);
      }
    };
    asRes();
  }, []);

  return (
    <>
      <button onClick={logGoogleUser}>SignIn</button>
      <button onClick={signInWithGoogleRedirect}>SignIn redirect</button>
    </>
  );
};

export default SignIn;
