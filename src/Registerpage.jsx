import './Registerpage.css'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
export default function Registerpage(){
  const nav = useNavigate()
  const [Error,setError]=useState()
  const [value,setvalue]=useState({
    User:"",
    Phone:"",
    Email:"",
    Password:"",
    Confirm:""
  });
  const changevalue = (e) => {
  const { name, value } = e.target;

  // Phone field ke liye sirf numbers
  if (name === "Phone") {
    setvalue((prev) => ({...prev, Phone: value.replace(/[^0-9]/g, "")}));
  } else {
    setvalue((prev) => ({ ...prev, [name]: value }));
  }
};
  const handleSubmit=(e)=>{
    e.preventDefault();
   if (value.Password !== value.Confirm) {
      setError("Passwords do not match!");
      return;
   }else{
    nav('/')
   }
  }
  const allready=(e)=>{
    nav("/")
  }
  return (
    <>
      <div className="container1">
        <div className="card1">
           <div className="icon1">👤</div>
              <h2>CREACT ACCOUNT</h2>
                 <p>Please sign up to continue</p>
        <form onSubmit={handleSubmit }> 

          <label>Candidate Name</label>
          <div className="inputBox1">
            👤
            <input type="text" placeholder="Candidate Name" required name='User' onChange={changevalue}/>
          </div>

          <label>Phone Number</label>
          <div className="inputBox1">
            📞
            <input type="text" placeholder="Phone Number" maxLength="10" required name="Phone" value={value.Phone} onChange={changevalue} inputMode="numeric" pattern="[0-9]*" />
           </div>

          <label>Password</label>
          <div className="inputBox1">
              🔒
             <input type="password" placeholder="Password" required name='Password' onChange={changevalue}/>
          </div>

          <label>Confirm Password</label>
          <div className="inputBox1">
            🔒
            <input type="password" placeholder="Confirm Password"  required name='Confirm' onChange={changevalue}/>
          </div>
          <p className='Errormessa'>{Error}</p>
          <button className='btnlogin1' type='submit'>Sign up</button>
           <button className='btnlogin2' type='button' onClick={allready}>All ready </button>
          </form>
        </div>
      </div>
    </>
  );
}
