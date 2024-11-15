import React from "react";
import Rect1 from "../../images/Rectangle 139.png";
import Rect2 from "../../images/Rectangle 140.png";
import Rect3 from "../../images/Rectangle 141.png";
import Arow from "../../images/Arrow 1.png";
import Navbar from "../components/nav.jsx"

function Card3() {
  return (
    <>
     <Navbar />
      <h1 className="card2h2">See Our Blogs Here</h1>
      <section className="thirdcarddiv">
        <div className="blogcard1">
          <figure>
            <img className="card3img1" src={Rect1} alt="" />
          </figure>
          <div className="blogtext">
            <h1
              className="blogtitle
              "
            >
              Appealing Console Output with Colors.js
            </h1>
            <p className="blogsum">
              {" "}
              Using the colors.js package gives an appealing visual and a better
              console output, giving room for easy debugging process.
            </p>

            <button className="blogbtn">
              {" "}
              READ MORE <img src={Arow} alt="" />
            </button>
          </div>
        </div>

        <div className="blogcard2">
          <figure>
            <img className="card3img2" src={Rect2} alt="" />
          </figure>
          <div className="blogtext2">
            <h1
              className=" blogtitle2
              "
            >
              Appealing Console Output with Colors.js
            </h1>
            <p className="blogsum2">
              {" "}
              Using the colors.js package gives an appealing visual and a better
              console output, giving room for easy debugging process.
            </p>

            <button className="blogbtn2">
              {" "}
              READ MORE <img src={Arow} alt="" />
            </button>
          </div>
        </div>
        <div className="blogcard3">
          <figure>
            <img className="card3img3" src={Rect3} alt="" />
          </figure>
          <div className="blogtext3">
            <h1 className="blogtitle3">
              Appealing Console Output with Colors.js
            </h1>
            <p className="blogsum3">
              Using the colors.js package gives an appealing visual and a better
              console output, giving room for easy debugging process.
            </p>

            <button className="blogbtn3">
              READ MORE <img src={Arow} alt="" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Card3;
