import React from "react";
import { LineChart, Line, XAxis, Tooltip, YAxis, Bar, ComposedChart, CartesianGrid, Legend } from "recharts";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const statisticsData = useLoaderData();
  const data = statisticsData.data;
  return (
    <section className="container d-flex mt-4 justify-content-center">
      <div className="my-3">
        <h3 className="highlight">SimpleLineChart of Total</h3>
        <div className="my-5">
          <LineChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis />
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="total" stroke="#7c4dff" />
          </LineChart>
        </div>
      </div>

      <div className="my-3">
        <h3 className="highlight">ComposedChart of Total</h3>
        <div className="my-5">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="total" stroke="#ff7300" />
        </ComposedChart>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
