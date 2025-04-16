import React, { useState } from "react";
import './Navigation.css';
import logo from './logo.png';
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
    const [showMessage, setShowMessage] = useState(false);
    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => setSidebar(!sidebar);

    const handleProjectsClick = (e) => {
        e.preventDefault();
        setShowMessage(true); 
    };

    const handleCloseMessage = () => {
        setShowMessage(false);
    };

    const Projects = () => {
        return (
            <div className="message-box-overlay">
                <div className="message-box">
                    <p>There Is Currently Nothing At The Moment.</p>
                    <button onClick={handleCloseMessage} className="close-btn">Close</button>
                </div>
            </div>
        );
    };

    return (
        <div className="navigation">
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="Company Logo" />
                </div>

                <ul className="nav-links">
                    <li><ScrollLink to="home" smooth={true} duration={500} style={{cursor:'pointer'}}>Home</ScrollLink></li>
                    <li><ScrollLink to="about" smooth={true} duration={500} style={{cursor:'pointer'}}>About Us</ScrollLink></li>
                    <li><ScrollLink to="services" smooth={true} duration={500} style={{cursor:'pointer'}}>Services</ScrollLink></li>
                    <li onClick={handleProjectsClick} style={{cursor:'pointer'}}>Projects</li>
                    <li><ScrollLink to="contact" smooth={true} duration={500} style={{cursor:'pointer'}}>Contact</ScrollLink></li>
                </ul>
                
                {/* <button className="menu-btn" onClick={toggleSidebar}>
                    ☰ Menu
                </button> */}
            </nav>

            <aside className={`sidebar ${sidebar ? "show" : ""}`}>
                <button className="close-btn" onClick={toggleSidebar}>✖</button>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about" style={{cursor:'pointer'}}>About Us</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <img src={logo} alt="Sidebar Logo" style={{ width: '150px', margin: '20px auto' }} />
            </aside>

            <div className={`overlay ${sidebar ? "active" : ""}`} onClick={toggleSidebar}></div>

            {/* Main Homepage Section */}
            <section className="homepage" id="home">
    <div>
        <h1>KatlehoM</h1>
        <h1>Safety Consultants</h1>
        <p>Your Safety Is Our Priority.</p>
        <div className="btn-group">
            <ScrollLink to="services" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
                Services
            </ScrollLink>
            <a href="#" onClick={handleProjectsClick}>Projects</a>
        </div>
        {showMessage && <Projects />}
    </div>
</section>
        </div>
    );
}

export default Navbar;
