/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../App";
import Sidebar from "./Sidebar";

const ManageService = () => {
  const [loggedInUser, SetLoggedInUser] = useContext(AuthContext)
  
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    const url = "https://warm-spire-50135.herokuapp.com/service";
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setServiceList(json);
    }
    fetchData();
  }, []);

  // handling delete books item

  const handleDeleteService = (id, event) => {
    // console.log('clicked, ', event.target.parentElement.parentElement);
    fetch(`https://warm-spire-50135.herokuapp.com/delete-service/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log('Deleted Successfully');
        event.target.parentElement.parentElement.style.display = "none";
        // alert('service deleted successfully');
      });
  };

  const serviceRow = serviceList.map((service) => {
    const { _id, serviceName, price, imageUrl } = service;
    return (
      <tr>
        <td>{serviceName}</td>
        <td>{price}</td>
        <td>
          <img
            src={imageUrl}
            alt=""
            style={{ width: "80px", height: "50px" }}
          />
        </td>
        <td>
          <button className="btn btn-info btn-sm mr-2" type="button">
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
          <button
            className="btn btn-danger btn-sm "
            type="button"
            onClick={() => handleDeleteService(_id, event)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <div className="row">
          <div className="col-md-12">
              <div className="d-flex justify-content-between py-2">
                <h3 className="text-primary">Manage Service</h3>

                {loggedInUser.email ? (
                  <>
                  <h3 className="text-primary">{loggedInUser.displayName}</h3>
                  <button className="btn btn-danger btn-sm" onClick={() => loggedInUser.signout()}>Sign Out</button>
                  </>
                ) : (
                  <h3 className="text-primary">User Name</h3>
                )}
              </div>
            </div>
            <div className="col-md-12">
            <div className="card">
              <div className="card-body shadow">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Service Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Image</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>{serviceRow}</tbody>
              </table>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageService;
