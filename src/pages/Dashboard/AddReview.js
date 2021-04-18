/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../App";
import Sidebar from "./Sidebar";


const AddReview = () => {
  const [loggedInUser, SetLoggedInUser] = useContext(AuthContext)
  const [review, setReview] = useState('');

  const userEmail = loggedInUser.email;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
        
    fetch("https://warm-spire-50135.herokuapp.com/add-review", {
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
        <div className="row">
        <div className="col-md-12">
              <div className="d-flex justify-content-between py-2">
                <h3 className="text-primary">ReView Page</h3>

                {loggedInUser.email ? (
                  <>
                  <h3 className="text-primary">{loggedInUser.displayName}</h3>
                  <button className="btn btn-danger btn-sm" onClick={() => loggedInUser.signout()}>Sign Out</button>
                  </>
                ) : (
                  <h3 className="text-primary">Login</h3>
                )}
              </div>
            </div>
        </div>
          <div className="row">
            <div className="col-md-7">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Write a Review</label>
            
              <textarea type="text"
                className="form-control"
                placeholder="Enter your review"
                {...register("review", { required: true })}></textarea>
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
