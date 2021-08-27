/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useAuth } from "../Auth/UseAuth";
import Sidebar from "./Sidebar";
const Dashboard = () => {
  // const [loggedInUser, SetLoggedInUser] = useContext(AuthContext)
  const auth = useAuth()

  const [service, setService] = useState([]);

  useEffect(()=>{
      fetch('https://clean-server.herokuapp.com/service')
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

                {auth.user.email ? (
                  <>
                  <h3 className="text-primary">{auth.user.displayName}</h3>
                  <button className="btn btn-danger btn-sm" onClick={() => auth.user.signout()}>Sign Out</button>
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
