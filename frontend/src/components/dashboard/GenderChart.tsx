"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const GenderChart = () => {
  const data = {
    labels: ["Masculino", "Feminino", "Não binário", "Outros"],
    datasets: [
      {
        label: "Nº de pessoas",
        data: [30, 40, 20, 10],
        backgroundColor: ["#ea5545", "#f46a9b", "#ef9b20", "#edbf33"],
        hoverOffset: 4,
      },
    ],
  };
  return <Pie data={data} />;
};

export default GenderChart;
