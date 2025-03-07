"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const chartData = [
  { month: "Jan", thisMonth: 5000, previousMonth: 6000 },
  { month: "Feb", thisMonth: 7000, previousMonth: 7500 },
  { month: "Mar", thisMonth: 6500, previousMonth: 7200 },
  { month: "Apr", thisMonth: 7200, previousMonth: 7800 },
  { month: "May", thisMonth: 6800, previousMonth: 7400 },
  { month: "Jun", thisMonth: 7300, previousMonth: 7900 },
  { month: "Jul", thisMonth: 7600, previousMonth: 8000 },
  { month: "Aug", thisMonth: 7800, previousMonth: 8200 },
  { month: "Sep", thisMonth: 8100, previousMonth: 8500 },
  { month: "Oct", thisMonth: 8300, previousMonth: 8700 },
  { month: "Nov", thisMonth: 8500, previousMonth: 8900 },
  { month: "Dec", thisMonth: 8700, previousMonth: 9100 },
];

const NetSalesChart = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>NET SALES</CardTitle>
        <div className="flex justify-between text-lg font-semibold mt-2">
          <div className="text-red-500">
            This Month <br /> <span className="text-2xl">$8700.00</span>
          </div>
          <div className="text-gray-500">
            Previous Month <br /> <span className="text-2xl">$9100.00</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={chartData} margin={{ left: 10, right: 10 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis hide />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="previousMonth"
              stroke="#D1D5DB"
              strokeWidth={3}
              dot={{ r: 4, fill: "#D1D5DB" }}
            />
            <Line
              type="monotone"
              dataKey="thisMonth"
              stroke="#EF4444"
              strokeWidth={3}
              dot={{ r: 4, fill: "#EF4444" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default NetSalesChart;
