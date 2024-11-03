import React from "react";
import { Line, Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const GraphAndChart = () => {
    // Data and options for the Line Chart (South African Service Delivery)
    const lineData = {
        labels: ["Electricity", "Water", "Sanitation", "Roads", "Housing"],
        datasets: [
            {
                label: "Number of Reportings",
                data: [150, 120, 90, 80, 60], // Sample data for number of reportings
                fill: false,
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderColor: "rgba(75, 192, 192, 1)",
            },
        ],
    };

    const lineOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "South African Service Delivery Issues Reportings",
            },
        },
    };

    // Data and options for the Pie Chart (Reports, Total Engagements, Complaints, Leaderboard)
    const pieData = {
        labels: ["Reports", "Total Engagements", "Complaints", "Leaderboard"],
        datasets: [
            {
                label: "Data Categories",
                data: [200, 150, 100, 50], // Sample data for each category
                backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(75, 192, 192, 0.6)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    const pieOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Data Categories Distribution",
            },
        },
    };

    return (
        <div className="container mb-5">
            {/*<div className="row my-5">
                <div className="col">
                    <h2>Line Chart and Pie Chart in React with Bootstrap</h2>
                </div>
            </div>*/}
            <div className="row justify-content-center align-items-center ">
                <div className="col-md-6">
                   {/* <h4>Service Delivery Reportings (Line Chart)</h4>*/}
                    <Line data={lineData} options={lineOptions} />
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    {/*<h4>Data Categories (Pie Chart)</h4>*/}
                    <div className=' col-md-8'>
                        <Pie data={pieData} options={pieOptions} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GraphAndChart;
