import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "./nav.jsx";
import "../../app.css";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect } from "react";
import Spinner from "./Spinner.jsx";
import { notify } from '../components/hooks/Toastconfig.js';
import { FaCloudArrowUp } from "react-icons/fa6";
import { FaChevronCircleLeft } from "react-icons/fa";


function JobDetail({ jobs }) {
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));
  if (!job) {
    return <p>Job not found.</p>;
  }
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  //>>.. form submission function from here ..<<
  const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "dce9bf63-35aa-4dfe-9e54-0a01c43123df");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        alert("Form Submitted Successfully")
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <>
      <Navbar />
      <Link to="/">
        <p style={{ marginTop: "6rem" }}>
          <FaChevronCircleLeft />
        </p>
      </Link>
      <section className="jobpage2">
        <div className="applyinpage">
          <span>
            <h1>{job.jobRole}</h1>
            <img src={job.companyLogo} alt={`${job.jobRole} logo`} />
          </span>
          <p>
            <strong>Location:</strong> {job.location}
          </p>
          <p>
            <strong>Salary:</strong> {job.salary}
          </p>
          <p>
            <strong>Job Type:</strong> {job.jobType}
          </p>
          <p>
            <strong>Category:</strong> {job.category}
          </p>
          <p>
            <strong>Upfront Salary:</strong> {job["upfront-salary"]}
          </p>
          <p>
            <strong>Salary Type:</strong> {job.salaryType}
          </p>
        </div>
        <form className="jobform" onSubmit={onSubmit}>
          <div>
            <input type="text" placeholder="firstname" />
            <input type="text" placeholder="lastname" />
          </div>

          <input type="text" placeholder="Job Role" />

          <input type="email" name="email" placeholder="you@kodijobs.com" />
          <figure className="uploads">
            <input type="file" />
            <h3>
              <FaCloudArrowUp className="icon" />
              Upload Resume
            </h3>
          </figure>
          <figure className="uploads">
            <input type="file" />
            <h3>
              <FaCloudArrowUp className="icon" />
              Upload Cover Letter
            </h3>
          </figure>
          <button
            type="submit"
            className="jobformbtn"
            onClick={() => notify("Application submitted Successfully")}
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
}

export default JobDetail;
