/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useAuth } from "../Auth/UseAuth";
import Sidebar from "./Sidebar";

const Checkout = () => {
  // const [loggedInUser, SetLoggedInUser] = useContext(AuthContext);
  const auth = useAuth();
  const [order, setOrder] = useState([]);
  const { id } = useParams();

  const history = useHistory();

  useEffect(() => {
    const url = `https://clean-server.herokuapp.com/order/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  const handleCheckOut = (order) => {
    // console.log(order);
    fetch(
      "https://warm-spire-50135.herokuapp.com/add-orders",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceName: `${order.serviceName}`,
          price: `${order.price}`,
          quantity: 1,
          userEmail: `${auth.user.email}`,
          orderTime: new Date().toLocaleString(),
        }),
      },
      [order]
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Order placed successfully");
        }
      });
    history.push("/dashboard/order-list");
  };
  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <div className="row my-3">
            <h3 className="text-primary">Process checkout</h3>

            <h3 className="ml-auto">
              {auth.user.email ? (
                <b>{auth.user.displayName}</b>
              ) : (
                <b>dummy user</b>
              )}
            </h3>
          </div>
          <div className="row">
            <div className="col-md-9">
              <table className="table table-hovered">
                <thead>
                  <tr>
                    <th>Service name</th>
                    <th>Price</th>
                    <th>status</th>
                    <th>action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{order.serviceName}</td>
                    <td>{order.price}</td>
                    <td>{order.status}</td>
                  </tr>
                </tbody>
              </table>
              <button
                className="btn btn-info d-block ml-auto"
                onClick={() => {
                  handleCheckOut(order);
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
