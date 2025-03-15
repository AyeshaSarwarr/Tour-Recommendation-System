import React from "react";
import "./assets/Login.css";
import { Link } from "react-router-dom"; 

const Login = () => {
  return (
    <div className="body">
      <div className="container">
        <h1 className="title">Travel</h1>

        <form className="signup-form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>

        <p className="switch-page">
          Don't have an account? <Link to="/SignUp">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
