import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./code.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fsqozpx",
        "template_2k3mfxb",
        form.current,
        "RFxyf0h4TjcO44U4f"
      )
      .then(() => {
        alert("Message Sent Successfully!");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message!");
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2>Contact Me</h2>

        <p className="contact-subtitle">
          Let's connect! Feel free to reach out for internships,
          projects or collaboration.
        </p>

        <div className="contact-container">

          <div className="contact-info">

            <div className="info-box">
              <i className="bx bx-user"></i>
              <div>
                <h3>Name</h3>
                <p>Mohanasundaram V</p>
              </div>
            </div>

            <div className="info-box">
              <i className="bx bx-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>sundaramm838@gmail.com</p>
              </div>
            </div>

            <div className="info-box">
              <i className="bx bx-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>+91 8778704084</p>
              </div>
            </div>

            <div className="info-box">
              <i className="bx bx-map"></i>
              <div>
                <h3>Location</h3>
                <p>Tamil Nadu, India</p>
              </div>
            </div>

            <div className="info-box">
              <i className="bx bx-briefcase"></i>
              <div>
                <h3>Status</h3>
                <p>Available for Internship</p>
              </div>
            </div>

          </div>

          <form ref={form} onSubmit={sendEmail}>

            <input
              type="text"
              name="from_name"
              placeholder="Enter Your Name"
              required
            />

            <input
              type="email"
              name="from_email"
              placeholder="Enter Your Email"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Enter Subject"
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Enter Your Message"
              required
            ></textarea>

            <button type="submit" className="btn">
              <i className="bx bx-send"></i> Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;