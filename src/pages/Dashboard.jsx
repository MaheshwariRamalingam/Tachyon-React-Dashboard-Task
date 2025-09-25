import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard Overview</h2>
      <div className="cards">
        <div className="card">
          <h3>Users</h3>
          <p>1,245</p>
        </div>
        <div className="card">
          <h3>Revenue</h3>
          <p>4 Lakhs</p>
        </div>
        <div className="card">
          <h3>Orders</h3>
          <p>320</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
