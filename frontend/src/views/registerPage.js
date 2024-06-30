import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    registerUser(username, password, password2);
  };

  return (
   <>

<div>
      <div>
      <span>Sign up</span>      
        <form onSubmit={handleSubmit}>
          <div >
            <label>Username</label>
            <input type="text" name="username" id="username"  onChange={e => setUsername(e.target.value)} placeholder="Enter username" required></input>
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} placeholder="Password" required></input>
          </div>
          <div>
            <label>Confirm Password</label>
            <input type="password" name="confirm-password" id="confirm-password" onChange={e => setPassword2(e.target.value)} placeholder="Confirm Password" required></input>
            <p>{password2 !== password ? "Passwords do not match" : ""}</p>
          </div>
          <button>Sign up</button>
        </form>

    </div>
  </div>
   </>
  );
}

export default Register;
