import React, { useState } from "react";
import axios from "axios";


function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  const handleSignUpClick = async (e) => {
    e.preventDefault(); // Prevents page refresh

    const requestData = {
        username: userName, 
        password: password, 
        email: email 
      };

    try {
      const response = await axios.post("http://localhost:8080/signup", requestData, {
        withCredentials: true 
        });

      setSuccess("User registered successfully!");
      setError(""); // Clear errors on success
      setTimeout(() => { 
        window.location.href = "http://localhost:5173"; // Navigate after success
      }, 1000);

    } catch (err) {
      setError(err.response?.data?.error || "Signup failed. Please try again.");
      setSuccess(""); // Clear success message on error
    }
  };

  return (
    <div className="row mt-5">
      <div className="col-12 col-md-6 offset-md-3">
        <form className="needs-validation" noValidate>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}

          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              name="username"
              id="username"
              type="text"
              className="form-control"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="password"
              minLength="8"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="col-2 btn btn-primary" onClick={handleSignUpClick}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
