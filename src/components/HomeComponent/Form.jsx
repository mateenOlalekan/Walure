import { useState } from "react";
import { Calendar, MapPin, Building2 } from "lucide-react";

export default function HeroForm() {
  const [bookingForm, setBookingForm] = useState({
    location: "",
    service: "",
    date: "",
  });

  // Booking handlers
  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (bookingForm.location && bookingForm.service && bookingForm.date) {
      alert(
        `Booking submitted for ${bookingForm.service} at ${bookingForm.location} on ${bookingForm.date}`
      );
      setBookingForm({ location: "", service: "", date: "" });
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="mt-8 lg:mt-12 w-full lg:max-w-xs max-w-md mx-auto lg:mx-0 lg:absolute lg:left-8 lg:bottom-8">
      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-white/20">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-purple-500" />
          Find Your Workspace
        </h2>

        <form onSubmit={handleBookingSubmit} className="space-y-2">
          {/* Service */}
          <div className="relative">
            <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <select
              name="service"
              value={bookingForm.service}
              onChange={handleBookingChange}
              className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none text-sm sm:text-base"
              required
            >
              <option value="">Select room type</option>
              <option value="private-office">Private Office</option>
              <option value="dedicated-desk">Dedicated Desk</option>
              <option value="hot-desk">Hot Desk</option>
              <option value="meeting-room">Meeting Room</option>
              <option value="conference-room">Conference Room</option>
              <option value="event-space">Event Space</option>
            </select>
          </div>

          {/* Location */}
          <div className="relative">
            <Building2 className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <select
              name="location"
              value={bookingForm.location}
              onChange={handleBookingChange}
              className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none text-sm sm:text-base"
              required
            >
              <option value="">Location</option>
              <option value="Ikorodu, Lagos">Ikorodu, Lagos</option>
              <option value="Abuja">Abuja</option>
              <option value="Port Harcourt">Port Harcourt</option>
            </select>
          </div>

          {/* Date */}
          <div className="relative">
            <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="date"
              name="date"
              value={bookingForm.date}
              onChange={handleBookingChange}
              min={new Date().toISOString().split("T")[0]}
              className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-3 px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
          >
            <span>Find WorkSpace</span>
          </button>
        </form>
      </div>
    </div>
  );
}
