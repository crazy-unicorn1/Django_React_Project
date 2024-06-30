import * as React from "react";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "../components/AppAppBar";

import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function LandingPage() {
  const defaultTheme = createTheme();
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppAppBar />
      <Box sx={{ bgcolor: "background.default" }}>
        <div style={{ marginTop: "150px" }}>
          <h1 style={{ textAlign: "center" }}>
            {`Welcome ${user ? user.username : ""}!`}
          </h1>
        </div>
      </Box>
    </ThemeProvider>
  );
}
