import React from "react";
import './navbar.css';
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">My Portfolio</div>
                {/* <span>toggle</span> */}
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                        <Link spy={true} to={'Navbar'} smooth={true} activeClass="activeClass">
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to={'Services'} smooth={true} >
                            <li>Skills</li>
                        </Link>
                        <Link spy={true} to={'Experiences'} smooth={true} >
                            <li>Experiences</li>
                        </Link>
                        <Link spy={true} to={'Works'} smooth={true} >
                            <li>Platforms</li>
                        </Link>
                        <Link spy={true} to={'Portfolio'} smooth={true} >
                         <li>Works</li>
                        </Link>
 
                    </ul>
                </div>
                <Link spy={true} to={'Contact'} smooth={true} >
                    <button className="button n-button">
                        Contact
                    </button>  
                </Link>
                
            </div>
        </div>
    )
}

export default Navbar