"use client";
import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from "chart.js";
import { Bar } from "react-chartjs-2";

// 必要な要素を登録
ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

export default function Chart({ sectionId }) {
  // データセットを定義
  const datasets = {
    skill: [
      {
        title: "FrontEnd",
        data: {
          labels: ["HTML/CSS", "SCSS", "Vanilla.js", "Jquery", "React.js", "Vue.js"],
          datasets: [
            {
              label: "Skill Level (out of 5)",
              data: [4.5, 3, 3.5, 3, 1.5, 1],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(75, 192, 192, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(75, 192, 192, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
      },
      {
        title: "BackEnd/other",
        data: {
          labels: ["PHP", "SQL", "Node.js", "Git"],
          datasets: [
            {
              label: "Skill Level (out of 5)",
              data: [1.5, 2, 1, 2],
              backgroundColor: [
                "rgba(54, 162, 235, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 99, 132, 0.2)",
              ],
              borderColor: [
                "rgba(54, 162, 235, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 99, 132, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
      },
    ],
    hoge: [
      {
        title: "Example Chart for HOGE",
        data: {
          labels: ["Category 1", "Category 2", "Category 3"],
          datasets: [
            {
              label: "Example Data",
              data: [5, 3, 4],
              backgroundColor: ["rgba(153, 102, 255, 0.2)", "rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
              borderColor: ["rgba(153, 102, 255, 1)", "rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
              borderWidth: 1,
            },
          ],
        },
      },
    ],
  };

  // スケール設定
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    indexAxis: "y", // 横向きグラフに設定
    scales: {
      x: {
        beginAtZero: true,
        max: 5, // 5段階にスケールを設定
        title: {
          display: true,
          text: "Skill Level",
        },
      },
      y: {
        title: {
          display: true,
          text: "",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  // sectionId に対応するグラフを取得
  const graphs = datasets[sectionId] || [];

  return (
    <div className="bl_chartUnit">
      {graphs.map((graph, index) => (
        <div className="bl_chart" key={index}>
          <h3>{graph.title}</h3>
          <Bar data={graph.data} options={{ ...options, scales: { ...options.scales, y: { title: { text: graph.title } } } }} />
        </div>
      ))}
    </div>
  );
}
