import { MoreHorizontal } from "lucide-react";

const OccupancyRate = () => {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-2xl shadow-lg">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-semibold">Occupancy Rate</h3>
          <p className="text-blue-100 text-sm">Current space utilization</p>
        </div>
        <MoreHorizontal className="w-5 h-5 text-blue-200" />
      </div>
      
      <div className="text-center mb-6">
        <div className="inline-block relative">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="white"
              strokeWidth="8"
              strokeDasharray="251.2"
              strokeDashoffset="75.36" // 70% filled
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold">70%</span>
            <span className="text-xs text-blue-200">Utilization</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold">24</div>
          <div className="text-xs text-blue-200">Rooms Occupied</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">10</div>
          <div className="text-xs text-blue-200">Rooms Available</div>
        </div>
      </div>
    </div>
  );
};

export default OccupancyRate;