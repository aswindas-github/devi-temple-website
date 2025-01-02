import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      
      <div className="temple-details">
        <h3>Kunnath Sree Bhagavathy Kshethram</h3>
        <p>Mankavu, Kacherikkunnu, Kozhikode Dist, Kerala</p>
        <p>
          <strong>Phone:</strong> 0495 233200, 900223372<br />
          <strong>Email:</strong> <a href="mailto:kunnath@gmail.com">kunnath@gmail.com</a>
        </p>
        <p>
          <strong>Location Map:</strong><br />
         {/* Embedded Google Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.7276299679165!2d75.81186167481195!3d11.235105888942943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b5e5c035387%3A0x5ee84168b69aa58!2sSree%20kunnath%20bagavathi%20temble!5e1!3m2!1sen!2sin!4v1735623521673!5m2!1sen!2sin"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Temple Location"
        ></iframe>
        </p>
      </div>

      {submitted ? (
        <div className="thank-you-message">
          <h3>Thank You!</h3>
          <p>Your message has been successfully submitted. We will get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              rows="4"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      )}
    </div>
  );
}

export default Contact;
