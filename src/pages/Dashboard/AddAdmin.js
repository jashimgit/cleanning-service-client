/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../App";
import Sidebar from "./Sidebar";

const AddAdmin = () => {
  const [loggedInUser, setLoggedInUser] = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    // console.log(data);
    e.preventDefault();
    fetch("https://warm-spire-50135.herokuapp.com/createAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Admin Added successfully");
          e.target.value = "";
        }
      });
  };

  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex justify-content-between py-2">
                <h3 className="text-primary">Make Admin</h3>

                {loggedInUser.email ? (
                  <>
                    <h3 className="text-primary">{loggedInUser.displayName}</h3>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => loggedInUser.signout()}
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <h3 className="text-primary">User Name</h3>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7">
              <div className="card">
                <div className="card-body shadow">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email ID"
                        {...register("email", { required: true })}
                      />
                      {errors.name && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
