"use client"

import { useEffect, useState } from "react";
import Menu from "@/app/hero/menu"
import style from "./page.module.css";

import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard(){

  const [chartData, setChartData] = useState({
    labels: ["Janeiro", "Fevereiro", "Março"],
    datasets: [
      {
        label: "Revenue",
        data: [0,0,0],
        backgroundColor: ["#7c3aed","#9333ea","#a855f7"]
      }
    ]
  });

  useEffect(()=>{

    const socket = new WebSocket("ws://localhost:8000");

    socket.onopen = () => {
      console.log("WebSocket conectado");
    };

    socket.onmessage = (event) => {

      const dados = JSON.parse(event.data);

      setChartData({
        labels: ["Janeiro","Fevereiro","Março"],
        datasets: [
          {
            label: "Revenue",
            data: dados.data,
            backgroundColor: ["#dc2626", "#ef4444", "#f87171"]
          }
        ]
      });

    };

    socket.onclose = () => {
      console.log("WebSocket fechado");
    };

    return () => socket.close();

  }, []);

  return(
    <div>
      <Menu/>
      <div className={style.graph}>

        <div className={style.graph_top}>
          <div className={style.graph_card}>
            <Bar data={chartData}/>
          </div>

          <div className={style.graph_card}>
            <Doughnut data={chartData}/>
          </div>
        </div>

        <div className={style.graph_bottom}>
          <div className={style.graph_card}>
            <Line data={chartData}/>
          </div>

          <div className={style.graph_card}>
            <Pie data={chartData}/>
          </div>
        </div>

      </div>
    </div>
  );
}