import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: 'Subscription',
    Expense: 4000,
    Income: 2400,
    amt: 2400,
  },
  {
    name: 'Misc. expenses',
    Expense: 3000,
    Income: 1398,
    amt: 2210,
  },
  {
    name: 'Other Income',
    Expense: 2000,
    Income: 9800,
    amt: 2290,
  },
  {
    name: 'Travel',
    Expense: 2780,
    Income: 3908,
    amt: 2000,
  },
 
];

export const Analysis = () => {
  return (
    <>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>

            <div style={{width: "80%", height: "70%", border: "1px solid gray", background: "#d2cf72", marginBottom: "170px", borderRadius: "20px"}}>
            <h1>Analysis</h1>
            <LineChart
      width={900}
      height={500}
      data={data}
      margin={{
        top: 50,
        right: 30,
        left: 20,
        bottom: 2
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Expense"
        stroke="#b1100b"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="Income" stroke="black" />
    </LineChart>
    </div>
    </div>
    </>
  )
}
