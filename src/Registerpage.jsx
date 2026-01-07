import './Registerpage.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'; // ✅ fixed import

export default function Registerpage() {
  const nav = useNavigate();
  const [Error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const [value, setValue] = useState({
    Candidate_name: "",
    Phone_number: "",
    pass_word: "",
    Confirm: "",
  });

  // Handle input changes
  const changeValue = (e) => {
    const { name, value: inputValue } = e.target;
    if (name === "Phone_number") {
      // Only allow numbers
      setValue(prev => ({ ...prev, Phone_number: inputValue.replace(/[^0-9]/g, "") }));
    } else {
      setValue(prev => ({ ...prev, [name]: inputValue }));
    }
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Check if passwords match first
    if (value.pass_word !== value.Confirm) {
      setError("Passwords do not match!");
      return;
    }

    try {
      // ✅ Send correct field names to backend
      const res = await axios.post('http://localhost:3000/signup', {
        Candidate_name: value.Candidate_name,
        Phone_number: value.Phone_number,
        pass_word: value.pass_word,
      });

      setError('');
      setIsSuccess(true);
      console.log(res.data.msg); // optional: success message

      setTimeout(() => {
        nav('/'); // redirect after 2 seconds
      }, 2000);

    } catch (err) {
      if (err.response && err.response.data && err.response.data.msg) {
        setError(err.response.data.msg);
      } else {
        setError("Something went wrong!");
      }
    }
  };

  // Navigate to login page
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
                <input 
                  type="text" 
                  placeholder='Candidate Name' 
                  required 
                  name="Candidate_name" 
                  value={value.Candidate_name}
                  onChange={changeValue} 
                />
              </div>

              <label>Phone Number</label>
              <div className="inputBox1">
                📞
                <input
                  type="text"
                  maxLength="10"
                  placeholder='Phone Number'
                  required
                  name="Phone_number"
                  value={value.Phone_number}
                  onChange={changeValue}
                />
              </div>

              <label>Password</label>
              <div className="inputBox1">
                🔒
                <input 
                  type="password" 
                  placeholder='Password' 
                  required 
                  name="pass_word" 
                  value={value.pass_word}
                  onChange={changeValue} 
                />
              </div>

              <label>Confirm Password</label>
              <div className="inputBox1">
                🔒
                <input 
                  type="password" 
                  placeholder='Confirm Password' 
                  required 
                  value={value.Confirm}
                  name="Confirm" 
                  onChange={changeValue} 
                />
              </div>

              <p className="Errormessa">{Error}</p>

              <button className="btnlogin1" type="submit">Sign up</button>
              <button className="btnlogin2" type="button" onClick={already}>
                Sign in
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
