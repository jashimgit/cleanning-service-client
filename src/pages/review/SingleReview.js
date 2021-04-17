import React from 'react';

const SingleReview = ({reviewMsg, userEmail}) => {
    return (
        <div className="card mb-3 ">
            <div className="card-body">
                <p className="lead">{reviewMsg}</p>
                <small>{userEmail}</small>
            </div>
        </div>
    );
};

export default SingleReview;