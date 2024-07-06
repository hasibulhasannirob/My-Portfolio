import React from "react";
import './Floating.css';

const FloatingDiv = ({image}) => {
    return (

    <div className="floatingdiv">
        <img src={image}/>
    </div>
    )
}

export default FloatingDiv