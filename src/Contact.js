import React from "react";
import "./code.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2>Contact Me</h2>

        <form>
          <input
            type="text"
            placeholder="Enter Your Name"
            required
          />

          <input
            type="email"
            placeholder="Enter Your Email"
            required
          />

          <input
            type="text"
            placeholder="Enter Subject"
            required
          />

          <textarea
            rows="6"
            placeholder="Enter Your Message"
          ></textarea>

          <button type="submit" className="btn">
            Send Message
          </button>
        </form>

        <div className="contact-details">
          <p><strong>Name:</strong> Mohanasundaram V</p>
          <p><strong>Email:</strong> sundaramm838@gmail.com</p>
          <p><strong>Phone:</strong> +91 8778704084</p>
          <p><strong>Location:</strong> Tamil Nadu, India</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;