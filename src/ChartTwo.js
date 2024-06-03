import React from 'react';
import Chart from 'react-apexcharts';

const SplineAreaTwo = () => {
  const series = [
    {
      name: 'Cash',
      data: [30, 60, 40, 55, 55, 55, 55],
    },
    {
      name: 'Bank',
      data: [40, 70, 35, 45, 30, 50, 65],
    },
    {
      name: 'Paylink',
      data: [45, 50, 35, 45, 50, 50, 50],
    },
  ];

  const options = {
    chart: {
      height: 240, 
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.1,
          stops: [20, 100, 100],
      },
    },
    colors: ['#55BD00', '#006210', '#EBCB00'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'category',
      categories: ['', '', '', '', '', '', ''],
      labels: {
        show: false,
        style: {
          textAlign: 'center', // Center align text
          colors: ['#8C8C8C', '#8C8C8C', '#8C8C8C', '#8C8C8C', '#8C8C8C', '#8C8C8C', '#388E3C'], // Grey for all except Saturday, dark green for Saturday
        },
        formatter: function(val, timestamp, index) {
          return ''; // Return empty string to hide all labels
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
    annotations: {
      points: [
        // Pengeluaran
        {
          x: series[0].data[9],
          y: series[0].data[6],
          marker: {
            size: 6,
            fillColor: '#ffffff',
            strokeWidth: 3,
            strokeColor: '#55BD00',
          },
        },
        // Pendapatan
        {
          x: series[1].data[9],
          y: series[1].data[6],
          marker: {
            size: 6,
            fillColor: '#ffffff',
            strokeWidth: 3,
            strokeColor: '#006210',
          },
        },
        {
            x: series[2].data[9],
            y: series[2].data[6],
            marker: {
              size: 6,
              fillColor: '#ffffff',
              strokeWidth: 3,
              strokeColor: '#EBCB00',
            },
          },
      ],
    },
    grid: {
      show: true, // Show y-axis grid lines
      strokeDashArray: 3, // Make the grid lines dashed
      borderColor: '#e0e0e0', // Color of the grid lines
      position: 'back', // Put the grid lines behind the chart data
      xaxis: {
        lines: {
          show: false, // Hide grid lines on the x-axis
        },
      },
    }
  };

  // Hide all labels
  options.xaxis.labels.style.colors = ['', '', '', '', '', '', ''];

  return (
    <div id="chart" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Chart options={options} series={series} type="area" height={220} width={525} />
    </div>
  );
};

export default SplineAreaTwo;
