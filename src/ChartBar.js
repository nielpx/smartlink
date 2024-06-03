import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = () => {
  const series = [
    {
      name: 'Pengeluaran',
      data: [4.5, 4.5, 4, 4, 4, 4, 4],
    },
    {
      name: 'Pendapatan',
      data: [3.6, 3.6, 2.3, 3.9, 3.8, 2.9, 2.8],
    },
  ];

  const options = {
    chart: {
    parentHeightOffset: 0,
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    colors: ['#006210','#54965F'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    plotOptions: {
       bar: {
          horizontal: false,
          columnWidth: '55%',
          borderRadius: 4, // Set border radius here
          endingShape: 'rounded',
        },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      type: 'category',
      categories: ['', '', '', '', '', '', ''],
      labels: {
        show: true,
        style: {
          textAlign: 'center', // Center align text
          colors: ['#8C8C8C', '#8C8C8C', '#8C8C8C', '#8C8C8C', '#8C8C8C', '#8C8C8C', '#388E3C'], // Grey for all except Saturday, dark green for Saturday
        },
      },
      axisBorder: {
        show: false, // Hide y-axis border lines
      },
      axisTicks: {
        show: false, // Hide y-axis ticks
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false, // Hide y-axis labels
      },
    },
    legend: {
      show: false,
    },
    grid: {
      show: true,
      strokeDashArray: 3, 
      borderColor: '#e0e0e0',
      position: 'back', 
      xaxis: {
        lines: {
          show: false, 
        },
      },
    }
  };

  return (
    <div id="chart" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: "0", margin: "0"}}>
      <Chart options={options} series={series} type="bar" height={220} width={525} />
    </div>
  );
};

export default BarChart;
