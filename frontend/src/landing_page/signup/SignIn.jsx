import React, { useState } from "react";
import axios from "axios";

function SignIn() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSignInClick = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:8080/signin",
                { username: userName, password: password },
                { withCredentials: true }
            );

            setSuccess("Login successful! Redirecting...");
            setError("");

            setTimeout(() => {
                window.location.href = "http://localhost:5173"; 
            }, 1000);
        } catch (err) {
            setError(err.response?.data?.error || "Invalid credentials");
            setSuccess("");
        }
    };

    return (
        <div className="row mt-5">
            <div className="col-12 col-md-6 offset-md-3">
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}
                <form className="needs-validation" noValidate>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            name="username"
                            id="username"
                            type="text"
                            className="form-control"
                            required
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button className="btn btn-primary col-2" onClick={handleSignInClick}>Sign In</button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
