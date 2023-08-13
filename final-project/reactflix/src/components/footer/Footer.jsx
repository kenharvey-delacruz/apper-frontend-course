import React from "react";

import "./footer.scss";

import { Link } from "react-router-dom";

import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/react.png";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo} alt="" />
            <Link to="/">react&chill</Link>
          </div>
        </div>
        <div className="footer__content__menus">
          <Link to="/">Home</Link>
          <Link to="/">Contact Us</Link>
          <Link to="/">Terms of Services</Link>
          <Link to="/">About Us</Link>
        </div>
      </div>
      Footer
    </div>
  );
};

export default Footer;
