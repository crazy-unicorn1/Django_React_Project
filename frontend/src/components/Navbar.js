import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <nav>
      <div>
          {user ? (
            <>
              <Link to="/">Home</Link>
              <Link to="/books">Books</Link>
              <button onClick={logoutUser}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/">Home</Link>
              <Link to="/books">Books</Link>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
    </nav>
  );
};

export default Navbar;
