import React from "react";
import {
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

const EarningSummary = () => {
  const data = [
    { month: "May", current: 220000, last: 120000 },
    { month: "Jun", current: 280000, last: 200000 },
    { month: "Jul", current: 160000, last: 180000 },
    { month: "Aug", current: 240000, last: 190000 },
    { month: "Sep", current: 260000, last: 200000 },
    { month: "Oct", current: 285000, last: 170000 },
  ];

  return (
    <div className="bg-white p-4 rounded-2xl shadow w-full h-1/3 ">
      <div className="flex justify-between">
        <div className="flex">
          <h3 className="text-xs lg:text-sm font-semibold">Earning Summary</h3>
          <select className="px-2 py-1 text-xs">
            <option>Mar 2022 – Oct 2022</option>
            <option>Jan 2022 – Jun 2022</option>
            <option>Last 6 months</option>
            <option>Last 12 months</option>
          </select>
        </div>

        <div className="flex gap-6">
          <div className="flex items-center gap-2 text-sm">
            <p className="w-3 h-3 rounded-full bg-blue-500"></p>
            <span>Last 6 months</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <p className="w-3 h-3 rounded-full bg-gray-300"></p>
            <span>Same Period last year</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="80%" >
        <AreaChart data={data}>
          <CartesianGrid horizontal={false} strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(v) => `$${v / 1000}k`} />
          <Tooltip formatter={(v) => `$${v.toLocaleString()}`} />

          {/* Gradient for blue area */}
          <defs>
            <linearGradient id="colorCurrent" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          {/* Blue area with gradient */}
          <Area
            type="monotone"
            dataKey="current"
            stroke="#2563eb"
            fill="url(#colorCurrent)"
            strokeWidth={2}
          />

          {/* Gray dashed comparison line */}
          <Line
            type="monotone"
            dataKey="last"
            stroke="#6b7280"
            strokeDasharray="3 3"
            strokeWidth={2}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningSummary;
