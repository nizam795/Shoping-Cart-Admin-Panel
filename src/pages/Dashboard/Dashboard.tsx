// import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import "./dashboard.css";

import { Cell, Pie, PieChart } from "recharts";

import ReportChart from "./ReportChart";

const data = [
  { name: "Group A", value: 800 },
  { name: "Group B", value: 300 },
    
];
const data1 = [
  { name: "Group A", value: 500 },
  { name: "Group B", value: 300 },
]
const data2 = [
  { name: "Group A", value: 200 },
  { name: "Group B", value: 500 },
    
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const COLORS1 = ["#FFBB28", "#FF8042"];
const COLORS2 = ["#6e8574", "#63a68d"];





const Dashboard = () => {
  return (
    <>
    <Breadcrumbs title="Welcome!" />
      <div className="dashboard-container ">
        <div className="data-box h-35 w-[30%] bg-white">
          <PieChart width={150} height={150}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
              
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${entry.name}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
          <div className="user-content">
            <h2 className="text-2xl font-bold text-gray-600 text-end">122</h2>
            <p className="font-medium">New Customers</p>
          </div>
        </div>
         <div className="data-box h-35 w-[30%] bg-white ">
          <PieChart width={150} height={150}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
            >
              {data1.map((entry, index) => (
                <Cell
                  key={`cell-${entry.name}`}
                  fill={COLORS1[index % COLORS1.length]}
                />
              ))}
            </Pie>
          </PieChart>
          <div className="user-content">
            <h2 className="text-2xl font-bold text-gray-600 text-end">8574</h2>
            <p className="font-medium">Online Order</p>
          </div>
        </div>
         <div className="data-box h-35 w-[30%] bg-white">
          <PieChart width={150} height={150}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
            >
              {data2.map((entry, index) => (
                <Cell
                  key={`cell-${entry.name}`}
                  fill={COLORS2[index % COLORS2.length]}
                />
              ))}
            </Pie>
          </PieChart>
          <div className="user-content">
            <h2 className="text-2xl font-bold text-gray-600 text-end">$8574</h2>
            <p className="font-medium">Revenue</p>
          </div>
        </div>     
      </div>
      <ReportChart />
    </>
  );
};

export default Dashboard;
