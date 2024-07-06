import React from "react";
import './Services.css';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Heartemoji from '../../img/heartemoji.png';
import Card from "../Card/Card";
import Resume from './CV.pdf';

const Services = () => {
    return (
        <div className="services" id="Services">
            <div className="myservices">
                <span>My</span>
                <span>Skills</span>
                <span>I have basic knowledge in this fields. So, I can 
                    work with that fields.
                </span>
                <a href={Resume} download>
                <button className="button s-button">Download CV</button>

                </a>
                <div className="blur s-blur" style={{ background: '#ABF1FF94'}}></div>
            </div>
            <div className="cards">
                <div style={{left: '14rem'}}>
                    <Card
                        emoji = {Heartemoji}
                        heading = {'Design'}
                        detail = {"Figma, Adobe XD, Sketch, Proto.io, FlowMapp"}
                    />
                    
                </div>
                <div style={{top: '12rem', left: '-4rem'}}>
                    <Card
                        emoji = {Glasses}
                        heading = {'Programming Languages'}
                        detail = {"Python, C/C++, Java, JavaScript, PHP, MySQL"}
                    />
                    
                </div>
                <div style={{ top: '19rem', left: '12rem'}}>
                    <Card
                        emoji = {Humble}
                        heading = {'Project Management'}
                        detail = {"Jira, github, Clickup, Team work, Meet"}
                    />
                    
                </div>
                <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>
            </div>
        </div>
    )
}

export default Services