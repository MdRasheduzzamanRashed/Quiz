import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const data = useLoaderData();
  console.log(data.data);
  return (
    <div>
      <div className="flex justify-center mt-40">
        <BarChart width={1000} height={500} data={data.data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#8884d8" />
        </BarChart>
      </div>
      <div className="text-center">
        <h3 className="text-xl">Chart: Total questions chart.</h3>
      </div>
    </div>
  );
};

export default Statistics;
