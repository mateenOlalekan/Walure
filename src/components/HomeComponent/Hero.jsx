import cospace01 from "../../assets/hero/cospace01.jpg";
import cospace02 from "../../assets/hero/cospace02.jpg";
import cospace03 from "../../assets/hero/cospace03.webp";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Building, Calendar } from 'lucide-react';

const ResponsiveSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    location: '',
    roomType: '',
    date: ''
  });

  // Slide data
  const slides = [
    {
      id: 1,
      image: cospace01,
      title: 'Premium Workspaces',
      subtitle: 'Productivity meets comfort in our designed environments',
      location: 'Abeokuta, Ogun'
    },
    {
      id: 2,
      image: cospace02,
      title: 'Flexible Office Solutions',
      subtitle: 'Tailored spaces for teams of all sizes',
      location: 'Ikom, Cross River'
    },
    {
      id: 3,
      image: cospace03,
      title: 'Meeting Rooms & Beyond',
      subtitle: 'Professional spaces for collaboration and innovation',
      location: 'Ikeja, Lagos'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // Navigation functions
  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking request submitted!\nLocation: ${formData.location}\nRoom Type: ${formData.roomType}\nDate: ${formData.date}`);
    setFormData({ location: '', roomType: '', date: '' });
  };

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Background Images Container */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
  key={slide.id}
  className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
    index === currentSlide ? "opacity-100" : "opacity-0"
  }`}
  style={{
    backgroundImage: `url(${slide.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50   bg-opacity-10"></div>
</div>

        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 transform transition-all duration-500 ${
            currentSlide >= 0 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {slides[currentSlide].title}
          </h1>
          
          <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 transform transition-all duration-500 delay-200 ${
            currentSlide >= 0 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {slides[currentSlide].subtitle}
          </p>
          
          <div className={`inline-flex items-center bg-blue-600 bg-opacity-60 px-4 py-2 sm:px-6 sm:py-3 rounded-full transform transition-all duration-500 delay-400 ${
            currentSlide >= 0 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-white" />
            <span className="text-sm sm:text-base md:text-lg">{slides[currentSlide].location}</span>
          </div>
        </div>
      </div>

      {/* Booking Form - Bottom Left */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 z-20 w-[calc(100%-8rem)] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:w-96">
        <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-2 sm:p-2 shadow-2xl">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">
            Find Your Workspace
          </h3>
          
          <div className="space-y-3 sm:space-y-1">
            {/* Location Input */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-3 w-3 sm:h-5 sm:w-5 text-gray-400" />
              <input
                type="text"
                name="location"
                placeholder="Enter location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full pl-10 sm:pl-12 pr-3 py-1.5 sm:py-2 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Room Type Select */}
            <div className="relative">
              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-3 w-3 sm:h-5 sm:w-5 text-gray-400 pointer-events-none z-10" />
              <select
                name="roomType"
                value={formData.roomType}
                onChange={handleInputChange}
                className="w-full pl-10 sm:pl-12 pr-8 py-1.5 sm:py-2 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="">Select room type</option>
                <option value="private-office">Private Office</option>
                <option value="dedicated-desk">Dedicated Desk</option>
                <option value="hot-desk">Hot Desk</option>
                <option value="meeting-room">Meeting Room</option>
                <option value="conference-room">Conference Room</option>
                <option value="event-space">Event Space</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <ChevronRight className="h-4 w-4 text-gray-400 rotate-90" />
              </div>
            </div>

            {/* Date Input */}
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full pl-10 sm:pl-12 pr-3 py-1.5 sm:py-2 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-2 sm:py-3 px-4 rounded-lg transition-colors duration-200 text-sm sm:text-base"
            >
              Find Workspace
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Controls - Bottom Right */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-20">
        <div className="flex items-center space-x-3">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>


          {/* Next Button */}
          <button
            onClick={goToNext}
            className="bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSlider;
