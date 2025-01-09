import React from "react";

const Menu = () => {
  return (
    <div className="menu-container">
      <div>
        <img src="./logos.png" style={{ width: "50px" }} />
      </div>
      
      <div className="menus">
        <ul>
          <li>
            <p>Dashboard</p>
          </li>
          <li>
            <p>Orders</p>
          </li>
          <li>
            <p>Holdings</p>
          </li>
          <li>
            <p>Positions</p>
          </li>
          <li>
            <p>Funds</p>
          </li>
          <li>
            <p>Apps</p>
          </li>
        </ul>
        <hr />
        <div className="profile" >
          <div className="avatar">BU</div>
          <div className="username">
            <p>USERID</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Menu;
