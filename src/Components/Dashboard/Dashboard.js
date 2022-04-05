import axios from "axios";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

const Dashboard = () => {
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    axios.get("data.json").then((data) => {
      const loadedData = data.data;
      const totalData = loadedData.map((chart) => {
        const cd = {
          month: chart.month,
          sell: parseInt(chart.sell),
          investment: parseInt(chart.investment),
          revenue: parseInt(chart.revenue),
        };
        return cd;
      });
      setCharts(totalData);
    });
  }, []);

  return (
    <section>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-6 items-center justify-items-center my-8">
        <div className="border rounded-xl">
          <h1 className="py-2 text-center font-bold font-mono text-3xl">
            Bar Chart
          </h1>
          <BarChart width={700} height={400} data={charts}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sell" fill="#82ca9d"></Bar>
            <Bar dataKey="revenue" fill="#10559A"></Bar>
            <Bar dataKey="investment" fill="#DB4C77"></Bar>
          </BarChart>
        </div>
        <div>
          <LineChart
            width={600}
            height={400}
            data={charts}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-6 items-center justify-items-center my-8">
        <div>
          <LineChart
            width={600}
            height={400}
            data={charts}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
          </LineChart>
        </div>
        <div className="border rounded-xl">
          <h1 className="py-2 text-center font-bold font-mono text-3xl">
            Bar Chart
          </h1>
          <BarChart width={700} height={400} data={charts}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sell" fill="#82ca9d"></Bar>
            <Bar dataKey="revenue" fill="#10559A"></Bar>
            <Bar dataKey="investment" fill="#DB4C77"></Bar>
          </BarChart>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
