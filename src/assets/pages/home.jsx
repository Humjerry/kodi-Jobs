import React from "react";
import Navbar from "../components/nav.jsx";
import Herobar from "../components/hero.jsx";
import FirstCard from "../components/card1.jsx";
import Filter from "../components/filter.jsx";
import Companies from "../components/companies.jsx";
import Jobscreen from "./jobscreen.jsx";
import Card3 from "../components/card3.jsx";
import SecondCard from "../components/secondcard.jsx";
import TestimonialCrad from "../components/testimonials.jsx";
import Contactform from "../components/contactform.jsx";
import Footerdiv from "../components/footer.jsx";
import { Link } from "react-router-dom";

function Homepage() {
  // const { search, setSearch } = useContext(SearchContext);
  return (
    <div>
      <Navbar />
      <Herobar />
      <Filter />
      <FirstCard />
      <Jobscreen />
      <Card3 />
      <SecondCard />
      <Contactform />
      <TestimonialCrad />
      <Companies />
    </div>
  );
}

export default Homepage;
