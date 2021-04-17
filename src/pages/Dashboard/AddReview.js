/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../Auth/UseAuth";
import Sidebar from "./Sidebar";

const AddReview = () => {
  const [review, setReview] = useState('');
  const auth = useAuth();
  const userEmail = auth.user.email;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
        
    fetch("http://localhost:5000/add-review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
       userEmail : userEmail,
       reviewMsg : data.review
      }),
    })
      .then((res) => res.json())
      .then((success) => {
        if(success) {alert('Review submited successfully')}
      });
    
  };

  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8">
          <h2 className="my-5">Review</h2>
          <div className="row">
            <div className="col-md-7">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Review</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your review"
                {...register("review", { required: true })}
              />
              {errors.name && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
          

          

            <button type="submit" className="btn btn-primary">
                Submit Review
            </button>
          </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
