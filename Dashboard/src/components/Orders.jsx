import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>
        {/* <button className="btn">Get started</button> */}
        <Link className="btn" aria-current="page" to="/">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
