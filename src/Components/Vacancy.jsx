// Vacancy.jsx
import React from 'react';
import './Vacancy.css';

function Vacancy({ onClose }) {
    return (
        <div className="vacancy-overlay">
            <div className="vacancy-message-box">
                <button onClick={onClose} className="close-button">X</button>
                <h2>Available Vacancies</h2>
                <div className="vacancies-list">
                    {/* Vacancy 1 */}
                    <div className="vacancy-item">
                        <h3>Position: Cleaner</h3>
                        <p><strong>Location:</strong> 468 James Ngake Street, Motse-Thabong, Welkom</p>
                        <p><strong>Requirements:</strong></p>
                        <ul>
                            <li>High school diploma or equivalent</li>
                            <li>Prior experience in a similar role</li>
                            <li>Attention to detail and thoroughness</li>
                            <li>Ability to work independently and as part of a team</li>
                            <li>Good physical stamina</li>
                        </ul>
                        <div className="vacancy-buttons">
                        <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=2K68rNx6DEa6VwKL3IDYSu4twMZWHR1IjH4aUXWPGVlUNVpHQkw4R1dCVVhHQTZRUFlJRFpaQTYyWC4u" target="_blank" rel="noopener noreferrer">
    <button className="apply-button">Apply Now</button>
</a>

                            <button className="share-button">Share Vacancy</button>
                        </div>
                    </div>

                    {/* Vacancy 2 (Example) */}
                    <div className="vacancy-item">
                        <h3>Position: Safety Supervisor</h3>
                        <p><strong>Location:</strong> Main Office, Johannesburg</p>
                        <p><strong>Requirements:</strong></p>
                        <ul>
                            <li>Certified Safety Professional (CSP)</li>
                            <li>3+ years of experience in safety supervision</li>
                            <li>Knowledge of safety regulations and protocols</li>
                            <li>Excellent communication skills</li>
                            <li>Ability to handle emergency situations</li>
                        </ul>
                        <div className="vacancy-buttons">
                            <button className="apply-button">Apply Now</button>
                            <button className="share-button">Share Vacancy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vacancy;
