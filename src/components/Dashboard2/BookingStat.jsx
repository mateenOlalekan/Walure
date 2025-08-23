import React, { useEffect, useState } from "react";
import { MoreHorizontal } from "lucide-react";

const ProgressCircle = ({ percentage, label, size = 120 }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const [progress, setProgress] = useState(0);

  // Animate on mount
  useEffect(() => {
    const timeout = setTimeout(() => setProgress(percentage), 200);
    return () => clearTimeout(timeout);
  }, [percentage]);

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        className="w-full h-full transform -rotate-90"
        viewBox="0 0 100 100"
      >
        <defs>
          <linearGradient id="circleGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>

        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="8"
        />

        {/* Progress circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke="url(#circleGradient)"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-700 ease-out"
        />
      </svg>

      {/* Text inside circle */}
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-2xl sm:text-3xl font-bold">{progress}%</span>
        <span className="text-xs sm:text-sm text-blue-200">{label}</span>
      </div>
    </div>
  );
};

const OccupancyRate = () => {
  return (
    <div className="flex flex-col bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-2xl shadow-lg w-full max-w-lg mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Occupancy Overview</h2>
        <button className="p-1 rounded-full hover:bg-white/10 transition">
          <MoreHorizontal className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* First Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="flex justify-center">
          <ProgressCircle percentage={70} label="Utilization" />
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="text-4xl font-bold">24</div>
          <div className="text-sm text-blue-200">Rooms Occupied</div>
          <p className="mt-2 text-xs text-blue-300">
            Out of 34 total rooms available
          </p>
        </div>
      </div>

      {/* Second Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex justify-center">
          <ProgressCircle percentage={85} label="Satisfaction" />
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="text-4xl font-bold">85%</div>
          <div className="text-sm text-blue-200">Customer Satisfaction</div>
          <p className="mt-2 text-xs text-blue-300">
            Based on recent feedback
          </p>
        </div>
      </div>
    </div>
  );
};

export default OccupancyRate;
