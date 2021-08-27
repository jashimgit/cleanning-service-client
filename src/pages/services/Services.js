import React, { useEffect, useState } from "react";
 
import ServiceItem from "./ServiceItem";
 

const Services = () => {
  const [serviceList, setServiceList] = useState([]);
  console.log(serviceList);
  useEffect(() => {
    async function fetchService() {
    const res = await fetch('https://clean-server.herokuapp.com/service')
    const json = await res.json();
    setServiceList(json);
  }
  fetchService();
}, [])

  return (
    <div className="container">
      <div className="row">
        <div className=" col-12  header my-4 text-center ">
          <h5 className="text-secondary">We make life easier</h5>
          <h1>What We Offer</h1>
        </div>
        <div className="row">
          {serviceList.map((item) => (
            <ServiceItem service={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
