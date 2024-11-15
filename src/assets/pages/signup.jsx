import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../app.css";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    try {
      const response = await axios.post(
        "http://localhost:1000/api/users/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/Homepage");
      alert("signup sucessful");
      console.log(response.data);
    } catch (error) {
      console.error(error, error.response?.data || error.message);
    }
  };
  return (
    <>
      <div className="signupdiv">
        <form onSubmit={handleSubmit} className="signupform">
          <h2>Register</h2>

          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter  username"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />

          <button type="submit" className="signupbtn">
            Register
          </button>
          <Link to="/login">
            <p>Already Signed Up? login here!</p>
          </Link>
        </form>
      </div>
    </>
  );
}

export default Signup;
