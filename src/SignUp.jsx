import React from "react";
import "./assets/SignUp.css"; 

const Signup = () => {
  return (
    <div className="body">
      <div className="container">
        <h1 className="title">Travel</h1>

        <form className="signup-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Sign Up</button>
        </form>

        <p className="already-account">Already have an account?</p>
      </div>
    </div>
  );
};

export default Signup;
