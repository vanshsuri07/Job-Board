import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function JobApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    coverLetter: "",
    resumeFile: null,
    resumeFileName: "",
    agreementChecked: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!validTypes.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        resumeFile: "Please upload a PDF or Word document",
      }));
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        resumeFile: "File size should be less than 5MB",
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      resumeFile: file,
      resumeFileName: file.name,
    }));

    setErrors((prev) => ({
      ...prev,
      resumeFile: null,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s\-()]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.resumeFile) {
      newErrors.resumeFile = "Resume is required";
    }

    if (!formData.agreementChecked) {
      newErrors.agreementChecked = "You must agree to the terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1500);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white py-3">
              <h2 className="h4 mb-0">
                Application for Frontend Developer Position
              </h2>
              <p className="mb-0">
                <small>at TechSolutions Inc.</small>
              </p>
            </div>

            <div className="card-body p-4">
              {submitSuccess ? (
                <div className="text-center py-5">
                  <div className="mb-4">
                    <div className="d-inline-block p-3 bg-success bg-opacity-10 rounded-circle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        fill="currentColor"
                        className="bi bi-check-circle text-success"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                      </svg>
                    </div>
                  </div>
                  <h3>Application Submitted Successfully!</h3>
                  <p className="text-muted mb-4">
                    Thank you for your application. We will review it and get
                    back to you soon.
                  </p>
                  <div className="d-flex flex-column align-items-center gap-3 my-3">
  <button
    className="btn btn-outline-primary"
    style={{ width: "100%", maxWidth: "300px" }}
    onClick={() => setSubmitSuccess(false)}
  >
    Submit Another Application
  </button>
  
  <Link
    to="/dashboard"
    className="btn btn-success"
    style={{ width: "100%", maxWidth: "200px" }}
  >
    Go Back
  </Link>
</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <h5>Personal Information</h5>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="firstName" className="form-label">
                          First Name *
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            errors.firstName ? "is-invalid" : ""
                          }`}
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Enter your first name"
                        />
                        {errors.firstName && (
                          <div className="invalid-feedback">
                            {errors.firstName}
                          </div>
                        )}
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="lastName" className="form-label">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            errors.lastName ? "is-invalid" : ""
                          }`}
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Enter your last name"
                        />
                        {errors.lastName && (
                          <div className="invalid-feedback">
                            {errors.lastName}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">
                          Email *
                        </label>
                        <input
                          type="email"
                          className={`form-control ${
                            errors.email ? "is-invalid" : ""
                          }`}
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                        />
                        {errors.email && (
                          <div className="invalid-feedback">{errors.email}</div>
                        )}
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="phone" className="form-label">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          className={`form-control ${
                            errors.phone ? "is-invalid" : ""
                          }`}
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                        />
                        {errors.phone && (
                          <div className="invalid-feedback">{errors.phone}</div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5>Professional Links</h5>
                    <div className="mb-3">
                      <label htmlFor="linkedin" className="form-label">
                        LinkedIn Profile
                      </label>
                      <input
                        type="url"
                        className="form-control"
                        id="linkedin"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleChange}
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="portfolio" className="form-label">
                        Portfolio or GitHub
                      </label>
                      <input
                        type="url"
                        className="form-control"
                        id="portfolio"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleChange}
                        placeholder="https://github.com/yourusername"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5>Application Details</h5>
                    <div className="mb-3">
                      <label htmlFor="resumeFile" className="form-label">
                        Resume (PDF or Word) *
                      </label>
                      <input
                        type="file"
                        className={`form-control ${
                          errors.resumeFile ? "is-invalid" : ""
                        }`}
                        id="resumeFile"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      />
                      {formData.resumeFileName && (
                        <div className="form-text">
                          Selected file: {formData.resumeFileName}
                        </div>
                      )}
                      {errors.resumeFile && (
                        <div className="invalid-feedback">
                          {errors.resumeFile}
                        </div>
                      )}
                      <div className="form-text">Max file size: 5MB</div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="coverLetter" className="form-label">
                        Cover Letter
                      </label>
                      <textarea
                        className="form-control"
                        id="coverLetter"
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Tell us why you're a great fit for this position..."
                      ></textarea>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className={`form-check-input ${
                          errors.agreementChecked ? "is-invalid" : ""
                        }`}
                        id="agreementChecked"
                        name="agreementChecked"
                        checked={formData.agreementChecked}
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="agreementChecked"
                      >
                        I confirm that all information provided is accurate and
                        complete. I understand that false information may be
                        grounds for disqualification. *
                      </label>
                      {errors.agreementChecked && (
                        <div className="invalid-feedback">
                          {errors.agreementChecked}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-primary py-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="card-footer bg-light py-3">
              <div className="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-shield-lock text-muted me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                  <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z" />
                </svg>
                <small className="text-muted">
                  Your personal information is secured and will only be used for
                  this job application.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
