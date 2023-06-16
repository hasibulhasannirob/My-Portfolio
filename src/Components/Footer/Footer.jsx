import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
      {/* <span>hasibulnirob.official@gmail.com</span> */}
         
        <div className="f-icons">
          <a href="https://www.facebook.com/nirob.hasibul/">
            <Facebook color="white" size="3rem" />
          </a>
          <a href="https://www.instagram.com/j.snowwwwww/">
            <Instagram color="white" size="3rem" />
          </a>
          <a href="https://github.com/hasibulhasannirob">
            <Github color="white" size="3rem" />
          </a>
          <a href="https://www.linkedin.com/in/hasibul-hasan-nirob-71a5b917b/">
            <Linkedin color="white" size="3rem" />
          </a>
          
        </div>
        <span>Copyright © 2023 || Hasibul Hasan Nirob || All rights reserved.</span>
      </div>
    </div>
  );
};
export default Footer;
