import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "./Sidebar";

const AddAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    fetch("http://localhost:5000/createAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Admin Added successfully");
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
          <h2 className="my-5">add admin</h2>
          <div className="row">
            <div className="col-md-7">
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
                <span className="text-danger">This field is required</span>
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
  );
};

export default AddAdmin;
