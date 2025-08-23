import { Clock } from "lucide-react";

const RecentBookings = () => {
  const bookings = [
    { name: "Conference Room A", time: "9:00 AM - 11:00 AM", status: "Ongoing" },
    { name: "Private Office 302", time: "10:30 AM - 12:30 PM", status: "Upcoming" },
    { name: "Event Hall", time: "1:00 PM - 4:00 PM", status: "Upcoming" },
    { name: "Meeting Room B", time: "2:00 PM - 3:00 PM", status: "Upcoming" }
  ];
  
  const getStatusColor = (status) => {
    switch(status) {
      case "Ongoing": return "bg-green-100 text-green-800";
      case "Upcoming": return "bg-blue-100 text-blue-800";
      case "Completed": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Bookings Status</h3>
          <p className="text-sm text-gray-500">Overiew of last month</p>
        </div>
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">View All</button>
      </div>
      
      <div className="space-y-4">
        {bookings.map((booking, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="font-medium text-gray-800">{booking.name}</div>
                <div className="text-sm text-gray-500">{booking.time}</div>
              </div>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
              {booking.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBookings;