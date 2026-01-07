import './Registerpage.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

export default function Registerpage() {
  const nav = useNavigate();
  const [Error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const [value, setValue] = useState({
    User: "",
    Phone: "",
    Email: "",
    Password: "",
    Confirm: ""
  });

  const changeValue = (e) => {
    const { name, value } = e.target;
    if (name === "Phone") {
      setValue(prev => ({ ...prev, Phone: value.replace(/[^0-9]/g, "") }));
    } else {
      setValue(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.Password !== value.Confirm) {
      setError("Passwords do not match!");
      return;
    }
    setError("");
    setIsSuccess(true);
    setTimeout(() => {
      nav('/');
    }, 2000);
  };

  const already = () => {
    nav("/");
  };

  return (
    <div className="container1">
      <div className="card1">

        {!isSuccess ? (
          <>
            <div className="icon1">👤</div>
            <h2>CREATE ACCOUNT</h2>
            <p>Please sign up to continue</p>

            <form onSubmit={handleSubmit}>
              <label>Candidate Name</label>
              <div className="inputBox1">
                👤
                <input type="text" placeholder='Candidate Name' required name="User" onChange={changeValue} />
              </div>

              <label>Phone Number</label>
              <div className="inputBox1">
                📞
                <input
                  type="text" maxLength="10" placeholder='Phone Number' required name="Phone" value={value.Phone}  onChange={changeValue} />
              </div>

              <label>Password</label>
              <div className="inputBox1">
                🔒
                <input type="password" placeholder='password' required name="Password" onChange={changeValue} />
              </div>

              <label>Confirm Password</label>
              <div className="inputBox1">
                🔒
                <input type="password" placeholder='Confirm password' required name="Confirm" onChange={changeValue} />
              </div>

              <p className="Errormessa">{Error}</p>

              <button className="btnlogin1" type="submit">Sign up</button>
              <button className="btnlogin2" type="button" onClick={already}>
                All ready
              </button>
            </form>
          </>
        ) : (
          <div className="successBox">
            <div className="successCircle">✔</div>
            <h2>Register Successful</h2>
            <p>Redirecting...</p>
          </div>
        )}
      </div>
    </div>
  );
}
