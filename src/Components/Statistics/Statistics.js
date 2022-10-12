import React from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const data = useLoaderData();
  console.log(data.data);
  return (
    <div className="flex flex-col justify-center items-center my-24">
      <div className="">
        <BarChart width={400} height={250} data={data.data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#8884d8" />
        </BarChart>
      </div>
      <div>
        <h3 className="text-xl">Chart: Total questions chart.</h3>
      </div>
    </div>
  );
};

export default Statistics;
