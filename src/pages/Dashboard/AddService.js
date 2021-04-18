/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../App";
import Sidebar from "./Sidebar";

const AddService = () => {
  const [loggedInUser, setLoggedInUser] = useContext(AuthContext);
  const [imageUrl, setImageUrl] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log(imageUrl);

  const onSubmit = (data) => {
    // console.log(data);
    const serviceInfo = {
      serviceName: data.servicePlan,
      price: data.price,
      status: data.status,
      imageUrl: imageUrl,
      details: data.details
    };
    console.log(serviceInfo);

    fetch("https://warm-spire-50135.herokuapp.com/addService", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(serviceInfo),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Service Added successfully");
        }
      });
  };
  const handleImageUpload = (e) => {
    const imageData = new FormData();
    imageData.set("key", "574bd210dc92601c14320e718edd7daf");
    imageData.append("image", e.target.files[0]);

    fetch("https://api.imgbb.com/1/upload", { method: "POST", body: imageData })
      .then((res) => res.json())
      .then((data) => setImageUrl(data.data.display_url));
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
                <h3 className="text-primary">Add Service</h3>
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
          </div>
          <div className="row">
            <div className="col-md-7">
            <div className="card">
              <div className="card-body shadow">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label>Service Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Service Name"
                    {...register("servicePlan", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Price</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Price"
                    {...register("price", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="">Status</label>
                  <select {...register("status")} className="form-control">
                    <option value="active">Active</option>
                    <option value="inactive">In Active</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="file"
                    name="file"
                    className="form-control-file"
                    {...register("image")}
                    onChange={handleImageUpload}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="details"
                    className="form-control"
                    {...register("details")}
                  ></textarea>
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

export default AddService;
