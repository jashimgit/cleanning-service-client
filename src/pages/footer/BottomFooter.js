import React from 'react';

const BottomFooter = () => {
    return (
        <div style={{backgroundColor: 'tomato', height: '40px', fontSize: '20px', color: 'white'}}>
            <p className="text-center pt-2">All rights reserved &copy {new Date().getFullYear()}</p>

        </div>
    );
};

export default BottomFooter;