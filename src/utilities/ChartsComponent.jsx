// ChartComponent.js
import React, { useEffect } from 'react';
import { Chart as ChartJS, CategoryScale,ArcElement, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Line, Pie, Doughnut, PolarArea, Radar, Bubble, Scatter } from 'react-chartjs-2';

// Register the necessary components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
const ChartsComponent = ({ type = 'bar', data={}, options={},result }) => {
  // Define a chart mapping to link chart types to the corresponding Chart.js components
  const chartMapping = {
    bar: Bar,
    line: Line,
    pie: Pie,
    doughnut: Doughnut,
    polarArea: PolarArea,
    radar: Radar,
    bubble: Bubble,
    scatter: Scatter,
  };

  // Select the appropriate chart component based on the "type" prop
  const Chart = chartMapping[type] || Bar;

console.log('this is running',type)
useEffect(()=>{},[result])
  return (
    <div style={{ width: '100%', height: (type=="doughnut"?"":'400px') }}>
      <Chart data={data} options={options} />
    </div>
  );
};

export default ChartsComponent;
