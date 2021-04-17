import {
  faAddressBook, faClipboard,

  faCog, faTh,

  faUserFriends
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';
const sidebarStyle = {
  background: "rgb(239 228 235)",
  height: "100vh"
};

const Sidebar = () => {
  return (
    <nav style={sidebarStyle}>
      <div className="text-center py-2"><img src={logo} alt="" /></div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link
            to="/dashboard"
            className="nav-link menuLink active"
            aria-current="page"
          >
            <FontAwesomeIcon icon={faTh} /> Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/dashboard/order-list"
            className="nav-link menuLink"
            aria-current="page"
          >
            <FontAwesomeIcon icon={faClipboard} /> Order List
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/dashboard/add-service"
            className="nav-link menuLink"
            aria-current="page"
          >
            <FontAwesomeIcon icon={faUserFriends} /> Add Service
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/dashboard/add-admin"
            className="nav-link menuLink"
            aria-current="page"
          >
            <FontAwesomeIcon icon={faAddressBook} /> Make Admin
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/dashboard/manage-service"
            className="nav-link menuLink"
            aria-current="page"
          >
            <FontAwesomeIcon icon={faCog} /> Manage Service
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
