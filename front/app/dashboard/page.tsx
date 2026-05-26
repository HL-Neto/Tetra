"use client"

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

  // BAR -> comparação entre vendedores
  const vendasVendedores = {
    labels: ["Carlos", "Marcos", "Fernanda", "João"],
    datasets: [
      {
        label: "Vendas por vendedor",
        data: [15, 22, 18, 30],
        backgroundColor: [
          "#dc2626",
          "#ef4444",
          "#f87171",
          "#fca5a5"
        ],
        borderWidth: 1
      }
    ]
  };

  const vendasMes = {
    labels: ["Honda", "Yamaha", "BMW", "Kawasaki"],
    datasets: [
      {
        label: "Participação nas vendas",
        data: [40, 30, 20, 10],
        backgroundColor: [
          "#dc2626",
          "#ef4444",
          "#f87171",
          "#fca5a5"
        ]
      }
    ]
  };

  const lucroMes = {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
    datasets: [
      {
        label: "Lucro mensal (R$)",
        data: [12000, 15000, 18000, 16000, 22000],
        borderColor: "#dc2626",
        backgroundColor: "#f87171",
        tension: 0.4,
        fill: false
      }
    ]
  };

  const vendasMotos = {
    labels: ["Esportiva", "Custom", "Trail", "Scooter"],
    datasets: [
      {
        label: "Tipos de motos vendidas",
        data: [25, 15, 35, 25],
        backgroundColor: [
          "#dc2626",
          "#ef4444",
          "#f87171",
          "#fca5a5"
        ]
      }
    ]
  };

  return(
    <div>
      <Menu/>

      <div className={style.graph}>

        <div className={style.graph_top}>
         
          <div className={style.graph_card}>
            <Bar data={vendasVendedores}/>
          </div>

          <div className={style.graph_card}>
            <Doughnut data={vendasMes}/>
          </div>
        
        </div>

        <div className={style.graph_bottom}>
          
          <div className={style.graph_card}>
            <Line data={lucroMes}/>
          </div>

          <div className={style.graph_card}>

            <Pie data={vendasMotos}/>
          </div>
        
        </div>

      </div>
    </div>
  );
}