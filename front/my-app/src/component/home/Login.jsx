import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "./Login.css";
// login component
function Login() {
  // we state variables for username, password, role(default value is user), and message
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [message, setMessage] = useState("");

  // useNavigate hook to navigate from page to another
  const navigate = useNavigate();

  // function to handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      // we send POST request to login endpoint with username, password, and role
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        { username, password, role }
      );
      console.log(response);
      // now we need to extract token from the data which is located in our response
      const token = response.data.token;

      // decode the token to get user information
      const decoded = jwtDecode(token);

      // when we log in we should navigate to appropriate dashboard based on the account's role
      if (decoded.role === "admin") {
        navigate("/home");
      } else {
        navigate("/Userhome");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Login failed. Re-check your info");
    }
  };

  return (
    <div>
      <div className="flex-container" style={{ "margin-right": "100px" }}>
        <div className="content-container">
          <div className="form-container">
            <form action="/action_page.php" onSubmit={handleLogin}>
              <h1>Login</h1>
              <br />
              <br />
              <span className="subtitle">USERNAME:</span>
              <br />
              <input
                id="username"
                name="username"
                defaultValue=""
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <span className="subtitle">PASSWORD:</span>
              <br />
              <input
                id="password"
                name="password"
                defaultValue=""
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <div>
                <label>Role</label>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <br />
              <button id="submit">Login</button>
            </form>
          </div>
        </div>
        {message && <p>{message}</p>}
      </div>

      {/* <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <div>
          <label>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>} */}
    </div>
  );
}

export default Login;
