import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/allOrders").then((res) => {
      setAllOrders(res.data);
    })
  })
  return (
    <div className="orders">
      {
        (allOrders.length > 0) ? (
          
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Total Price</th>
                  <th>Mode</th>
                </tr>
              </thead>
              
              <tbody>
                {allOrders.map((stock, index) => {
                  return (
                    <tr key={index}>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.price}</td>
                      <td>{stock.qty * stock.price}</td>
                      <td>{stock.mode}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="no-orders">
            <p>You haven't placed any orders today</p>
            <Link className="btn" aria-current="page" to="/">
              Get started
            </Link>
          </div>
        )
      }
    </div>
  );
};

export default Orders;
