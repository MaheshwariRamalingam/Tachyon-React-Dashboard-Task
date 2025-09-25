import React from "react";
import "./Reports.css";

function Reports() {
  const reports = [
    { id: 1, name: "Shreya", status: "Completed" },
    { id: 2, name: "Deepika", status: "Pending" },
    { id: 3, name: "Rithika", status: "In Progress" },
  ];

  return (
    <div className="reports">
      <h2>Reports</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Order Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.name}</td>
              <td>{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Reports;
