"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const AgeChart = () => {
  const data = {
    labels: [
      "0 - 5",
      "5 - 14",
      "14 - 18",
      "24 - 29",
      "30 - 39",
      "40 - 49",
      "50 - 59",
      "60 >",
    ],
    datasets: [
      {
        label: "Nº de pessoas",
        data: [10,10,20,20,5,5,5,15],
        backgroundColor: [
          "#ea5545",
          "#f46a9b",
          "#ef9b20",
          "#edbf33",
          "#ede15b",
          "#87bc45",
          "#27aeef",
          "#b33dc6",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return <Doughnut data={data} onClick={(e) => console.log(e)} />;
};

export default AgeChart;
