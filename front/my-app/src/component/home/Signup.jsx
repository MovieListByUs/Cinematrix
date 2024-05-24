import React, { useState } from "react";
import axios from "axios";

// we create the signup component
function Signup() {
  // we state variables for username, password, and message
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

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
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Signup;
