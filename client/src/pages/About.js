import React from "react";
import {
  FaUsers,
  FaLaptopCode,
  FaBullseye,
  FaChartLine,
  FaHandshake,
  FaBriefcase,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaArrowRight,
} from "react-icons/fa";
import "../styles/AboutPage.css";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const portalStats = [
    { id: 1, number: "500K+", label: "Registered Users", icon: <FaUsers /> },
    {
      id: 2,
      number: "10K+",
      label: "Partnered Companies",
      icon: <FaHandshake />,
    },
    {
      id: 3,
      number: "250K+",
      label: "Jobs Posted Monthly",
      icon: <FaBriefcase />,
    },
    {
      id: 4,
      number: "85%",
      label: "Successful Placements",
      icon: <FaChartLine />,
    },
  ];

  const coreFeatures = [
    {
      id: 1,
      title: "AI-Powered Job Matching",
      description:
        "Our advanced algorithms analyze your skills, experience, and preferences to recommend jobs that are truly relevant to your career goals.",
      icon: <FaLaptopCode />,
    },
    {
      id: 2,
      title: "Career Development Tools",
      description:
        "Access resume builders, interview preparation resources, skill assessments, and personalized career path recommendations.",
      icon: <FaChartLine />,
    },
    {
      id: 3,
      title: "Employer Verification",
      description:
        "All companies on our platform are thoroughly verified to ensure legitimacy and maintain the highest quality job listings for our users.",
      icon: <FaHandshake />,
    },
    {
      id: 4,
      title: "Personalized Job Alerts",
      description:
        "Receive timely notifications about new opportunities that match your profile, ensuring you never miss out on your dream job.",
      icon: <FaBullseye />,
    },
  ];

  const historyTimeline = [
    {
      year: "2020",
      title: "Founded",
      description:
        "JobPortal was launched with a mission to revolutionize the job search experience using modern technology.",
    },
    {
      year: "2021",
      title: "Rapid Growth",
      description:
        "Reached 100,000 users and integrated advanced AI matching algorithms to improve job recommendations.",
    },
    {
      year: "2022",
      title: "Expansion",
      description:
        "Expanded into international markets and introduced comprehensive career development resources.",
    },
    {
      year: "2023",
      title: "Mobile App Launch",
      description:
        "Released our mobile application to make job searching accessible anywhere, anytime.",
    },
    {
      year: "2024",
      title: "Enterprise Solutions",
      description:
        "Introduced enterprise-level hiring solutions for large corporations and improved our AI capabilities.",
    },
    {
      year: "2025",
      title: "Today",
      description:
        "Helping millions of professionals find meaningful careers and supporting thousands of businesses in building their teams.",
    },
  ];

  return (
    <div className="about-container">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About JobBoard</h1>
          <p className="hero-subtitle">
            Connecting talent with opportunity in the digital age
          </p>
          <p className="hero-description">
            JobBoard is a leading career platform dedicated to transforming how
            people discover and land their dream jobs. Using cutting-edge
            technology and a human-centered approach, we're building a future
            where everyone can find meaningful work that aligns with their
            skills, passions, and life goals.
          </p>
          <Link to="/register" className="cta-button w-50">
            Join Our Community <FaArrowRight />
          </Link>
        </div>
        <div className="hero-image-container">
          <img
            src="/assests/images/homepage.png"
            alt="JobPortal platform"
            className="hero-image"
          />
        </div>
      </section>

      <section className="mission-section">
        <div className="section-header">
          <h2>Our Mission</h2>
          <div className="section-underline"></div>
        </div>
        <div className="mission-content">
          <div className="mission-text">
            <p>
              At JobBoard, we believe everyone deserves access to opportunities
              that help them grow professionally and personally. Our mission is
              to empower job seekers with the tools and resources they need to
              navigate their career journeys with confidence, while helping
              employers build diverse, talented teams that drive innovation and
              success.
            </p>
            <p>
              We're committed to creating a transparent, inclusive platform that
              breaks down traditional barriers in the job market and opens doors
              for professionals of all backgrounds and experience levels.
            </p>
          </div>
          <div className="mission-values">
            <div className="value-card">
              <h3>Innovation</h3>
              <p>
                Constantly evolving our platform with cutting-edge technology to
                improve user experience
              </p>
            </div>
            <div className="value-card">
              <h3>Inclusion</h3>
              <p>
                Creating equal opportunities for all job seekers regardless of
                background
              </p>
            </div>
            <div className="value-card">
              <h3>Integrity</h3>
              <p>
                Maintaining transparency and honesty in all our operations and
                interactions
              </p>
            </div>
            <div className="value-card">
              <h3>Impact</h3>
              <p>
                Measuring our success by the positive difference we make in
                people's careers
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="section-header">
          <h2>JobBoard Impact</h2>
          <div className="section-underline"></div>
        </div>
        <div className="stats-container">
          {portalStats.map((stat) => (
            <div className="stat-card" key={stat.id}>
              <div className="stat-icon">{stat.icon}</div>
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="features-section">
        <div className="section-header">
          <h2>Our Platform Features</h2>
          <div className="section-underline"></div>
        </div>
        <div className="features-container">
          {coreFeatures.map((feature) => (
            <div className="feature-card" key={feature.id}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="history-section">
        <div className="section-header">
          <h2>Our Journey</h2>
          <div className="section-underline"></div>
        </div>
        <div className="timeline-container">
          {historyTimeline.map((event, index) => (
            <div
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              key={index}
            >
              <div className="timeline-content">
                <div className="timeline-year">{event.year}</div>
                <h3 className="timeline-title">{event.title}</h3>
                <p className="timeline-description">{event.description}</p>
              </div>
            </div>
          ))}
          <div className="timeline-line"></div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="section-header">
          <h2>Success Stories</h2>
          <div className="section-underline"></div>
        </div>
        <div className="testimonial-highlight">
          <div className="testimonial-quote">
            "JobBoard completely transformed my job search. The personalized
            recommendations led me to opportunities I wouldn't have found
            otherwise, and their resume tools helped me stand out to employers.
            I landed my dream job within weeks!"
          </div>
          <div className="testimonial-author">
            <div className="testimonial-info">
              <h4>Vansh S.</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <div className="section-underline"></div>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
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
    </div>
  );
};

export default AboutPage;
