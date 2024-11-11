
import React, { useEffect } from 'react';
import { Chart as ChartJS, CategoryScale,ArcElement, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Line, Pie, Doughnut, PolarArea, Radar, Bubble, Scatter } from 'react-chartjs-2';

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

  const Chart = chartMapping[type] || Bar;

useEffect(()=>{},[result])
  return (
    <div style={{ textAlign:"-webkit-center", width: '100%', height: (type=="doughnut"?"":'400px') }}>
      <Chart  data={data} options={options} />
    </div>
  );
};

export default ChartsComponent;
