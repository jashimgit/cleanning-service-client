import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './login.css';
import { useAuth } from './UseAuth';

const Login = () => {

    const auth = useAuth();
    const history = useHistory();
    const location = useLocation();
    const {from} = location.state || {from : {pathname: '/'}}

    const handleGoogleSignIn = () => {
        auth.signInWithPopup(() => {
          history.push(from);
          // console.log(from);
        })
    }


    return (
        <div className="d-flex login">
        <h2 className="display-4 mb-5">Login</h2>
        
        <button className="btn btn-danger" type="button" onClick={handleGoogleSignIn}>
          Continue with google
        </button>
      </div>
    );
};

export default Login;