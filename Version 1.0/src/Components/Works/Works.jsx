import React from "react";
import "./Works.css";
import Upwork from "../../img/figma.png";
import Fiverr from "../../img/cpp.png";
import Amazon from "../../img/Python.png";
import Shopify from "../../img/Java.png";
import Facebook from "../../img/jira.png";

const Works = () => {
  return (
    <div className="works" id="Works">
      <div className="myservices">
        <span>My recent</span>
        <span>Working platforms</span>
        <span></span>

        {/* <button className="button s-button">Hire me</button> */}

        <dib className="blur s-blur" style={{ background: "#ABF1FF94" }}></dib>
      </div>

      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </div>

        <div className="w-backCircle blue"></div>
        <div className="w-backCircle yellow"></div>
      </div>
    </div>
  );
};

export default Works;
