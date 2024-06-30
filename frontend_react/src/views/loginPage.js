import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Navbar from "../components/Navbar";


const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };

  return (
    <>
      <Navbar/>
      <div>
        <span>Login</span>      
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input type="text" name="username" id="username" placeholder="Enter username"></input>
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" id="password" placeholder="Password"></input>
          </div>
          <button>Login</button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
