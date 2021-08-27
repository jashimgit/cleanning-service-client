/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
/* eslint-disable react-hooks/exhaustive-deps */

import firebase from "firebase/app";
import "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { firebaseConfig } from "./FirebaseConfig";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const authContext = createContext();
const googleProvider = new firebase.auth.GoogleAuthProvider();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth()

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.

export const useAuth = () => useContext(authContext);

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [error, setError] = useState('');
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photoURL: ''
  });
  const [loginStatus, setLoginStatus] = useState({
    status: "idle",
    error: null
  });

  const formatUser = {
    name: user.displayName,
    email: user.email,
    photoURL: user.photoURL
  }
  

  // signinwithpopup 

  const signInWithPopUp = async () => {
    try {
      const response = await firebase.auth()
        .signInWithPopup(googleProvider);

      // console.log(response);
      const { displayName, photoURL, email } = response.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photoURL: photoURL
      };
      setUser(signedInUser);
      setLoginStatus({ status: "loggedin", error: null });
      return user;
    } catch (err) {
      // handle errors here 
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorCode, errorMessage);
    }
  }


  // signout
  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
  };

  // get user on mount

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // return the user object and auth methods
  return {
    user,
    signInWithPopUp,
    signout,
    formatUser
  };
}
