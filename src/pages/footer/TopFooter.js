import React from 'react';
import logo from '../../assets/images/logo.png';

const TopFooter = () => {
    return (
        <div className="container my-5 py-4">
            <div className="row">
                <div className="col-md-3">
                    <img src={logo} alt="" className="mb-4" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec erat erat. Integer blandit, nulla quis fermentum hendrerit, nisi diam viverra metus, porta semper est ipsum et sapien.</p>
                </div>
                <div className="col-md-3">
                    <h4 className="mb-4" >Navigation</h4>
                    <div>
                        <ul>
                        <li>About Company</li>
                        <li>Advice & Tips</li>
                        <li>Our Team</li>
                        <li>Our Partners</li>

                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <h4 className="mb-4" >Services</h4>
                    <div>
                        <ul>
                        <li>Maid Service</li>
                        <li>Window Cleaning</li>
                        <li>Office Cleaning</li>
                        <li>Domestic Cleaning</li>

                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <h4 className="mb-4" >Contact Information</h4>
                    <div>
                        <p>Brooklyn, NY 10036, United States</p>
                        <p>example.cleaning.com</p>
                        <p>Call us: 1-800-123-1234</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default TopFooter;