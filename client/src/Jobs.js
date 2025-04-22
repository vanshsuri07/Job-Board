import { useState } from "react";
import {
  Search,
  Briefcase,
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp,
  Filter,
} from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function JobListingsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedJob, setExpandedJob] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    location: "all",
    jobType: "all",
    experience: "all",
  });

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp",
      location: "San Francisco, CA",
      salary: "$90,000 - $120,000",
      jobType: "Full-time",
      experienceLevel: "Mid-level",
      postedDate: "3 days ago",
      description:
        "We are looking for a skilled Frontend Developer to join our team. The ideal candidate will have experience with React, TypeScript, and modern CSS frameworks.",
      requirements: [
        "At least 3 years of experience with React",
        "Strong understanding of JavaScript and TypeScript",
        "Experience with responsive design and CSS frameworks",
        "Knowledge of state management solutions like Redux or Context API",
      ],
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "DataSystems Inc.",
      location: "Remote",
      salary: "$110,000 - $140,000",
      jobType: "Full-time",
      experienceLevel: "Senior",
      postedDate: "1 week ago",
      description:
        "Join our backend team to build robust and scalable APIs for our growing platform. You will work on challenging problems and help shape our technical architecture.",
      requirements: [
        "At least 5 years of backend development experience",
        "Proficiency in Node.js, Python, or Java",
        "Experience with SQL and NoSQL databases",
        "Knowledge of microservices architecture",
      ],
    },
    {
      id: 3,
      title: "UX Designer",
      company: "CreativeMinds",
      location: "New York, NY",
      salary: "$85,000 - $105,000",
      jobType: "Contract",
      experienceLevel: "Entry-level",
      postedDate: "2 days ago",
      description:
        "We are seeking a talented UX Designer to create innovative and intuitive user experiences for our digital products. You will collaborate with product managers and developers.",
      requirements: [
        "Portfolio demonstrating UX design skills",
        "Experience with design tools like Figma or Sketch",
        "Understanding of user research and testing methodologies",
        "Ability to create wireframes, prototypes, and user flows",
      ],
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "AnalyticsPro",
      location: "Boston, MA",
      salary: "$120,000 - $150,000",
      jobType: "Full-time",
      experienceLevel: "Senior",
      postedDate: "5 days ago",
      description:
        "Join our data science team to develop machine learning models and extract insights from large datasets. You will work on cutting-edge projects in various domains.",
      requirements: [
        "Advanced degree in Data Science, Statistics, or related field",
        "Strong programming skills in Python or R",
        "Experience with machine learning frameworks",
        "Knowledge of data visualization techniques",
      ],
    },
    {
      id: 5,
      title: "DevOps Engineer",
      company: "CloudTech Solutions",
      location: "Remote",
      salary: "$100,000 - $130,000",
      jobType: "Part-time",
      experienceLevel: "Mid-level",
      postedDate: "1 day ago",
      description:
        "We are looking for a DevOps Engineer to improve our CI/CD pipelines and infrastructure automation. You will work closely with development teams to optimize deployment processes.",
      requirements: [
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Knowledge of Docker, Kubernetes, and containerization",
        "Proficiency in infrastructure as code tools",
        "Understanding of CI/CD principles and tools",
      ],
    },
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLocation =
      filters.location === "all" ||
      job.location.includes(
        filters.location === "Remote" ? "Remote" : filters.location
      );

    const matchesJobType =
      filters.jobType === "all" || job.jobType === filters.jobType;

    const matchesExperience =
      filters.experience === "all" ||
      job.experienceLevel === filters.experience;

    return (
      matchesSearch && matchesLocation && matchesJobType && matchesExperience
    );
  });

  const toggleJobExpansion = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters({
      ...filters,
      [filterType]: value,
    });
  };

  return (
    <div className="container py-5 bg-light">
      <h1 className="text-center mb-4 text-primary fw-bold">Job Openings</h1>

      <div className="mb-4">
        <div className="row g-3">
          <div className="col-md-10">
            <div className="input-group">
              <span className="input-group-text">
                <Search size={18} />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search jobs or companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-2">
            <button
              className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <Filter size={18} className="me-2" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Filter Options */}
        {filterOpen && (
          <div className="mt-3 p-3 bg-white border rounded shadow-sm">
            <div className="row g-3">
              <div className="col-md-4">
                <label className="form-label">Location</label>
                <select
                  className="form-select"
                  value={filters.location}
                  onChange={(e) =>
                    handleFilterChange("location", e.target.value)
                  }
                >
                  <option value="all">All Locations</option>
                  <option value="Remote">Remote</option>
                  <option value="San Francisco">San Francisco</option>
                  <option value="New York">New York</option>
                  <option value="Boston">Boston</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Job Type</label>
                <select
                  className="form-select"
                  value={filters.jobType}
                  onChange={(e) =>
                    handleFilterChange("jobType", e.target.value)
                  }
                >
                  <option value="all">All Types</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Experience Level</label>
                <select
                  className="form-select"
                  value={filters.experience}
                  onChange={(e) =>
                    handleFilterChange("experience", e.target.value)
                  }
                >
                  <option value="all">All Levels</option>
                  <option value="Entry-level">Entry-level</option>
                  <option value="Mid-level">Mid-level</option>
                  <option value="Senior">Senior</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Job Listings */}
      <div className="mt-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className="card mb-3">
              <div
                className="card-body cursor-pointer"
                style={{ cursor: "pointer" }}
                onClick={() => toggleJobExpansion(job.id)}
              >
                <div className="row">
                  <div className="col-md-9">
                    <h2 className="card-title text-primary">{job.title}</h2>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {job.company}
                    </h6>
                    <div className="mt-2">
                      <div className="d-flex align-items-center text-muted mb-1">
                        <MapPin size={16} className="me-2" />
                        <span>{job.location}</span>
                      </div>
                      <div className="d-flex align-items-center text-muted mb-1">
                        <Briefcase size={16} className="me-2" />
                        <span>
                          {job.jobType} • {job.experienceLevel}
                        </span>
                      </div>
                      <div className="d-flex align-items-center text-muted">
                        <Clock size={16} className="me-2" />
                        <span>Posted {job.postedDate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 text-end">
                    <div className="fs-5 fw-bold">{job.salary}</div>
                    {expandedJob === job.id ? (
                      <ChevronUp size={20} className="text-muted mt-2" />
                    ) : (
                      <ChevronDown size={20} className="text-muted mt-2" />
                    )}
                  </div>
                </div>
              </div>

              {expandedJob === job.id && (
                <div className="card-footer bg-white">
                  <h5 className="fw-bold mb-2">Job Description</h5>
                  <p className="mb-3">{job.description}</p>

                  <h5 className="fw-bold mb-2">Requirements</h5>
                  <ul className="mb-3">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="mb-1">
                        {req}
                      </li>
                    ))}
                  </ul>

                  <Link to="/upload" className="btn btn-primary">
                    Apply Now
                  </Link>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="card text-center py-4">
            <p className="card-text text-muted fs-5">
              No jobs match your search criteria
            </p>
          </div>
        )}
      </div>

      {filteredJobs.length > 0 && (
        <div className="mt-4 text-center text-muted">
          Showing {filteredJobs.length} out of {jobs.length} jobs
        </div>
      )}
    </div>
  );
}
