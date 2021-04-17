/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../Auth/UseAuth";
import Sidebar from "./Sidebar";

const OrderList = () => {
  const [orderList, setOrderList] = useState([]);
  // const [orderStatus, setOrderStatus] = useState({});
  const auth = useAuth;
  const { register } = useForm();

  const handleChange = (_id) => {
    const status = event.target.value;
    const id = _id;
    fetch('http://localhost:5000/change-status', {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        status: status,
        _id: id
      })
    })
  };

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, []);

  const orderRow = orderList.map((order) => {
    const {_id, serviceName, price, userEmail, orderTime, status } = order;

    return (
      <tr>
        <td>{serviceName}</td>
        <td>{price}</td>
        <td>{userEmail}</td>
        <td>{orderTime}</td>
        <td>
          <form onChange={() => handleChange(_id)}>
            <select {...register("status")} className="form-control" value={status}>
              <option value="pending">pending</option>
              <option value="on going">On Going</option>
              <option value="done">done</option>
            </select>
          </form>
        </td>
      </tr>
    );
  });
  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        {/* sidebar ended here */}
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex justify-content-between py-2">
                <h3 className="text-primary">Order list</h3>
                {auth.user ? (
                  <>
                  <h3 className="text-primary">{auth.user.displayName}</h3>
                  <button onClick={() => auth.signout()}>Sign Out</button>
                  </>
                ) : (
                  <h3 className="text-primary">User Name</h3>
                )}
              </div>
            </div>
            <div className="col-md-12">
              <div className="card shadow">
                <div className="card-body">
                  <table className="table table-borderless">
                    <thead className="text-center text-uppercase">
                      <tr>
                        <th>Service name</th>
                        <th>price</th>
                        <th>email</th>
                        <th>order time</th>
                        <th>action</th>
                      </tr>
                    </thead>
                    <tbody>{orderRow}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* body content ended here */}
      </div>
    </div>
  );
};

export default OrderList;