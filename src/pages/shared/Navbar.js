import React from "react";
import { useHistory } from 'react-router';
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import { useAuth } from "../Auth/UseAuth";

const Navbar = () => {
  const auth = useAuth();
  const history = useHistory();

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link class="navbar-brand" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/features">Features</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contacts">Contacts</Link>
            </li>


            {
              auth.user.displayName ? (
                <li class="nav-item">
                  <Link class="nav-link" to="/dashboard">Dashboard</Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login </Link>
                </li>
              )
            }
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
