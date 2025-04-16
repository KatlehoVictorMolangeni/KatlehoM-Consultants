import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Contact.css";
import emailjs from "emailjs-com";

function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
        };

        emailjs
            .send(
                "service_fqakdnk", // Replace with your EmailJS Service ID
                "template_7unxapr", // Replace with your EmailJS Template ID
                templateParams,
                "qVCNo9fSd7oEDHg__" // Replace with your EmailJS User ID
            )
            .then((response) => {
                console.log("Email sent successfully!", response.status, response.text);
                alert("Thank you for reaching out! We will get back to you soon.");
                setFormData({ name: "", email: "", message: "" }); // Clear form
            })
            .catch((error) => {
                console.error("Failed to send email:", error);
                alert("There was an error. Please try again later.");
            });
    };

    return (
        <div className="contact-page" id="contact">
            <div className="contact-header">
                <h1>Contact Us</h1>
            </div>
            <div className="contact-container">
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <label>E-mail</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label>Message</label>
                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>

                        <button type="submit">Contact Us</button>
                    </form>
                </div>
                <div className="contact-info">
                    <div>
                        <h3>Contact</h3>
                        <p>T : (+27) 61 922 3940</p>
                        <p>E : katlehomsafetyconsultants@gmail.com</p>
                    </div>
                    <div>
                        <h3>Based in</h3>
                        <p>
                            468 James Ngake Street <br /> Motse-Thabong <br /> Welkom <br /> 9463
                        </p>
                    </div>
                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
