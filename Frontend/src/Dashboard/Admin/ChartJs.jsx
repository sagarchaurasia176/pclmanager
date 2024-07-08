import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import LeaderData from './LeaderData';

const DashboardChart = () => {
  const chartRef = useRef(null);
  const myChart = useRef(null);


  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy previous chart instance if it exists
    if (myChart.current) {
      myChart.current.destroy();
    }

    myChart.current = new Chart(ctx, {
      type: 'bar', // Change to 'line', 'pie', etc.
      data: {
        labels: ['cse', 'AI ml', 'Data science', 'Cyber-Security', 'Cse devops', ' cse tcs'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Cleanup function to destroy the chart instance when the component unmounts
    return () => {
      if (myChart.current) {
        myChart.current.destroy();
      }
    };
  }, []);

  return (
    <div className=" grid grid-cols-2 mx-auto   p-4 ">
     <div className="bg-white shadow rounded-lg  p-6">
    <LeaderData/>
     </div>
      <div className="bg-white shadow rounded-lg  p-6">
        <h2 className="text-2xl font-semibold mb-4">Student Registered Chart</h2>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default DashboardChart;
