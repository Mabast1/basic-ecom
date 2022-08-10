import React from "react";
// import { getRedirectResult } from "firebase/auth";

// import {
//   //   auth,
//   signInWithGoogleRedirect,
// } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignInForm from "../../components/SignInForm/SignInForm";
import "./Authenrication.scss";

const Authentication = () => {
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
    <div className="authentication-container">
      {/* <button onClick={signInWithGoogleRedirect}>SignIn redirect</button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
