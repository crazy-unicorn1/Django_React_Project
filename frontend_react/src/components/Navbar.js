import { useContext } from "react";
import { Router, Link as RouterLink } from 'react-router-dom'; 
import AuthContext from "../context/AuthContext";

// const Navbar = () => {
//   const { user, logoutUser } = useContext(AuthContext);
//   return (
//     <nav>
//       <div>
//           {user ? (
//             <>
//               <Link to="/">Home</Link>
//               <Link to="/books">Books</Link>
//               <button onClick={logoutUser}>Logout</button>
//             </>
//           ) : (
//             <>
//               <Link to="/">Home</Link>
//               <Link to="/books">Books</Link>
//               <Link to="/login">Login</Link>
//               <Link to="/register">Register</Link>
//             </>
//           )}
//         </div>
//     </nav>
//   );
// };

// export default Navbar;


import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const preventDefault = (event) => event.preventDefault();

export default function UnderlineLink() {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        typography: 'body1',
        '& > :not(style) ~ :not(style)': {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
      {user ? (
            <>
              <Link href="/" underline="none">{'Home'}</Link>
              <Link component={RouterLink} to="/books" underline="none">{'Books'}</Link>
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
    </Box>
  );
}