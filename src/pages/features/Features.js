import React from 'react';
import customer1 from '../../assets/1.jpg';
import customer2 from '../../assets/2.jpg';

const Features = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card bg-info d-flex flex-column justify-content-center align-items-center p-4">
                        <h5 className="text-white text-italic">We are Open</h5>
                        <h4 className="text-white">Mon-Fri: 08:00-17:00</h4>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card bg-warning d-flex flex-column justify-content-center align-items-center p-4">
                        <h5 className="text-white text-italic">Call us now</h5>
                        <h4 className="text-white">+880 177 222 2229</h4>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card bg-info d-flex flex-column justify-content-center align-items-center p-4">
                        <h5 className="text-white text-italic">Order the service by mail:</h5>
                        <h4 className="text-white">info@company.com</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className=" col-12 header my-4 text-center">
                    <h5 className="text-secondary">Enjoy your time off</h5>
                    <h1>How We Work</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 text-center">
                    <img src={customer1} className="img-fluid" alt="" style={{ borderRadius: '50%', width: '50%'}}/>
                    <div className="mt-5">
                        <h5>Contact us to book a term</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et feugiat mi. Sed lacinia euismod convallis.</p>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <img src={customer2} className="img-fluid" alt="" style={{ borderRadius: '50%', width: '50%'}}/>
                    <div className="mt-5">
                        <h5>Contact us to book a term</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et feugiat mi. Sed lacinia euismod convallis.</p>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <img src={customer1} className="img-fluid" alt="" style={{ borderRadius: '50%', width: '50%'}}/>
                    <div className="mt-5">
                        <h5>Contact us to book a term</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et feugiat mi. Sed lacinia euismod convallis.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;