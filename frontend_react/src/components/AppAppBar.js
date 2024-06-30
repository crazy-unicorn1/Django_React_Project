import * as React from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";

const logoStyle = {
  width: "40px",
  height: "auto",
  cursor: "pointer",
};

function AppAppBar() {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleBooksClick = () => {
    navigate("/books");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignupClick = () => {
    navigate("/register");
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor: "rgba(255, 255, 255, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow: `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`,
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                px: 0,
              }}
            >
              <img
                src={"logo192.png"}
                style={logoStyle}
                alt="logo of sitemark"
              />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <MenuItem
                  onClick={handleHomeClick}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body2" color="text.primary">
                    Home
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={handleBooksClick}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body2" color="text.primary">
                    Books
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >
              {user ?
              (<><Button
                color="primary"
                variant="text"
                size="small"
                component="a"
                onClick={logoutUser}
                target="_blank"
              >
                Log out
              </Button></>)
              :
                (<><Button
                  color="primary"
                  variant="text"
                  size="small"
                  component="a"
                  onClick={handleLoginClick}
                  target="_blank"
                >
                  Log in
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  size="small"
                  component="a"
                  onClick={handleSignupClick}
                  target="_blank"
                >
                  Sign up
                </Button></>)
              }
              
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default AppAppBar;
