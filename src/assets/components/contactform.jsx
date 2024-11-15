import React from "react";
import Navbar from "../components/nav.jsx"

function contactform() {
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
     <Navbar/>
      <h2 className="formh2">Contact Us</h2>
      <div className="contactform">
      <form onSubmit={onSubmit}>
          <div className="form1">
            <input type="text" placeholder="firstname" className="firstname" />
            <input type="text" placeholder="lastname" className="lastname" />
          </div>
          <div className="form2">
            <input type="text" placeholder="location" className="location" />
            <input type="email" name="" id="" className="email" placeholder="you@kodijobs.com" />
          </div>
          <div>
            <input type="text" className="textarea" />
          </div>
          <button type="submit" className="formbtn" onClick={() => notify("Form submitted Successfully")}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default contactform;
