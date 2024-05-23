import React from 'react';
import './App.css';
import 'antd/dist/reset.css'; 
import MainTable from './components/MainTable'; 

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Jobs & Salaries (2020-2024)</h1>
      <MainTable />
    </div>
  );
};

export default App;
