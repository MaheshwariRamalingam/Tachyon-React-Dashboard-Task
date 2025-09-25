import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./Settings.css";

function Settings() {
  
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Profile Visits",
        data: [50, 100, 75, 120, 180, 160],
        borderColor: "green",
        backgroundColor: "rgba(0,255,0,0.2)",
      },
    ],
  };

  return (
    <div className="settings">
      <h2>Settings</h2>

      {/* Profile Section */}
      <div className="section">
        <h3>Profile</h3>
        <div className="card">
          <p><strong>Name:</strong> Maheshwari</p>
          <p><strong>Email:</strong> maheshwari@gmail.com</p>
          <p><strong>Phone:</strong> 1234567890</p>
        </div>
      </div>

      {/* Preferences Section */}
      <div className="section">
        <h3>Preferences</h3>
        <div className="card">
          <p><strong>Theme:</strong> Dark</p>
          <p><strong>Language:</strong> English</p>
          <p>
            <strong>Notifications:</strong>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </p>
        </div>
      </div>

      {/* Security Section */}
      <div className="section">
        <h3>Security</h3>
        <div className="card">
          <p><strong>Password:</strong> ************</p>
          <button className="btn">Change Password</button>
        </div>
      </div>

      {/* Mini Dashboard Section */}
      <div className="section">
        <h3>Profile Statistics</h3>
        <div className="cards">
          <div className="mini-card">
            <h4>Posts</h4>
            <p>24</p>
          </div>
          <div className="mini-card">
            <h4>Followers</h4>
            <p>1,245</p>
          </div>
          <div className="mini-card">
            <h4>Following</h4>
            <p>320</p>
          </div>
        </div>

        <div className="chart-container">
          <Line data={chartData} />
        </div>
      </div>
    </div>
  );
}

export default Settings;
