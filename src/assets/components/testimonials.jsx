import React from "react";
import Image1 from "../../images/Jerry.jpg";
import Navbar from "../components/nav.jsx";

function testimonials() {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="clienth1">What Our Clients Say About Us</h1>
<section className="clientsflex">
        <div className="card1">
          <p className="say">
            KodiJobs took the hassle out of job hunting. They matched me with
            roles that fit my experience perfectly. Grateful for their help in
            my career.
          </p>
          <div className="shift">
            <div>
              <img className="clientimg" src={Image1} alt="" />
            </div>
            <div>
              <h1 className="clientname">Andrew Ukoba</h1>
              <p className="role">Designer</p>
            </div>
          </div>
        </div>

        <div className="card1">
          <p className="say">
            Exceptional service! KodiJobs made job searching less stressful with
            personalized job matches and professional support. Landed a role in
            just a few weeks!
          </p>
          <div className="shift">
            <div>
              <img className="clientimg" src={Image1} alt="" />
            </div>
            <div>
              <h1 className="clientname">K-Soft</h1>
              <p className="role">Software Developer</p>
            </div>
          </div>
        </div>

        <div className="card1">
          <p className="say">
            With KodiJobs, I finally found a job that values my skills. They
            truly understood my needs and made the application process
            straightforward and effective
          </p>
          <div className="shift">
            <div>
              <img className="clientimg" src={Image1} alt="" />
            </div>
            <div>
              <h1 className="clientname">Emmanuel ani</h1>
              <p className="role">Front-End Developer</p>
            </div>
          </div>
        </div>
        </section>
      </div>
    </>
  );
}

export default testimonials;
