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

const data = [
  { month: "Jan", rate: 20 },
  { month: "Feb", rate: 60 },
  { month: "Mar", rate: 50 },
  { month: "Apr", rate: 80 },
  { month: "May", rate: 60 },
];

export default function OccupancyRate() {
  return (
    <div className="flex justify-center items-center p-6 bg-white rounded-2xl shadow-lg w-full">
      <div className="flex flex-col items-center w-full">
        {/* Header */}
        <div className="mb-4 text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Occupancy Rate
          </h2>
          <p className="text-sm text-gray-500">
            Monthly percentage of rooms booked
          </p>
        </div>

        {/* Chart */}
        <div className="w-full max-w-2xl">
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={data}>
              <defs>
                <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.9} />
                  <stop offset="95%" stopColor="#4f46e5" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="4 4" stroke="#e5e7eb" />
              <XAxis dataKey="month" tick={{ fill: "#6b7280" }} />
              <YAxis tick={{ fill: "#6b7280" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  fontSize: "14px",
                }}
                formatter={(value) => [`${value}%`, "Rate"]}
              />
              <Line
                type="monotone"
                dataKey="rate"
                stroke="url(#colorRate)"
                strokeWidth={3}
                dot={{ r: 5, strokeWidth: 2, fill: "#4f46e5" }}
                activeDot={{ r: 7, fill: "#4338ca" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
