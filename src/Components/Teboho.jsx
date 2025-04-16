// Teboho.jsx
import React from "react";
import "./Teboho.css";
import Tebu from './teboho.png';
import Profile from './YOUR SAFETY IS OUR PRIORITY (KATLEHO M PROFILE).pdf';

function Teboho({ onClose }) {
    return (
        <div className="teboho-overlay">
            <div className="teboho-message-box">
                <div className="balloons">
                    <div className="balloon balloon1"></div>
                    <div className="balloon balloon2"></div>
                    <div className="balloon balloon3"></div>
                    <div className="balloon balloon4"></div>
                    <div className="balloon balloon5"></div>
                    <div className="balloon balloon6"></div>
                    <div className="balloon balloon7"></div> 
                </div>
                <button onClick={onClose} className="close-button">X</button>
                <img src={Tebu} alt="Teboho Molangeni" className="teboho-image" />
                <h1 className="fade-in-text">Teboho Molangeni</h1>
                <p className="fade-in-text">
                    Teboho Molangeni is a dedicated Safety Officer with extensive experience
                    in occupational health, safety, and environmental management. With a commitment
                    to ensuring safe work environments, Teboho has worked on various projects
                    to implement effective safety protocols and guidelines.
                </p>
                <p className="fade-in-text">
                    His leadership and expertise have contributed to maintaining high safety
                    standards and protecting the well-being of employees across numerous projects.
                </p>
                <form>
                    <a href={Profile} download className="fade-in-text">Download Profile</a>
                </form>
            </div>
        </div>
    );
}

export default Teboho;
