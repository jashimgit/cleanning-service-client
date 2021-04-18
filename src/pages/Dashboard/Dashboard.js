/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../App";
import Sidebar from "./Sidebar";
const Dashboard = () => {
  const [loggedInUser, SetLoggedInUser] = useContext(AuthContext)
  
  const [service, setService] = useState([]);

  useEffect(()=>{
      fetch('https://warm-spire-50135.herokuapp.com/service')
      .then(res => res.json())
      .then(data => setService(data));
  }, [])

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
                <h3 className="text-primary">Dashboard main page</h3>

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
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card bg-danger text-white">
                        <div className="card-body d-flex justify-content-around align-items-center">
                          <div><strong>{service.length}</strong></div>
                          <div>
                            Services <br/> available
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
