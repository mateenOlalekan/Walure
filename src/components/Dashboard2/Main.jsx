import { useState } from "react";

import StatCard from "../Dashboard/StatsCard";
import BookStat from "./BookingStat";
import Occupancy from "./OccupancyRate";
import BookedRooms from "./BookedRooms";
import StatusTable from "./StatusTable";
import Upcoming from "./Upcoming";


export default function Main() {
  const [stats] = useState([
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
        <BookStat/>
        <BookedRooms/>
        <Occupancy/>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3">
        <Upcoming/>
        <StatusTable/>
      </div>

    </div>
  );
}