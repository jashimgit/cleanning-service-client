import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
      <Link class="navbar-brand" to="/">
        <img src={logo} alt="logo"/>
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
            <Link class="nav-link" to="/dashboard">Dashboard</Link>
          </li>
          
          
        </ul>
      
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
