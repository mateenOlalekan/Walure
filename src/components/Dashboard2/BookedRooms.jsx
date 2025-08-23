
import { BedDouble, Lock, Users } from "lucide-react";
import { useEffect, useState } from "react";

export default function BookedRooms() {
  // Example room stats
  const totalRooms = 120;
  const privateRooms = 45;
  const publicRooms = 75;

  // State for animated progress
  const [progress, setProgress] = useState({
    total: 0,
    private: 0,
    public: 0,
  });

  // Animate progress on mount
  useEffect(() => {
    setTimeout(() => {
      setProgress({
        total: (totalRooms / totalRooms) * 100,
        private: (privateRooms / totalRooms) * 100,
        public: (publicRooms / totalRooms) * 100,
      });
    }, 300);
  }, []);

  return (
    <div className="p-6 bg-gray-50 rounded-xl shadow-lg">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Booked Rooms
      </h2>

      {/* Cards as Progress Bars */}
      <div className="grid grid-cols-1 gap-4 mb-6">
        {/* Total Rooms */}
        <div className="bg-white rounded-lg p-4 shadow hover:shadow-md transition">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <BedDouble className="w-6 h-6 text-blue-600" />
              <p className="text-sm font-medium text-gray-700">Total Rooms</p>
            </div>
            <span className="text-sm font-semibold text-gray-800">
              {totalRooms}
            </span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${progress.total}%` }}
            />
          </div>
        </div>

        {/* Private Rooms */}
        <div className="bg-white rounded-lg p-4 shadow hover:shadow-md transition">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Lock className="w-6 h-6 text-green-600" />
              <p className="text-sm font-medium text-gray-700">Private Rooms</p>
            </div>
            <span className="text-sm font-semibold text-gray-800">
              {privateRooms}
            </span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${progress.private}%` }}
            />
          </div>
        </div>

        {/* Public Rooms */}
        <div className="bg-white rounded-lg p-4 shadow hover:shadow-md transition">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-purple-600" />
              <p className="text-sm font-medium text-gray-700">Public Rooms</p>
            </div>
            <span className="text-sm font-semibold text-gray-800">
              {publicRooms}
            </span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-purple-500 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${progress.public}%` }}
            />
          </div>
        </div>
      </div>

      {/* Legend Section */}
      <div className="flex flex-col gap-2 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <span>Private Rooms</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-purple-500"></span>
          <span>Public Rooms</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-500"></span>
          <span>Total Rooms</span>
        </div>
      </div>
    </div>
  );
}
