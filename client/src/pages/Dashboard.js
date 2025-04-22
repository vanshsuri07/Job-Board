import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
const applications = [
  {
    id: 1,
    jobTitle: "Frontend Developer",
    company: "Tech Solutions",
    appliedDate: "Apr 10, 2025",
    status: "Under Review",
  },
  {
    id: 2,
    jobTitle: "Backend Developer",
    company: "Data Systems",
    appliedDate: "Apr 5, 2025",
    status: "Interview Scheduled",
  },
];

export default function Dashboard() {
  const [userType, setUserType] = useState("employer");

  return (
    <Layout>
      <div className="container py-4">
        <div className="mb-4 text-center">
          <div className="btn-group">
            <button
              className={`btn ${
                userType === "employer" ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setUserType("employer")}
            >
              Employer View
            </button>
            <button
              className={`btn ${
                userType === "candidate" ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setUserType("candidate")}
            >
              Candidate View
            </button>
          </div>
        </div>

        {userType === "employer" ? (
          <EmployerDashboard />
        ) : (
          <CandidateDashboard />
        )}
      </div>{" "}
    </Layout>
  );
}

function EmployerDashboard() {
  const [activeTab, setActiveTab] = useState("jobs");
  const [jobListings, setJobListings] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentJob, setCurrentJob] = useState({
    title: "",
    location: "",
    status: "Active",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setCurrentJob({ ...currentJob, [e.target.name]: e.target.value });
  };

  const handlePostJob = () => {
    if (isEditing) {
      const updatedJobs = [...jobListings];
      updatedJobs[editIndex] = currentJob;
      setJobListings(updatedJobs);
      setIsEditing(false);
    } else {
      setJobListings([...jobListings, { ...currentJob, id: Date.now() }]);
    }

    setCurrentJob({ title: "", location: "", status: "Active" });
    setShowModal(false);
  };

  const handleEdit = (index) => {
    setCurrentJob(jobListings[index]);
    setEditIndex(index);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setJobListings(jobListings.filter((job) => job.id !== id));
  };
  return (
    <div>
      <header className="mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="h3">Employer Dashboard</h1>
          <div>
            <button className="btn btn-outline-secondary me-2">
              <i className="bi bi-bell"></i>
            </button>
            <button className="btn btn-outline-secondary">
              <i className="bi bi-person-circle"></i>
            </button>
          </div>
        </div>
      </header>

      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card text-center mb-3">
            <div className="card-body">
              <h5 className="card-title">{jobListings.length}</h5>
              <p className="card-text">Active Job Listings</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center mb-3">
            <div className="card-body">
              <h5 className="card-title">12</h5>
              <p className="card-text">New Applications</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center mb-3">
            <div className="card-body">
              <h5 className="card-title">5</h5>
              <p className="card-text">Interviews Scheduled</p>
            </div>
          </div>
        </div>
      </div>

      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "jobs" ? "active" : ""}`}
            onClick={() => setActiveTab("jobs")}
          >
            Job Listings
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "account" ? "active" : ""}`}
            onClick={() => setActiveTab("account")}
          >
            Account Settings
          </button>
        </li>
      </ul>

      {activeTab === "jobs" ? (
        <div className="container mt-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2>Job Listings</h2>
            <button
              className="btn btn-primary"
              onClick={() => setShowModal(true)}
            >
              <i className="bi bi-plus"></i> Post New Job
            </button>
          </div>

          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobListings.map((job, index) => (
                  <tr key={job.id}>
                    <td>{job.title}</td>
                    <td>{job.location}</td>
                    <td>
                      <span
                        className={`badge ${
                          job.status === "Active"
                            ? "bg-success"
                            : "bg-secondary"
                        }`}
                      >
                        {job.status}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-primary me-1"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(job.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {showModal && (
            <div className="modal fade show d-block" tabIndex="-1">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">
                      {isEditing ? "Edit Job" : "Post New Job"}
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => {
                        setShowModal(false);
                        setIsEditing(false);
                        setCurrentJob({
                          title: "",
                          location: "",
                          status: "Active",
                        });
                      }}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label className="form-label">Job Title</label>
                      <input
                        type="text"
                        name="title"
                        className="form-control"
                        value={currentJob.title}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Location</label>
                      <input
                        type="text"
                        name="location"
                        className="form-control"
                        value={currentJob.location}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Status</label>
                      <select
                        className="form-select"
                        name="status"
                        value={currentJob.status}
                        onChange={handleInputChange}
                      >
                        <option value="Active">Active</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => {
                        setShowModal(false);
                        setIsEditing(false);
                        setCurrentJob({
                          title: "",
                          location: "",
                          status: "Active",
                        });
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handlePostJob}
                    >
                      {isEditing ? "Update Job" : "Post Job"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="card">
          <div className="card-body">
            <h3 className="h5 mb-4">Company Profile</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="companyName" className="form-label">
                  Company Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="companyName"
                  defaultValue="Tech Solutions Inc."
                />
              </div>
              <div className="mb-3">
                <label htmlFor="industry" className="form-label">
                  Industry
                </label>
                <select className="form-select" id="industry">
                  <option>Technology</option>
                  <option>Finance</option>
                  <option>Healthcare</option>
                  <option>Education</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="companyDescription" className="form-label">
                  Company Description
                </label>
                <textarea
                  className="form-control"
                  id="companyDescription"
                  rows="3"
                  defaultValue="Tech Solutions Inc. is a leading provider of innovative software solutions."
                ></textarea>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function CandidateDashboard() {
  const [activeTab, setActiveTab] = useState("applications");

  return (
    <div>
      <header className="mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="h3">Candidate Dashboard</h1>
          <div>
            <button className="btn btn-outline-secondary me-2">
              <i className="bi bi-bell"></i>
            </button>
            <button className="btn btn-outline-secondary">
              <i className="bi bi-person-circle"></i>
            </button>
          </div>
        </div>
      </header>

      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card text-center mb-3">
            <div className="card-body">
              <h5 className="card-title">5</h5>
              <p className="card-text">Active Applications</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center mb-3">
            <div className="card-body">
              <h5 className="card-title">2</h5>
              <p className="card-text">Interviews</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center mb-3">
            <div className="card-body">
              <h5 className="card-title">8</h5>
              <p className="card-text">Saved Jobs</p>
            </div>
          </div>
        </div>
      </div>

      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${
              activeTab === "applications" ? "active" : ""
            }`}
            onClick={() => setActiveTab("applications")}
          >
            My Applications
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "profile" ? "active" : ""}`}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </button>
        </li>
      </ul>

      {activeTab === "applications" ? (
        <div>
          <div className="d-flex justify-content-between mb-3">
            <h2 className="h4">Your Applications</h2>
            <Link to="/latestjobs" className="btn btn-primary">
              <i className="bi bi-search"></i> Find Jobs
            </Link>
          </div>

          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Company</th>
                  <th>Applied Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id}>
                    <td>{app.jobTitle}</td>
                    <td>{app.company}</td>
                    <td>{app.appliedDate}</td>
                    <td>
                      <span
                        className={`badge ${
                          app.status === "Interview Scheduled"
                            ? "bg-success"
                            : "bg-info"
                        }`}
                      >
                        {app.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="card-body">
            <h3 className="h5 mb-4">Personal Information</h3>
            <form>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    defaultValue="John"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    defaultValue="Doe"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  defaultValue="john.doe@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  defaultValue="(555) 123-4567"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="resume" className="form-label">
                  Resume
                </label>
                <input type="file" className="form-control" id="resume" />
                <div className="form-text">
                  Current file: JohnDoe_Resume.pdf
                </div>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
