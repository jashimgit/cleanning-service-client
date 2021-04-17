import React from "react";

const SingleService = ({ service, handlePurchase }) => {
  // serviceItem = service.serviceItem;

  return (
    <div className="col-md-4">
      <div className="card mb-3 ">
        <div className="card-body bg-info text-white text-center">
          <h3> {service.serviceName} </h3>
          <h3>$ {service.price}</h3>
          <h3>per month</h3>
        </div>
        <div className="my-5 text-center ">
          <button
            className="btn btn-success text-center"
            onClick={() => handlePurchase(service._id)}
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
