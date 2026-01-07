import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

import "./loginpage.css";

export default function Login() {
  const nav = useNavigate();
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const login = () => {
    setSuccess(true); // Show success state first

    // Wait 2 seconds before redirect
    setTimeout(() => {
      nav("/dashboard");
    }, 1050);
  };

  return (
    <div className="container">
      <div className="card">

        {/* ALWAYS VISIBLE */}
        <div className="icon">👤</div>
        <h2>LOGIN DETAIL</h2>
        <p>Please sign in to continue</p>

        {/* HIDE ON SUCCESS */}
        {!success && (
          <>
            <label className="title">Phone Number</label>
            <div className="inputBox">
              ✉️
              <input placeholder="Email address" />
            </div>

            <label className="title">Password</label>
            <div className="inputBox">
              🔒
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
              />
              <button
                type="button"
                className="btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="row">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <span>Forgot password?</span>
            </div>

            <button className="btnlogin" onClick={login}>
              LOGIN
            </button>

            <p className="or">OR CONTINUE WITH</p>

            <div className="social">
              <div>G</div>
              <div>🐱</div>
              <div>🐦</div>
            </div>

            <p className="signup">
              Don’t have an account?{" "}
              <Link to="/register" className="linksignup">
                Sign up
              </Link>
            </p>
          </>
        )}

        {/* SUCCESS CONTENT */}
        {success && (
          <div className="success">
            <div className="circle">
              <div className="tick"></div>
            </div>
            <h3>LOGIN SUCCESS</h3>
            <p>Redirecting to dashboard...</p>
          </div>
        )}
      </div>
    </div>
  );
}

