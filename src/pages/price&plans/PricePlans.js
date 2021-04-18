import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import SingleService from "./SingleService";



const PricePlans = () => {
  const [serviceList, setServiceList] = useState([]);
  const history = useHistory();
  
  const handlePurchase = (id) => {
    // console.log(id)
    history.push('/order-service/'+id);
  }

useEffect(() => {
    async function fetchService() {
    const res = await fetch('https://warm-spire-50135.herokuapp.com/service')
    const json = await res.json();
    setServiceList(json);
  }

  fetchService();


}, [])

  return (
    <div className="container">
      <div className="row my-5 py-4">
        <div className=" col-12  header my-4 text-center ">
          <h5 className="text-secondary text-italic">
            Full-service House cleaning
          </h5>
          <h1>Prices & Plans</h1>
        </div>
      </div>
      <div className="row">
        {
          serviceList.map(service => <SingleService service={service} key={service._id}  handlePurchase={handlePurchase} /> )
        }
      </div>
    </div>
  );
};

export default PricePlans;
