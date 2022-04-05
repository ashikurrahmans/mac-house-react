import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Legend,
  Bar,
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

const population = [
  { city: "Dhaka", age: 0, sex: 1, people: 1483789 },
  { city: "Rajsahi", age: 0, sex: 2, people: 1450376 },
  { city: "Bogura", age: 5, sex: 2, people: 1359668 },
  { city: "Jamalpu", age: 5, sex: 1, people: 1411067 },
  { city: "Cumilla", age: 10, sex: 1, people: 1260099 },
  { city: "Sylhet", age: 10, sex: 2, people: 1216114 },
  { city: "Rongpur", age: 15, sex: 1, people: 1077133 },
  { city: "Jalokathi", age: 15, sex: 2, people: 1110619 },
  { city: "Noakhali", age: 20, sex: 1, people: 1017281 },
];

const Dashboard = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1">
      <LineChart
        width={700}
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

      <BarChart width={700} height={400} data={population}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="red" />
      </BarChart>

      {/* Area Chart Start  */}
    </div>
  );
};

export default Dashboard;
