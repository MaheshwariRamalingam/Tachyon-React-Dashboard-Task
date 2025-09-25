import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/">🏠 Dashboard</Link></li>
        <li><Link to="/analytics">📊 Analytics</Link></li>
        <li><Link to="/reports">📑 Reports</Link></li>
        <li><Link to="/settings">⚙️ Settings</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
