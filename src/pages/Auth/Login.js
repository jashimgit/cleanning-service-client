/* eslint-disable no-unused-vars */
import "firebase/auth";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./login.css";
import { useAuth } from "./UseAuth";
const image = '/avater.png';

const Login = () => {
  // const [loggedInUser, SetLoggedInUser] = useContext(AuthContext);
  const auth = useAuth();

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  // if (firebase.apps.length === 0) {
  //   firebase.initializeApp(firebaseConfig);
  // }

  // const storeAuthToken = () => {
  //   firebase
  //     .auth()
  //     .currentUser.getIdToken(/* forceRefresh */ true)
  //     .then((idToken) => {
  //       console.log(idToken);
  //       sessionStorage.setItem("token", idToken);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };



  const handleGoogleSignIn = () => {
    auth.signInWithPopUp()
    .then(res => {
      handleGoogleSignIn(res, true);
    })
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="d-flex login" >
          <div className="card">
            <img src={image} className="card-img-top login-avater" alt="..." />
            <div className="card-body">
              <h2 className="card-title mb-5 text-center">Login with Google</h2>

              <button
                className="btn btn-danger"
                type="button"
                onClick={handleGoogleSignIn}
              >
                Login
              </button>


            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Login;


