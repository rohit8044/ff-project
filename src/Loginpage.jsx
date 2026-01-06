import { useState } from "react";
import "./loginpage.css";

export default function Login() {
  const [success, setSuccess] = useState(false);

  return (
    <div className="container">
      <div className="card">

        {/* ALWAYS VISIBLE */}
        <div className="icon">👤</div>
        <h2>PAYMENT DETAIL</h2>
        <p>Please sign in to continue</p>

        {/* HIDE ON SUCCESS */}
        {!success && (
          <>
            <div className="inputBox">
              ✉️
              <input placeholder="Email address" />
            </div>

            <div className="inputBox">
              🔒
              <input type="password" placeholder="Password" />
            </div>

            <div className="row">
              <label><input type="checkbox" /> Remember me</label>
              <span>Forgot password?</span>
            </div>

            <button onClick={() => setSuccess(true)}>LOGIN</button>

            <p className="or">OR CONTINUE WITH</p>

            <div className="social">
              <div>G</div>
              <div>🐱</div>
              <div>🐦</div>
            </div>

            <p className="signup">
              Don’t have an account? <span>Sign up</span>
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
          </div>
        )}

      </div>
    </div>
  );
}

