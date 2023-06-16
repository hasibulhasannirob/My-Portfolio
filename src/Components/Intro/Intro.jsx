import React from "react";
import './Intro.css';
import Github from '../../img/github-logo.png';
import LinkedIn from '../../img/Linkedin-logo90x90.png';
import Facebook from '../../img/Facebook_Logo.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Glassemoji from '../../img/glassesimoji.png';
import Glasses from '../../img/glasses.png';
import Picture from '../../img/minepic3.png';
import Crown from '../../img/crown.png';
import Thumbup from '../../img/thumbup.png';
import FloatingDiv from "../FloatingDiv/Floating";
import { Link } from "react-scroll";

const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hi! I am </span>
                    <span>Hasibul Hasan Nirob</span>
                    <span>Currenty I am a student of CSE dept. in UIU. I have basic programming
                        languages knowledge in C/C++, Java, Python, JavaScript, PHP and MySQL. I also 
                        design frontend for websites/apps.In the present time I learning mobile application development and I would like to continue mobile application 
                        development.
                    </span>
                </div>
                <Link spy={true} to={'Contact'} smooth={true} >
                <button className="button i-button">
                    Hire me
                </button>
                </Link>
                
                <div className="i-icons">
                    <a href="https://github.com/hasibulhasannirob"> <img src={Github} alt="" /> </a>
                    <a href="https://www.linkedin.com/in/hasibul-hasan-nirob-71a5b917b/"> <img src={LinkedIn} alt="" /> </a>
                    <a href="https://www.facebook.com/nirob.hasibul/"> <img src={Facebook} alt="" /></a>
                </div>
            </div>
            <div className="i-right">

                <img src={Vector1} alt=""/>
                <img src={Vector2} alt=""/>
                <img src={Picture} alt=""/>
                <img src={Glassemoji}/>
                <div style={{top: '13%', left: '85%'}}>
                    <FloatingDiv image={Crown}/>
                </div>
                <div style={{top: '18rem', left: '0rem'}}>
                    <FloatingDiv image={Thumbup}/>
                </div>
                <div className="blur" style={{background: 'rgb(238 210 255)'}}>

                </div>
                <div className="blur" style={{
                    background: '#C1F5FF',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                }} >

                </div>
            </div>
        </div>
    );
};

export default Intro;