import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
// we create the signup component
function Signup() {
  // we state variables for username, password, and message
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  // Function to handle signup
  const handleSignup = async (e) => {
    e.preventDefault(); // we need to use this code to prevent default form submission behavior
    try {
      // send POST request to register endpoint with username and password
      const response = await axios.post(
        "http://localhost:4000/api/auth/register",
        { username, password }
      );
      setMessage("Signup successful!");
    } catch (error) {
      setMessage("Signup failed. Please try again.");
    }
  };

  // render the signup form
  return (
    <div>
      <form onSubmit={handleSignup} style={{ "margin-top": "200px" }}>
        <h2 style={{ color: "white" }}>Signup</h2>
        <div>
          <label>Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Signup</button>
        <br />
        <br />
        <button type="submit" onClick={() => navigate("/login")}>
          Login
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Signup;
