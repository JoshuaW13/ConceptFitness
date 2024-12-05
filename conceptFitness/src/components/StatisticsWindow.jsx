import React from 'react';
import '../App.css';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';

ChartJS.register (
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
);

function StatisticsWindow() {

    const data = {
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Weight (lbs)',
                data: [100, 102, 103, 101, 105, 104, 106],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                pointBorderColor: 'rgba(75, 192, 192, 1)',
                pointBackgroundColor: '#fff',
                borderWidth: 2,
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Days',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Weight (lbs)',
                }, 
                min: 95,
                max: 110,
            },
        },
    };

    return (
        <div className="w-full max-w-lg bg-gray-50 rounded-lg shadow-lg flex flex-col border border-gray-300 text-black p-5 relative">
            <h2 className='text-xl font-bold mb-4'>Weight Change Over Time</h2>
            <div className='h-64 w-60'>
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default StatisticsWindow;