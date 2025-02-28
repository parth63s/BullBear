import React from "react";

function Footer() {
  return (
    <footer style={{backgroundColor:"rgb(250,250,250)"}}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img
              src="media/images/logo.svg"
              alt="logo"
              style={{ width: "50%" }}
            />
            <p>
              &copy; 2010 - 2024, Not BullBear Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className="col">
            <p>Company</p>
            <a href="" className="footer-link">About</a>
            <br />
            <a href="" className="footer-link">Products</a>
            <br />
            <a href="" className="footer-link">Pricing</a>
            <br />
            <a href="" className="footer-link">Referral programme</a>
            <br />
            <a href="" className="footer-link">Careers</a>
            <br />
            <a href="" className="footer-link">BullBear.tech</a>
            <br />
            <a href="" className="footer-link">Press & media</a>
            <br />
            <a href="" className="footer-link">BullBear cares (CSR)</a>
            <br />
          </div>
          <div className="col">
            <p>Support</p>
            <a href="" className="footer-link">Contact</a>
            <br />
            <a href="" className="footer-link">Support portal</a>
            <br />
            <a href="" className="footer-link">Z-Connect blog</a>
            <br />
            <a href="" className="footer-link">List of charges</a>
            <br />
            <a href="" className="footer-link">Downloads & resources</a>
            <br />
          </div>
          <div className="col">
            <p>Account</p>
            <a href="" className="footer-link">Open an account</a>
            <br />
            <a href="" className="footer-link">Fund transfer</a>
            <br />
            <a href="" className="footer-link">60 day challenge</a>
            <br />
          </div>
        </div>
        <div className="mt-5 text-mute" style={{ fontSize: "14px" }}>
          
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
