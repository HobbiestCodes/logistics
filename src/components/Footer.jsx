import React from 'react'
import './../scss/footer.scss';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer>
    <div className="FooterContext">
      <div className="top">
        <div className="logo-details">
          <i className="fab fa-slack"></i>
          <span className="logo_name">Logistics</span>
        </div>
        <div className="media-icons">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedin /> </a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>
      <div className="link-boxes">
        <ul className="box">
          <li className="link_name">Company</li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Get started</a></li>
        </ul>
        <ul className="box">
          <li className="link_name">Transportation</li>
          <li><a href="#">Air</a></li>
          <li><a href="#">OCEAN</a></li>
          <li><a href="#">Buses</a></li>
        </ul>
        <ul className="box">
          <li className="link_name">Services</li>
          <li><a href="#">Track packages</a></li>
          <li><a href="#">Return package</a></li>
          <li><a href="#">Rigester a complaint</a></li>
        </ul>
        <ul className="box input-box">
          <li className="link_name">Subscribe</li>
          <li><input type="text" placeholder="Enter your email" /></li>
          <li><input type="button" value="Subscribe" /></li>
        </ul>
      </div>
    </div>
    <div className="bottom-details">
      <div className="bottom_text">
        <span className="copyright_text">Copyright © 2024 <a href="#">The RD group of industries.</a>All rights reserved</span>
        <span className="policy_terms">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & condition</a>
        </span>
      </div>
    </div>
  </footer>
  )
}

export default Footer