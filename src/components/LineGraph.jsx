import React from 'react';
import Plot from 'react-plotly.js';

const LineGraph = ({ data }) => {
  const years = data.map(item => item.year);

  return (
    <Plot
      data={[
        {
          x: years,
          y: data.map(item => item.numJobs),
          type: 'scatter',
          mode: 'lines+markers',
          name: 'Number of Jobs',
          yaxis: 'y',
          marker: { color: 'blue' },
        },
        {
          x: years,
          y: data.map(item => item.avgSalary),
          type: 'scatter',
          mode: 'lines+markers',
          name: 'Average Salary',
          yaxis: 'y2',
          marker: { color: 'red' },
        },
      ]}
      layout={{
        width: 800,
        height: 400,
        title: 'Number of Jobs and Average Salary',
        xaxis: { title: 'Year' },
        yaxis: { title: 'Number of Jobs', side: 'left', color: 'blue' },
        yaxis2: { title: 'Average Salary', side: 'right', overlaying: 'y', color: 'red' },
      }}
    />
  );
};

export default LineGraph;
