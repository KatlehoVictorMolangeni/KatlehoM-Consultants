import React, { useState } from 'react';
import logo from './logo.png';
import { Link as ScrollLink } from "react-scroll";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import './Footer.css';
import emailjs from 'emailjs-com';
import Teboho from "./Teboho";
import Vacancy from './Vacancy';

function Footer() {
    //Vacancy Props
    const [showVacancy, setShowVacancy] = useState(false);

    const handleVacancyClick = () => {
        setShowVacancy(true);
    };

    const handleCloseVacancy = () => {
        setShowVacancy(false);
    };

    //Profile Props
    const [showTeboho, setShowTeboho] = useState(false);

    const handleTebohoClick = (e) => {
        e.preventDefault();
        setShowTeboho(true); // Open the Teboho message box
    };

    const closeTeboho = () => {
        setShowTeboho(false); // Close the Teboho message box
    };

    const [showMessage, setShowMessage] = useState(false);
    const handleProjectsClick = (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        setShowMessage(true); // Show the message when the button is clicked
    };

    const handleCloseMessage = () => {
        setShowMessage(false); // Close the message when close button is clicked
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
    const [email, setEmail] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        // Parameters to pass to the email template
        const templateParams = {
            user_email: email,  // Set the recipient email from user input
        };

        // Send email via EmailJS
        emailjs.send(
            'service_fqakdnk',       // Your EmailJS Service ID
            'template_fekg9yb',      // Your EmailJS Template ID
            templateParams,          // Pass template parameters
            'qVCNo9fSd7oEDHg__'      // Your EmailJS User ID
        )
        .then((response) => {
            console.log('Email sent successfully!', response.status, response.text);
            alert('Thank you! A confirmation email has been sent to your inbox.');
            setEmail(''); // Clear the input field after sending
        })
        .catch((error) => {
            console.error('Failed to send email:', error);
            alert('There was an error. Please try again later.');
        });
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <img src={logo} alt="logo" width={250} />
                    <p style={{fontFamily:'Dancing Script, cursive', fontSize:'1.1em'}}>We Put You 1st. Your Safety Is Our Priority.</p>
                </div>

                <div className="footer-section">
                    <h2>Office</h2>
                    <p>468 James Ngake Street <br /> Motse-Thabong <br /> Welkom <br /> 9463</p>
                    <p>Phone : (+27) 61 922 3940</p>
                    <a href='mailto:katlehomsafetyconsultants@gmail.com' style={{color:'white'}}>Email : katlehomsafetyconsultants@gmail.com</a>
                </div>

                <div className="footer-section">
                    <h2>Links</h2>
                    <ul>
                        <li><ScrollLink to="home" smooth={true} duration={500} style={{ cursor: 'pointer' }}>Home</ScrollLink></li>
                        <li><ScrollLink to="about" smooth={true} duration={500} style={{ cursor: 'pointer' }}>About Us</ScrollLink></li>
                        <li><ScrollLink to="contact" smooth={true} duration={500} style={{ cursor: 'pointer' }}>Contact</ScrollLink></li>
                        <li><ScrollLink to="services" smooth={true} duration={500} style={{ cursor: 'pointer' }}>Services</ScrollLink></li>
                        <li onClick={handleProjectsClick}style={{ cursor: 'pointer' }}>Projects</li>
                        <li style={{ cursor: 'pointer' }} onClick={handleVacancyClick}>Vacancies</li>
                        <a  onClick={handleTebohoClick} style={{ cursor: 'pointer', color:'white' }}>About Owner - Teboho Molangeni</a>
                            {showTeboho && <Teboho onClose={closeTeboho} />}
                    </ul>
                    {showMessage && <Projects />}
                    {showVacancy && <Vacancy onClose={handleCloseVacancy} />}
                </div>

                <div className="footer-section">
                    <h2>More Information?</h2>
                    <form onSubmit={sendEmail}>
                        <input
                            type="email"
                            placeholder="Enter Your Email, To Receive More Info."
                            className="moreinfo-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="moreinfo-button">&rarr;</button>
                    </form>
                    <div className="socials">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="https://wa.me/27833527886" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>

                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Copyright Reserved KatlehoM Safety Consultants.</p>
            </div>
        </footer>
    );
}

export default Footer;
