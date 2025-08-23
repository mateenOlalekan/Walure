import {  LogOut, Bell, MessageSquare, Download, Filter,CheckCircle, XCircle, Clock4 } from "lucide-react";
import { useState } from "react";

export default function Main() {
    const [selected, setSelected] = useState();

  // Sample data for payment history
  const paymentHistory = [
    { id: 1, invoice: "INV-001", date: "2023-05-06", room: "Shared Room", amount: "$120", status: "Successful" },
    { id: 2, invoice: "INV-002", date: "2023-05-07", room: "Private Room", amount: "$250", status: "Pending" },
    { id: 3, invoice: "INV-003", date: "2023-05-08", room: "Private Room", amount: "$180", status: "Failed" },
    { id: 4, invoice: "INV-004", date: "2023-05-09", room: "Conference Room", amount: "$350", status: "Successful" },
  ];

  // Sample data for bookings
  const bookings = [
    { id: 1, title: "Conference Room A", date: "Today, 2:00 PM", status: "Confirmed", type: "Meeting" },
    { id: 2, title: "Private Office 302", date: "Tomorrow, 10:00 AM", status: "Upcoming", type: "Work" },
    { id: 3, title: "Event Hall", date: "May 15, 6:00 PM", status: "Confirmed", type: "Event" },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case "Successful": return "bg-green-100 text-green-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Failed": return "bg-red-100 text-red-800";
      case "Confirmed": return "bg-blue-100 text-blue-800";
      case "Upcoming": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case "Successful": return <CheckCircle className="w-4 h-4" />;
      case "Pending": return <Clock4 className="w-4 h-4" />;
      case "Failed": return <XCircle className="w-4 h-4" />;
      default: return <CheckCircle className="w-4 h-4" />;
    }
  };

  // Simple calendar component
  const SimpleCalendar = () => {
    const [currentDate, setCurrentDate] = useState();
    const today = new Date();
    
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const getDaysInMonth = (date) => {
      const year = date.getFullYear();
      const month = date.getMonth();
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const daysInMonth = lastDay.getDate();
      const startingDayOfWeek = firstDay.getDay();
      
      const days = [];
      
      // Add empty cells for days before the first day of the month
      for (let i = 0; i < startingDayOfWeek; i++) {
        days.push(null);
      }
      
      // Add days of the month
      for (let day = 1; day <= daysInMonth; day++) {
        days.push(new Date(year, month, day));
      }
      
      return days;
    };

    const days = getDaysInMonth(currentDate);

    const prevMonth = () => {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    };

    const nextMonth = () => {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    };

    return (
      <div className="bg-white p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <button onClick={prevMonth} className="p-1 hover:bg-gray-200 rounded">
            ←
          </button>
          <h3 className="font-semibold">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          <button onClick={nextMonth} className="p-1 hover:bg-gray-200 rounded">
            →
          </button>
        </div>
        
        <div className="grid grid-cols-7 gap-1 mb-2">
          {daysOfWeek.map(day => (
            <div key={day} className="text-center text-xs font-medium text-gray-500 p-1">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => (
            <div key={index} className="aspect-square">
              {day && (
                <button
                  onClick={() => setSelected(day)}
                  className={`w-full h-full text-xs rounded hover:bg-blue-100 flex items-center justify-center ${
                    selected && selected.toDateString() === day.toDateString()
                      ? 'bg-blue-500 text-white'
                      : day.toDateString() === today.toDateString()
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-700'
                  }`}
                >
                  {day.getDate()}
                </button>
              )}
            </div>
          ))}
        </div>
        
        <p className="mt-2 text-xs text-gray-500 text-center">
          {selected
            ? `Selected: ${selected.toLocaleDateString()}`
            : "Pick a day."}
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-4 lg:gap-6 p-4 lg:p-6 min-h-screen">
        
        {/* Left Section - Main Content */}
        <div className=" lg:col-span-5 overflow-y-auto">
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Welcome Section */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
              <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                <div className="w-full lg:w-auto">
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Hello, John 👋</h1>
                  <p className="text-gray-600 mt-1 text-sm sm:text-base">Ready to explore available spaces and manage your bookings?</p>
                </div>
                
                <div className="w-full lg:w-auto lg:max-w-md bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-4 sm:p-6 text-white">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h2 className="text-lg sm:text-xl font-bold mb-2">Special Offer! 🎉</h2>
                      <p className="text-blue-100 mb-4 text-sm sm:text-base">Get 20% off on conference room bookings this month. Limited time offer!</p>
                      <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors text-sm sm:text-base">
                        Claim Offer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Weekly Usage Card */}
              <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 flex flex-col items-center">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-4">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="8"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray="251.2"
                      strokeDashoffset="25.12" // 90% progress
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl sm:text-2xl font-bold text-blue-600">90%</span>
                    <span className="text-xs sm:text-sm text-gray-500">Usage</span>
                  </div>
                </div>
                <h3 className="text-sm sm:text-lg font-semibold text-gray-800">Weekly Usage</h3>
                <p className="text-xs sm:text-sm text-gray-600 text-center mt-1">Check-ins Record</p>
              </div>

              {/* Check Out Card */}
              <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 flex flex-col items-center justify-center group hover:shadow-md transition-all duration-200">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">2,342</div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-blue-200 transition-colors">
                  <LogOut className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <h3 className="text-sm sm:text-lg font-semibold text-gray-800">Check Out</h3>
                <p className="text-xs sm:text-sm text-gray-600">Total check-outs</p>
              </div>
            </div>

            {/* Payment History */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-4">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Payment History</h2>
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 px-3 py-2 text-xs sm:text-sm text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    <Filter className="w-4 h-4" />
                    Filter
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 text-xs sm:text-sm text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    <Download className="w-4 h-4" />
                    Export
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice</th>
                      <th className="px-3 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-3 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room Type</th>
                      <th className="px-3 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-3 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-3 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {paymentHistory.map((payment) => (
                      <tr key={payment.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-3 sm:px-4 py-4 text-xs sm:text-sm font-medium text-gray-900">{payment.invoice}</td>
                        <td className="px-3 sm:px-4 py-4 text-xs sm:text-sm text-gray-600">{payment.date}</td>
                        <td className="px-3 sm:px-4 py-4 text-xs sm:text-sm text-gray-600">{payment.room}</td>
                        <td className="px-3 sm:px-4 py-4 text-xs sm:text-sm text-gray-600">{payment.amount}</td>
                        <td className="px-3 sm:px-4 py-4">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(payment.status)}`}>
                            {getStatusIcon(payment.status)}
                            {payment.status}
                          </span>
                        </td>
                        <td className="px-3 sm:px-4 py-4">
                          <button className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Sidebar */}
        <div className=" lg:col-span-3 overflow-y-auto">
          <div className="flex flex-col gap-4">
            {/* Calendar Section */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
              <div className="flex flex-col items-center">
                <div className="w-full max-w-sm">
                  <SimpleCalendar />
                </div>
              </div>
            </div>

            {/* Notifications and Messages */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
              <div className="flex flex-col gap-6">
                {/* Notifications Section */}
                <div>
                  <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Notifications</h2>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
                        <Bell className="text-blue-600 w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-gray-800 font-medium text-sm sm:text-base truncate">New Notification</p>
                        <p className="text-gray-500 text-xs sm:text-sm">June 16, 2022 - Thursday</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
                        <Bell className="text-blue-600 w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-gray-800 font-medium text-sm sm:text-base truncate">System Update</p>
                        <p className="text-gray-500 text-xs sm:text-sm">June 16, 2022 - Thursday</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Messages Section */}
                <div>
                  <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Messages</h2>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                      <MessageSquare className="text-green-600 w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-gray-800 font-medium text-sm sm:text-base truncate">Upcoming Meeting</p>
                      <p className="text-gray-500 text-xs sm:text-sm">June 16, 2022 - Thursday</p>
                    </div>
                  </div>
                </div>

                {/* Private Section */}
                <div>
                  <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Private</h2>
                  <p className="text-gray-500 text-xs sm:text-sm break-all">
                    {new Date().toString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}