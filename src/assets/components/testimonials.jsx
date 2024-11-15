import React from "react";
import Image1 from "../../images/Jerry.jpg"

function testimonials() {
  return (
    <div>
      <h1 className="clienth1">What Our Clients Say About Us</h1>
      <div className="card1">
        <img className="clientimg" src={Image1} alt="" />
        <div className="clienttext">
        <h1 className="clientname">Andrew Ukoba</h1>
        <p className="role">Designer</p>
        </div>
        <p className="say">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          delectus, velit pariatur nesciunt, officia facilis accusamus placeat
          enim temporibus esse sed consequuntur, expedita fugit dignissimos quae
          autem ad voluptatum doloribus.
        </p>
      </div>
    </div>
  );
}

export default testimonials;
