import React, { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import MessageIcon from '@mui/icons-material/Message';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import "./contact.css";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};
        if (name.trim() === "") {
            validationErrors.name = "Name is required";
        }
        if (email.trim() === "") {
            validationErrors.email = "Email is required";
        }
        if (phoneNumber.trim() === "") {
            validationErrors.phoneNumber = "Phone no. is required";
        }
        if (message.trim() === "") {
            validationErrors.message = "Message is required";
        }
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log("Form submitted successfully!");
        }

    };

    return (
        <>
        <Box className="contactBox">
            <h2 className="contactHeading">Contact <span className="highlight">Me</span></h2>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} className="inputGrid">
                        <PersonIcon className="icon" />
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </Grid>
                    <Grid item xs={12} className="inputGrid">
                        <EmailIcon className="icon" />
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </Grid>
                    <Grid item xs={12} className="inputGrid">
                        <PhoneIcon className="icon" />
                        <input
                            type="text"
                            placeholder="Phone No."
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        {errors.phoneNumber && (
                            <span className="error">{errors.phoneNumber}</span>
                        )}
                    </Grid>
                    <Grid item xs={12} className="inputGrid">
                        <MessageIcon className="icon" />
                        <input
                            type="text"
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        {errors.message && <span className="error">{errors.message}</span>}
                    </Grid>
                    <Grid item xs={12}>
                        <button type="submit">Submit</button>
                    </Grid>
                </Grid>
            </form>
        </Box>

        
  <div className="location-container">
  <h1>Location</h1>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.2023452304543!2d18.375280475668173!3d43.85163453957488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c9137d4f8671%3A0xceaac18b4c885c60!2sMalta%201%2C%20Sarajevo%2071000!5e0!3m2!1sen!2sba!4v1717157173297!5m2!1sen!2sba"
    width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
    className="location"></iframe>
</div>
</>
    );
}

export default Contact;
