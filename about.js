import React from "react";
import img from "../assets/aboutimg.png";

const About = () => {


    return (
        <div className="about-container">
            <img src={img} alt="About Us" style={{ width: "100%" }} />
        </div>
    )
};

export default About;