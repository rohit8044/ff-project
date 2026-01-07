import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Loginpage.css";

export default function Login() {
  const nav = useNavigate();

  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const [value, setValue] = useState({
    Phone_number: "",
    pass_word: "",
  });

  // handle input
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "Phone_number") {
      setValue((prev) => ({
        ...prev,
        Phone_number: value.replace(/[^0-9]/g, ""),
      }));
    } else {
      setValue((prev) => ({ ...prev, [name]: value }));
    }
  };

  // login function
  const login = async () => {

  if (!value.Phone_number || !value.pass_word) {
    setError("Phone number and password are required");
    return;
  }

  if (value.Phone_number.length !== 10) {
    setError("Phone number must be 10 digits");
    return;
  }

  try {
    const res = await axios.post('http://localhost:3000/login', {
      Phone_number: value.Phone_number,
      pass_word: value.pass_word,
    });

    setError("");
    setSuccess(true);
    console.log(res.data.msg);

    setTimeout(() => {
      nav("/dashboard");
    }, 1000);

  } catch (err) {
  console.log("FULL ERROR 👉", err.response);
  setError(err.response?.data?.msg || "Server error");
  }
};
  return (
    <div className="container">
      <div className="card">

        {/* ALWAYS VISIBLE */}
        <div className="icon">👤</div>
        <h2>LOGIN DETAIL</h2>
        <p>Please sign in to continue</p>

        {/* FORM */}
        {!success && (
          <>
            <label className="title">Phone Number</label>
            <div className="inputBox">
              📞
              <input
                type="text"
                maxLength="10"
                placeholder="Phone Number"
                name="Phone_number"
                value={value.Phone_number}
                onChange={handleChange}
              />
            </div>

            <label className="title">Password</label>
            <div className="inputBox">
              🔒
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                name="pass_word"
                value={value.pass_word}
                onChange={handleChange}
              />
              <button
                type="button"
                className="btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <p className="Errormessa">{error}</p>

            <div className="row">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <span>Forgot password?</span>
            </div>

            <button className="btnlogin" onClick={login}>
              Sign in
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

        {/* SUCCESS */}
        {success && (
          <div className="successBox">
            <div className="circle">
              <div className="successCircle">✔</div>
            </div>
            <h3>LOGIN SUCCESS</h3>
            <p>Redirecting to dashboard...</p>
          </div>
        )}
      </div>
    </div>
  );
}

