import { useEffect } from "react";
import React from "react";
import BulbImg from "../../images/bulb.png";
import KiteImg from "../../images/Group (2).png";
import Flower from "../../images/flower.png";
import OfficeImg from "../../images/office.png.png";
import { useState } from "preact/hooks";
 

function hero() {
  // fetching api from here
  const [jobs, setJobs] = useState("");
  console.log(jobs);
  return (
  
    <div className="hero">
      <div className="herotext">
        <figure>
          <img src={BulbImg} alt="" className="heroimg1" />
        </figure>
        Get your dream job with Kodi Jobs.
        <figure>
          <img src={KiteImg} alt="" className="heroimg2" />
        </figure>
      </div>
      <p>
        We help you land that dream job you dream about. You to can make it
        work!
      </p>
      <div className="hero2">
        <figure>
          <img src={Flower} alt="" className="heroimg3" />
        </figure>
        <figure>
          <img src={OfficeImg} alt="" className="heroOffice" />
        </figure>
        <figure>
          <img src={Flower} alt="" className="heroimg3" />
        </figure>
      </div>
    </div>
  
  );
}

export default hero;
