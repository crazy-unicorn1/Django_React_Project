import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import Navbar from "../components/Navbar";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    registerUser(username, password, password2, name, email, address);
  };

  return (
    <>
    <Navbar/>
    <div>
      <div>
        <span>Sign up</span>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label>Address</label>
            <input
              type="text"
              name="address"
              id="address"
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              onChange={(e) => setPassword2(e.target.value)}
              placeholder="Confirm Password"
              required
            />
            <p>{password2 !== password ? "Passwords do not match" : ""}</p>
          </div>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Register;
