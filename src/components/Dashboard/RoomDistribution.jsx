const RoomDistribution = ({ roomData }) => {
    // Improved doughnut chart calculation
    const createDoughnutChart = () => {
      const radius = 35;
      const circumference = 2 * Math.PI * radius;
      let cumulativePercentage = 0;
  
      return roomData.map((room) => {
        const strokeDasharray = `${(room.value / 100) * circumference} ${circumference}`;
        const strokeDashoffset = -cumulativePercentage * circumference / 100;
        cumulativePercentage += room.value;
  
        // Color mapping for SVG
        const colorMap = {
          'bg-blue-500': '#3B82F6',
          'bg-green-500': '#10B981',
          'bg-purple-500': '#8B5CF6',
          'bg-orange-500': '#F97316'
        };
  
        return (
          <circle
            key={`chart-segment-${room.id}`}
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke={colorMap[room.color] || '#6B7280'}
            strokeWidth="8"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            transform="rotate(-90 50 50)"
            className="transition-all duration-300"
          />
        );
      });
    };
  
    const totalBookedPercentage = roomData.reduce((sum, room) => sum + room.value, 0);
  
    return (
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">Room Distribution</h2>
        
        {/* Improved Doughnut Chart */}
        <div className="relative w-40 h-40 mx-auto mb-6">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="transparent"
              stroke="#E5E7EB"
              strokeWidth="8"
            />
            {/* Data segments */}
            {createDoughnutChart()}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-gray-800">
              {totalBookedPercentage}%
            </span>
            <span className="text-xs text-gray-500">Booked</span>
          </div>
        </div>
        
        {/* Legend */}
        <div className="space-y-3">
          {roomData.map((room) => (
            <div key={room.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${room.color} mr-3 flex-shrink-0`} />
                <span className="text-sm text-gray-700 truncate">{room.name}</span>
              </div>
              <span className="text-sm font-medium text-gray-800 ml-2">
                {room.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default RoomDistribution;