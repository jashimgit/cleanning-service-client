import React from 'react';

const ServiceItem = ({service}) => {
    return (
        <div className="col-md-4" >
            <div className="card mb-3">
            <img src={service.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{service.serviceName}</h5>
                    <p className="card-text">{service.details}</p>
                    <div className="text-center">
                    <button className="btn btn-info">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;