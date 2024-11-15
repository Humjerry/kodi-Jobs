import React, { useState } from "react";
import jobData from "../../../job.json";
import { Link } from "react-router-dom";
import SearchImg from "../../images/Search_Magnifying_Glass.svg";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

function Card1() {
  const [search, setSearch] = useState(""); // State for search input
  const [jobs, setJobs] = useState(jobData); // Initial job data

  // Filter jobs based on search input
  const filteredJobs = jobs.filter((job) =>
    job.jobRole.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section>
        <div>
          <h1 className="h1">Our Job Features</h1>
        </div>
        <section className="h1div">
          <div className="inputDiv">
            <img src={SearchImg} alt="Search-Icon" />
            <input
              type="text"
              placeholder="Search by job title"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn">Search</button>
          </div>
        </section>
      </section>
      <section className="cardHol">
        {filteredJobs.map((job) => (
          <div className="cardContainer" key={job.id}>
            <div className="texts">
              <div>
                <img src={job.companyLogo} alt={job.companyName} />
                <span>
                  <h3>{job.companyName}</h3>
                  <p>5 days ago</p>
                </span>
              </div>
              <div>
                <p>
                  <span className="typejob">{job.salaryType}</span>
                </p>
                <p>
                  <FaRegStar />
                  <FaStar />
                </p>
              </div>
            </div>
            <hr />
            <div className="text2">
              <h1>{job.jobRole}</h1>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
                aliquid odio mollitia
              </p>
            </div>
            <div className="btncard">
              <Link to={`/job/${job.id}`}>
                <button>Apply</button>
              </Link>
              <p>
                <FaLocationDot /> {job.location}
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Card1;
