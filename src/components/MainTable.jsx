import React, { useState } from 'react';
import { Table, Modal } from 'antd';
import mainTableData from '../data/main_table_data.json';
import jobData2020 from '../data/job_data_2020.json';
import jobData2021 from '../data/job_data_2021.json';
import jobData2022 from '../data/job_data_2022.json';
import jobData2023 from '../data/job_data_2023.json';
import jobData2024 from '../data/job_data_2024.json';
import LineGraph from './LineGraph';

const jobDataFiles = {
  2020: jobData2020,
  2021: jobData2021,
  2022: jobData2022,
  2023: jobData2023,
  2024: jobData2024,
};

const MainTable = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [jobData, setJobData] = useState([]);

  const columns = [
    { title: 'Year', dataIndex: 'year', key: 'year', sorter: (a, b) => a.year - b.year },
    { title: 'Number of Jobs', dataIndex: 'numJobs', key: 'numJobs', sorter: (a, b) => a.numJobs - b.numJobs },
    { title: 'Average Salary (USD)', dataIndex: 'avgSalary', key: 'avgSalary', sorter: (a, b) => a.avgSalary - b.avgSalary },
  ];

  const handleRowClick = (record) => {
    setSelectedYear(record.year);
    setJobData(jobDataFiles[record.year]);
  };

  const jobColumns = [
    { title: 'Job Title', dataIndex: 'title', key: 'title' },
    { title: 'Number of Jobs', dataIndex: 'count', key: 'count' },
  ];

  return (
    <div>
      <Table 
        dataSource={mainTableData} 
        columns={columns} 
        rowKey="year" 
        onRow={(record) => ({ onClick: () => handleRowClick(record) })}
      />
      <LineGraph data={mainTableData} />
      <Modal
        title={`Job Data for ${selectedYear}`}
        visible={!!selectedYear}
        onCancel={() => setSelectedYear(null)}
        footer={null}
      >
        <Table dataSource={jobData} columns={jobColumns} rowKey="title" />
      </Modal>
    </div>
  );
};

export default MainTable;
