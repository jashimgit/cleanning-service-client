import React, { useEffect, useState } from "react";
// import house from "../../assets/images/house-clean.jpg";
// import office from "../../assets/images/office-clean.jpg";
// import window from "../../assets/images/window-clean.jpg";
import ServiceItem from "./ServiceItem";
// const serviceItems = [
//   {
//     name: "Window Cleaning",
//     image: window,
//   },
//   {
//     name: "Office Cleaning",
//     image: office,
//   },
//   {
//     name: "House Cleaning",
//     image: house,
//   }
// ];

const Services = () => {
  const [serviceList, setServiceList] = useState([]);
  console.log(serviceList);
  useEffect(() => {
    async function fetchService() {
    const res = await fetch('http://localhost:5000/service')
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
