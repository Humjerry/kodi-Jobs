import React from "react";
import Webimg from "../../images/layer2.png";
import Devimg from "../../images/adaptive_responsive_design_1_.png";
import Markimg from "../../images/7898409_promotion_business_finance_office_marketing_icon 1.png";
import Entimg from "../../images/3-Online Document.png";
import Softwimg from "../../images/5355692_code_coding_development_programming_web_icon 1.png";
import Graphicimg from "../../images/Layer 2.png";
import Navbar from "../components/nav.jsx";
import { Link } from "react-router-dom";


function secondcard() {

  
  return (
    <>
     <Navbar/>
     <Link to={"/FirstCard"}>
      <section className="card2">
          <h1 className="card2h1">Our Categories</h1>
        </section>
        <section className="secondcard">
      <div>
        {" "}
        <figure>
          <img src={Devimg} className="webdimg" alt="" />
        </figure>{" "}
        <p className="webdtext">Web Design</p>
      </div>
      <div>
        {" "}
        <figure>
          <img src={Webimg} className="webdevimg" alt="" />
        </figure>{" "}
        <p className="webdevtext">Software Development</p>
      </div>
      <div>
        {" "}
        <figure>
          <img src={Markimg} className="marketimg" alt="" />
        </figure>{" "}
        <p className="markettext">Marketing</p>
      </div>
      <div>
        {" "}
        <figure>
          <img src={Entimg} className="dataimg" alt="" />
        </figure>{" "}
        <p className="datatext">Data Entry</p>
      </div>
      <div>
        {" "}
        <figure>
          <img src={Softwimg} className="softengimg" alt="" />{" "}
        </figure>
        <p className="softengtext">Software Engineering</p>
      </div>
      <div>
        <figure>
          <img src={Graphicimg} className="graphimg" alt="" />{" "}
        </figure>{" "}
        <p className="graphtext">Graphic Design</p>
      </div>
    </section>
    </Link>
    </>
  );
}

export default secondcard;
