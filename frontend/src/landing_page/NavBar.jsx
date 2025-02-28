import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar({index = -1}) {
  const [link, setLink] = useState(index);

  const handleLinkClink = (index) => {
    setLink(index);
  }

  const activeLinkClass = "link activeLink";
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="logo"
            style={{ width: "25%" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about" onClick={() => handleLinkClink(0)}>
                  <p className={link == 0 ? activeLinkClass : ""}>About</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/product"  onClick={() => handleLinkClink(1)}>
                  <p className={link == 1 ? activeLinkClass : ""}>Product</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/pricing"  onClick={() => handleLinkClink(2)}>
                  <p className={link == 2 ? activeLinkClass : ""}>Pricing</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/support"  onClick={() => handleLinkClink(3)}>
                  <p className={link == 3 ? activeLinkClass : ""}>Support</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/signup"  onClick={() => handleLinkClink(4)}>
                  <p className={link == 4 ? activeLinkClass : ""}>SignUp</p>
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
