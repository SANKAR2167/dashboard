import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: false,
      text: "Chart.js Line Chart"
    }
  }
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Total Win",
      data: [30, 150, 50, 100, 60, 140, 80],
      borderColor: "#5538ab",
      backgroundColor: "rgba(93, 102, 235, 0.5)",
      lineTension: 0.2
    },
    {
      fill: true,
      label: "Total Loss",
      data: [60, 130, 30, 120, 40, 100, 90],
      borderColor: "#05b9ff",
      backgroundColor: "rgba(33, 190, 235, 0.5)",
      lineTension: 0.2
    }
  ]
};

export function StackedChart() {
  return <Line options={options} data={data} />;
}
