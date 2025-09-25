
import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h2 className="logo">My Dashboard</h2>
      <ul className="nav-links">
        <li>Help</li>
        
        <li onClick={() => navigate("/login")} className="nav-item">
          Login
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
