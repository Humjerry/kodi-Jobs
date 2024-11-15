import React from "react";
import Interswitch from "../../images/interswitch 1.png";
import Iroko from "../../images/iroko_tv 1.png";
import Itskills from "../../images/Itskills.png";
import Kuda from "../../images/kuda_bank 1.png";
import Moniepoint from "../../images/Moniepoint.jpeg";
import Lendsqr from "../../images/lendsqr 1.png";

function companies() {
  return (
    <>
    <section className="companilogos">
     <figure> <img src={Interswitch} className="Interswitch" alt="" /></figure>
     <figure><img src={Iroko} className="Iroko" alt="" /></figure>
     <figure><img src={Kuda} className="Kuda" alt="" /></figure>
     <figure> <img src={Itskills} className="Itskills" alt="" /></figure>
     <figure> <img src={Moniepoint} className="Moniepoint" alt="" /></figure>
     <figure> <img src={Lendsqr} className="Lendsqr" alt="" /></figure>
    </section>
    </>
  );
}

export default companies;
