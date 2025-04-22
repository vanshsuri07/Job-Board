import React from "react";
import Header from "../components/Header/Header";
import { FaMapMarkedAlt, FaPhone, FaEnvelope } from "react-icons/fa";

import { Outlet,Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <Header />
      <div className="position-relative" style={{ height: "100vh" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="position-absolute w-100 h-100"
          style={{
            objectFit: "cover",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <source src="/assests/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="text-white d-flex flex-column justify-content-center align-items-center h-100 text-center">
          <h2>Find Your Dream Job Today</h2>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
            }}
          >
            ACCELERATE YOUR CAREER GROWTH
          </h1>
          <Link to="/register" className="btn btn-success me-2">
            Upload Resume
          </Link>
        </div>
      </div>

      <Outlet />
      <section className="contact-section">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <div className="section-underline"></div>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <FaMapMarkedAlt className="contact-icon" />
              <div>
                <h4>Headquarters</h4>
                <p>123 Innovation Drive, San Francisco, CA 94105</p>
              </div>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h4>Email</h4>
                <p>contact@jobportal.com</p>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
