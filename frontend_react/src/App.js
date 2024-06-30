import React from "react";
import Modal from "react-modal";
import "./index.css";

import Navbar from "./components/Navbar";
import Login from "./views/loginPage";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";
import Register from "./views/registerPage";
import BooksPage from "./views/BooksPage";
import HomePage from "./views/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

Modal.setAppElement("#root");

function App() {
  return (
 <>
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route
          path="/books"
          element={
            <PrivateRoute>
              <BooksPage />
            </PrivateRoute>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="navbar" element={<Navbar />} />
      
      </Routes>
      </AuthProvider>
    </BrowserRouter>

 </>
  );
}

export default App;