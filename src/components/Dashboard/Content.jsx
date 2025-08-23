import { useState } from "react";
import ChartComponent from "./ChartComponent";
import OccupancyRate from "./OccupancyRate";
import RecentBookings from "./RecentBookings";
import StatCard from "./StatsCard";
import RoomDistribution from "./RoomDistribution";

export default function Main() {
  const{stats,setStats} = useState([
    { 
      id: 'total-booking',
      value: 1054, 
      label: "Total Booking", 
      icon: "CalendarCheck2", 
      change: 12.5, 
      color: "blue" 
    },
    { 
      id: 'scheduled-rooms',
      value: 2555, 
      label: "Scheduled Rooms", 
      icon: "Home", 
      change: 8.2, 
      color: "green" 
    },
    { 
      id: 'check-in',
      value: 782, 
      label: "Check-In", 
      icon: "LogIn", 
      change: -3.4, 
      color: "purple" 
    },
    { 
      id: 'check-out',
      value: 543, 
      label: "Check-Out", 
      icon: "LogOut", 
      change: 5.7, 
      color: "orange" 
    }
  ]);

  const {roomData,setRoomData} = useState([
    { id: 'private', name: "Private Room", value: 45, color: "bg-blue-500" },
    { id: 'shared', name: "Shared Room", value: 30, color: "bg-green-500" },
    { id: 'conference', name: "Conference Room", value: 15, color: "bg-purple-500" },
  ]);

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            value={stat.value}
            label={stat.label}
            icon={stat.icon}
            change={stat.change}
            color={stat.color}
          />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Room Distribution */}
        <RoomDistribution roomData={roomData} />
        
        {/* Chart Section */}
        <div className="lg:col-span-2">
          <ChartComponent />
        </div>
      </div>

      {/* Bottom Section Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Occupancy Rate */}
        <div className="lg:col-span-1">
          <OccupancyRate />
        </div>
        
        {/* Recent Bookings */}
        <div className="lg:col-span-2">
          <RecentBookings />
        </div>
      </div>
    </div>
  );
}