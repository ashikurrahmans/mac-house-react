import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Ashikur Rahman", age: 22, role: 45, earning: 9400 },
  { name: "Rahul Hasan", age: 20, role: 14, earning: 400 },
  { name: "Shafiqul Islam", age: 18, role: 13, earning: 2400 },
  { name: "Tanvir Sahriar", age: 34, role: 28, earning: 1200 },
  { name: "Sohel Tanvir", age: 25, role: 10, earning: 2444 },
  { name: "Fardin Sahriar", age: 15, role: 11, earning: 1400 },
  { name: "Nosta Logic", age: 29, role: 13, earning: 3400 },
  { name: "Ashraful islam", age: 13, role: 18, earning: 1400 },
];
const Dashboard = () => {
  return (
    <div>
      <LineChart
        width={600}
        height={400}
        data={data}
        margin={{ top: 50, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="age" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Dashboard;
