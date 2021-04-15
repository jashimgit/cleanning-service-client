import React from 'react';

const ServiceItem = ({service}) => {
    return (
        <div className="col-md-4" >
            <div className="card">
            <img src={service.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{service.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className="btn btn-info">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;