import React from "react";

const Header = () => {
  return (
    <section className="header-section container-fluid p-0">
      <div className="header-description row">
        <div className=" col-sm-12 col-md-12">
          <h4 className="text-info">We do it well.</h4>
          <h1>Worry no more. Let us do your chores. Quick. Proper.</h1>
          <p>
            our profession and experienced cleaning staff does the job right the
            first time.
          </p>
          <button className="btn btn-info mr-3">Learn More</button>
          <button className=" btn btn-outline-info">Quick Quoute</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
