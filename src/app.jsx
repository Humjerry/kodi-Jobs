import { useState } from "preact/hooks";
import Homepage from "./assets/pages/home.jsx";
import Aboutus from "./assets/pages/aboutus.jsx";
import Applypage from "./assets/components/apply.jsx";
import Loginpage from "./assets/pages/login.jsx";
import Signup from "./assets/pages/signup.jsx";
import Navbar from "./assets/components/nav.jsx";
import Herobar from "./assets/components/hero.jsx";
import FirstCard from "./assets/components/card1.jsx";
import Companies from "./assets/components/companies.jsx";
import TestimonialCrad from "./assets/components/testimonials.jsx";
import Contactform from "./assets/components/contactform.jsx";
import SecondCard from "./assets/components/secondcard.jsx";
import Footerdiv from "./assets/components/footer.jsx";
import "./app.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import jobData from "../job.json";

export function App() {
  return (
    <>
      {/* <SearchContext.Provider value={{ search, setSearch }}> */}

      <Router>
  
        <Routes>
          <Route path="/" element={<Signup />} errorElement={<Signup />} />
          <Route
            path="/login"
            element={<Loginpage />}
            errorElement={<Loginpage />}
          />
          <Route
            path="/job/:id"
            element={<Applypage jobs={jobData} />}
            errorElement={<Homepage />}
          />
          <Route
            path="/Homepage"
            element={<Homepage />}
            errorElement={<Homepage />}
          />
          <Route
            path="/FirstCard"
            element={<FirstCard />}
            errorElement={<FirstCard />}
          />
          <Route
            path="/SecondCard"
            element={<SecondCard />}
            errorElement={<SecondCard />}
          />
          <Route
            path="/TestimonialCrad"
            element={<TestimonialCrad />}
            errorElement={<TestimonialCrad />}
          />
          <Route
            path="/Contactform"
            element={<Contactform />}
            errorElement={<Contactform />}
          />
          <Route
            path="/Footerdiv"
            element={<Footerdiv />}
            errorElement={<Footerdiv />}
          />
          <Route
            path="/Aboutus"
            element={<Aboutus />}
            errorElement={<Aboutus />}
          />
        </Routes>
        <Footerdiv />
      </Router>
      <ToastContainer />
      {/* </SearchContext.Provider> */}
    </>
  );
}
