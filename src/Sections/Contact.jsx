import React, { useState } from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const validate = () => {
        let newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter valid email";
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        return newErrors;
    };
    useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true
  });
}, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setSuccess(true);
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
        }
    };

    return (
        <section className="contact-section">
            <div className="section-header">
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor sit amet</p>
            </div>

            <div className="container contact-container">
                {/* LEFT SIDE */}
                <div className="contact-info" data-aos="fade-right">
                    <div className="info-box">
                        <h6>Address:</h6>
                        <p>11 surat</p>
                        <p>PBo 12345, Gujart</p>
                    </div>

                    <div className="info-box">
                        <h6>Phone:</h6>
                        <p>+91 1234 56 789</p>
                        <p>+91 1234 56 780</p>
                    </div>

                    <div className="info-box">
                        <h6>Email:</h6>
                        <p>info@example.com</p>
                        <p>email@example.com</p>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="contact-form" data-aos="fade-left">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name*"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <span className="error">{errors.name}</span>}
                            </div>

                            <div className="col">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email*"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <span className="error">{errors.email}</span>}
                            </div>
                        </div>

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject*"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                        {errors.subject && <span className="error">{errors.subject}</span>}

                        <textarea
                            name="message"
                            rows="6"
                            placeholder="Write Your Message*"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        {errors.message && <span className="error">{errors.message}</span>}

                        <button type="submit">Send Message</button>

                        {success && (
                            <div className="success">
                                Thank You! Your message has been sent.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;