import React, { useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const Menu = () => {
  const [selectedMenu, setSelectedmenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedmenu(index);
  }

  
  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!index);
  }

  const  handleLogOutClick = async (e)=> {
      const response = await axios.get("http://localhost:8080/logout");

      setTimeout(() => {
        window.location.href = "http://localhost:5174";
      },10);
  }
  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <div>
        <img src="./logos.png" style={{ width: "50px" }} />
      </div>
      
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration: "none"}} to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu == 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration: "none"}} to="/Orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu == 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration: "none"}} to="/Holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu == 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
            
          </li>
          <li>
            <Link style={{textDecoration: "none"}} to="/Positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu == 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
            
          </li>
          <li>
            <Link style={{textDecoration: "none"}} to="/funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu == 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration: "none"}} to="/apps" onClick={() => handleMenuClick(5)}>
              <p className={selectedMenu == 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
            
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">BU</div>
          <div className="username">
          <Link style={{textDecoration: "none", color:"black"}}  onClick={() => handleLogOutClick()}>
              <p className="logout">LogOut</p>
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Menu;
