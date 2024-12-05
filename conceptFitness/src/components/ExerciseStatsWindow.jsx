import React, { useState } from 'react';
import '../App.css';
import { Line } from 'react-chartjs-2';
import NextIcon from "@mui/icons-material/ArrowForward";
import BackIcon from "@mui/icons-material/ArrowBack";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
);

function ExerciseStatsWindow() {
    // Updated data for 31 days
    const allData = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
        datasets: [
            {
                label: 'Weight (lbs)',
                data: [
                    100, 102, 103, 101, 105, 104, 106, 107, 108, 109, 110, 111,
                    112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123,
                    124, 125, 126, 127, 128, 129, 130,
                ],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                pointBorderColor: 'rgba(75, 192, 192, 1)',
                pointBackgroundColor: '#fff',
                borderWidth: 2,
                tension: 0.4,
            },
        ],
    };

    // State to track the current range of data to show
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(6); // Initially showing the first 7 days

    // Function to get the sliced data for the current range
    const getChartData = () => {
        const labels = allData.labels.slice(startIndex, endIndex + 1);
        const data = allData.datasets[0].data.slice(startIndex, endIndex + 1);
        return {
            labels: labels,
            datasets: [{
                ...allData.datasets[0],
                data: data
            }]
        };
    };

    // Function to move the chart window left (show previous 7 days)
    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 7);
            setEndIndex(endIndex - 7);
        }
    };

    // Function to move the chart window right (show next 7 days)
    const handleNext = () => {
        if (endIndex < allData.labels.length - 1) {
            setStartIndex(startIndex + 7);
            setEndIndex(endIndex + 7);
        }
    };

    // Options with larger font size for axis labels and tick labels
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Days',
                    font: {
                        size: 16 // Increase x-axis title font size
                    }
                },
                ticks: {
                    font: {
                        size: 14 // Increase font size for x-axis tick labels
                    }
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Weight (lbs)',
                    font: {
                        size: 16 // Increase y-axis title font size
                    }
                },
                ticks: {
                    font: {
                        size: 14 // Increase font size for y-axis tick labels
                    }
                },
                min: 95,
                max: 135,
            }
        }
    };

    return (
        <div className="w-full max-w-lg bg-gray-50 rounded-lg shadow-lg flex flex-col border border-gray-300 text-black relative">
            <div className="flex items-center p-1">
                <div className="flex w-6 h-6 bg-gray-300 cursor-pointer" onClick={handlePrev}>
                    <BackIcon />
                </div>
                <h2 className='text-l font-bold mb-4'>Weight Change Over Time</h2>
                <div className="flex w-6 h-6 bg-gray-300 cursor-pointer" onClick={handleNext}>
                    <NextIcon />
                </div>
            </div>

            <div className="h-64 w-full overflow-x-auto">
                <Line data={getChartData()} options={options} />
            </div>
        </div>
    );
};

export default ExerciseStatsWindow;
