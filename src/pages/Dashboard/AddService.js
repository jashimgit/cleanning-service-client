import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "./Sidebar";

const AddService = () => {
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

    fetch("http://localhost:5000/addService", {
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
          <h2>add Service</h2>
          <div className="row">
            <div className="col-md-7">
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
  );
};

export default AddService;
