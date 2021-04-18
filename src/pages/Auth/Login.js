/* eslint-disable no-unused-vars */
import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { AuthContext } from "./../../App";
import { firebaseConfig } from "./FirebaseConfig";
import "./login.css";

const Login = () => {
  const [loggedInUser, SetLoggedInUser] = useContext(AuthContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then((idToken) => {
        console.log(idToken);
        sessionStorage.setItem("token", idToken);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { displayName, email };
        SetLoggedInUser(signedInUser);
        storeAuthToken();
        history.replace(from);
      });
  };

  return (
    <div className="d-flex login">
      <h2 className="display-4 mb-5">Login</h2>

      <button
        className="btn btn-danger"
        type="button"
        onClick={handleGoogleSignIn}
      >
        Continue with google
      </button>
    </div>
  );
};

export default Login;
