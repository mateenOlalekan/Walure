import { Calendar, Clock, User } from "lucide-react";
import React from "react";


const upcomingBookings  = [
    {
        id: 1,
        customer: "John Doe",
        room: "Deluxe Suite",
        checkIn: "2025-08-25",
        checkOut: "2025-08-28",
      },
      {
        id: 2,
        customer: "Sarah Lee",
        room: "Executive Room",
        checkIn: "2025-08-27",
        checkOut: "2025-08-29",
      },
      {
        id: 3,
        customer: "Michael Smith",
        room: "Standard Room",
        checkIn: "2025-08-30",
        checkOut: "2025-09-02",
      },
      {
        id: 4,
        customer: "Emily Johnson",
        room: "Presidential Suite",
        checkIn: "2025-09-01",
        checkOut: "2025-09-05",
      },
      {
        id: 5,
        customer: "David Wilson",
        room: "Junior Suite",
        checkIn: "2025-09-03",
        checkOut: "2025-09-06",
      },
      {
        id: 6,
        customer: "Olivia Martinez",
        room: "Deluxe Suite",
        checkIn: "2025-09-04",
        checkOut: "2025-09-07",
      },
      {
        id: 7,
        customer: "James Brown",
        room: "Executive Room",
        checkIn: "2025-09-06",
        checkOut: "2025-09-09",
      },
      {
        id: 8,
        customer: "Sophia Taylor",
        room: "Standard Room",
        checkIn: "2025-09-07",
        checkOut: "2025-09-10",
      },


];

// Helper function to format date for display
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric' 
  });
};

export default function UpcomingBookingsCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4">
        <Calendar className="w-5 h-5" />
        <h2 className="text-lg font-semibold">Upcoming Bookings</h2>
      </div>

      {/* Table Container */}
      <div className="p-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-600 border-b border-gray-200">
              <th className="pb-3 text-left font-medium">Customer</th>
              <th className="pb-3 text-left font-medium">Room</th>
              <th className="pb-3 text-left font-medium">Check-In</th>
              <th className="pb-3 text-left font-medium">Check-Out</th>
            </tr>
          </thead>
          <tbody>
            {upcomingBookings.map((booking, index) => (
              <tr
                key={booking.id}
                className={`hover:bg-gray-50 transition-colors duration-200 ${
                  index !== upcomingBookings.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <td className="py-4">
                  <div className="flex items-center gap-2 font-medium text-gray-800">
                    <User className="w-4 h-4 text-gray-500" />
                    {booking.customer}
                  </div>
                </td>
                <td className="py-4 text-gray-700 font-medium">
                  {booking.room}
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-green-500" />
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium">
                      {formatDate(booking.checkIn)}
                    </span>
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-red-500" />
                    <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-700 font-medium">
                      {formatDate(booking.checkOut)}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer */}
        <div className="mt-6 text-right">
          <button className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200 hover:underline">
            View All Bookings →
          </button>
        </div>
      </div>
    </div>
  );
}