import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const report = [
  { id: 1, name: "Target", doller: "12,365" },
  { id: 2, name: "Last Week", doller: "365" },
  { id: 3, name: "Last Month", doller: "8500" },
];

const data = [
  {
    name: "Jan",
    total: 2400,
  },
  {
    name: "Feb",

    total: 1398,
  },
  {
    name: "Mar",
    total: 9800,
  },
  {
    name: "Apr",
    total: 3908,
  },
  {
    name: "May",
    total: 4800,
  },
  {
    name: "Jun",
    total: 3800,
  },
  {
    name: "Jul",
    total: 9000,
  },
  {
    name: "Aug",

    total: 4300,
  },
  {
    name: "Sep",
    total: 7000,
  },
  {
    name: "Oct",
    total: 5000,
  },
  {
    name: "Nov",
    total: 4000,
  },
  {
    name: "Dec",
    total: 2000,
  },
];
const ReportChart = () => {
  return (
    <div className="flex gap-5 mx-5 my-5">
      <div className="border border-gray-300 rounded-lg p-4  max-w-md bg-white shadow-sm w-full">
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl text-gray-600">Revenue Report</p>
          <HiDotsHorizontal className="texl-2xl text-gray-400 cursor-pointer" />
        </div>
        <div className="flex justify-between py-3 mb-4">
          {report.map((item) => (
            <div className="flex flex-col justify-center items-center" key={item.id}>
              <p className=" font-medium text-gray-400">{item.name}</p>
              <p className=" font-semibold text-xl text-gray-700">
                ${item.doller}
              </p>
            </div>
          ))}
        </div>
        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 20,
                left: 10,
                bottom: 5,
              }}
              barSize={20}
            >
              <XAxis
                dataKey="name"
                scale="point"
                padding={{ left: 5, right: 5 }}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar
                dataKey="total"
                fill="#52a888"
                background={{ fill: "#a7c4b9" }}
                barSize={5}
              
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
     
    </div>
  );
};

export default ReportChart;
