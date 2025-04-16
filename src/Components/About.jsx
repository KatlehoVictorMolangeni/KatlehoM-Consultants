import React, { useState, useEffect } from "react";
//import image1 from './about.png';
//import image2 from './about2.jpg';
import image3 from './about3.jpg';
import './About.css';

function About() {
    const images = [image3, image3, image3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Image slideshow effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="about-us" id="about">
            <img src={images[currentImageIndex]} alt="About Us" className="animated-image" />
            <div className="about-text">
                <h1 className="animated-text">About Us</h1>
                <h2 className="animated-text">KatlehoM Safety Consultants</h2>
                <p className="animated-text">Specializes In Occupational Health, Safety And Environmental (HSE) Management Solutions Including Development And Implementation Of HSE Policies And Procedures.</p>
                <p>_____________________________________________________</p>
                <p className="animated-text">The Company Prides Itself With A Wealth Of Industry Knowledge And Experience: Reliability On Service Delivery And A One Stop Service On HSE Management.</p>
                <p>_____________________________________________________</p>
                <p className="animated-text">We Commit To Enable Business Operations To Detect, Control And Monitor Potential Risks In The Workplace. Adopting A Multifaceted Approach In HSE Practices, KatlehoM Invests In Elevating And Integrating HSE Strategies Solutions For Betterment Of Organizations.</p>
                <p>_____________________________________________________</p>
                <p className="animated-text">In Providing The HSE Services To Your Company, KatlehoM Will Facilitate And Support The Identification And Maintenance Of The Legal Requirements. A Unique And Professional Approach Is Adopted To Ensure Business Realises Product Delivery With Robust Processes That Promote Integration Of HSE Management Objectives.</p>
            </div>
        </div>
    );
}

export default About;
