import React, { useState } from "react";

export default function JobBoardHeader() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const toggleLoginStatus = () => setIsLoggedIn(!isLoggedIn);
  const handleRefreshPage = () => {
    sessionStorage.setItem("scrollPosition", window.scrollY);
    window.location.reload();
  };
  React.useEffect(() => {
    const scrollPosition = sessionStorage.getItem("scrollPosition");

    if (!scrollPosition) {
      window.scrollTo(0, 0);
      console.log(sessionStorage.getItem("scrollPosition"));
    } else {
      sessionStorage.removeItem("scrollPosition");
    }
  }, []);
  const handleScrollToFooter = () => {
    const footer = document.getElementsByClassName("contact-section")[0];
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Footer element with class 'footer-class' not found");
    }
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <img
            src="/assests/images/jobboardlogo.png"
            alt="img"
            style={{ width: "30px", height: "35px", marginRight: "5px" }}
          ></img>
          <span className="fw-bold fs-4">JobBoard</span>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            style={{ marginLeft: "200px" }}
            id="navbarContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
                  onClick={handleRefreshPage}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Find Jobs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
                  onClick={handleScrollToFooter}
                >
                  Contact
                </button>
              </li>
            </ul>

            <>
              <a
                href="/login"
                className="btn btn-outline-primary me-2"
                onClick={toggleLoginStatus}
              >
                Sign In
              </a>
              <a href="/register" className="btn btn-primary">
                Register
              </a>
            </>
          </div>
        </div>
      </nav>
    </header>
  );
}
