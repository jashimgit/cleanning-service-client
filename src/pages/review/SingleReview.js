import React from "react";

const SingleReview = ({review}) => {
  
//   console.log(reviewMsg, userEmail);

  return (
    <div className="col-md-4">
      <div className="card mb-3 ">
        <div className="card-body">
          <p className="lead">{review.reviewMsg}</p>
          <h5>Reviewed By: </h5><small>{review.userEmail}</small>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
