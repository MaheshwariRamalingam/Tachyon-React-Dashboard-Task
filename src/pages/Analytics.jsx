import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Analytics() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Visitors",
        data: [500, 1000, 750, 1200, 1800, 1600],
        borderColor: "blue",
        backgroundColor: "rgba(0,0,255,0.2)",
      },
    ],
  };

  return (
    <div>
      <h2>Analytics</h2>
      <Line data={data} />
    </div>
  );
}

export default Analytics;
