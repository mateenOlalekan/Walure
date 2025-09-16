import cospace01 from "../../assets/hero/cospace01.jpg";
import cospace02 from "../../assets/hero/cospace02.jpg";
import cospace03 from "../../assets/hero/cospace03.webp";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Building, Calendar, Star, Users, Wifi, Coffee } from 'lucide-react';

const ResponsiveSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [formData, setFormData] = useState({
    location: '',
    roomType: '',
    date: ''
  });

  // Enhanced slide data with more details
  const slides = [
    {
      id: 1,
      image: cospace01,
      title: 'Premium Workspaces',
      subtitle: 'Productivity meets comfort in our designed environments',
      location: 'Abeokuta, Ogun',
      features: ['High-speed WiFi', 'Ergonomic Furniture', '24/7 Access', 'Free Coffee'],
      rating: 4.8,
      reviews: 142
    },
    {
      id: 2,
      image: cospace02,
      title: 'Flexible Office Solutions',
      subtitle: 'Tailored spaces for teams of all sizes',
      location: 'Ikom, Cross River',
      features: ['Meeting Rooms', 'Phone Booths', 'Printing Facilities', 'Kitchen Access'],
      rating: 4.7,
      reviews: 89
    },
    {
      id: 3,
      image: cospace03,
      title: 'Meeting Rooms & Beyond',
      subtitle: 'Professional spaces for collaboration and innovation',
      location: 'Ikeja, Lagos',
      features: ['A/V Equipment', 'Video Conferencing', 'Catering Options', 'Event Support'],
      rating: 4.9,
      reviews: 216
    }
  ];

  // Auto-advance slides with transition handling
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 300);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // Navigation functions with transition handling
  const goToNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToPrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
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

  // Feature icons mapping
  const featureIcons = {
    'High-speed WiFi': <Wifi className="w-4 h-4" />,
    'Ergonomic Furniture': <Users className="w-4 h-4" />,
    'Free Coffee': <Coffee className="w-4 h-4" />,
    'Meeting Rooms': <Building className="w-4 h-4" />,
    'Phone Booths': <Phone className="w-4 h-4" />,
    'Printing Facilities': <Printer className="w-4 h-4" />,
    'Kitchen Access': <Coffee className="w-4 h-4" />,
    'A/V Equipment': <Video className="w-4 h-4" />,
    'Video Conferencing': <Video className="w-4 h-4" />,
    'Catering Options': <Utensils className="w-4 h-4" />,
    'Event Support': <Calendar className="w-4 h-4" />,
    '24/7 Access': <Clock className="w-4 h-4" />
  };

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Background Images Container */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full max-md:-mt-28">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 transform transition-all duration-700 ${
            isTransitioning ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'
          }`}>
            {slides[currentSlide].title}
          </h1>
          
          <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 transform transition-all duration-700 delay-150 ${
            isTransitioning ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'
          }`}>
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex justify-center gap-4 items-center">
          <div className={`inline-flex items-center bg-purple-600 bg-opacity-80 px-4 py-1 sm:px-4 sm:py-2 rounded-full transform transition-all duration-700 delay-300 ${
            isTransitioning ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'
          }`}>
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-white" />
            <span className="text-sm sm:text-base md:text-lg">{slides[currentSlide].location}</span>
          </div>



          </div>

          {/* Features List */}
          <div className={`mt-6 flex flex-wrap justify-center gap-2 transform transition-all duration-700 delay-700 ${
            isTransitioning ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'
          }`}>
            {slides[currentSlide].features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center rounded-full p-2 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10">
                <span className="mr-1.5 text-purple-300">{featureIcons[feature]}</span>
                <span className="text-xs sm:text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute  max-md:hidden bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-100'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Booking Form - Bottom Left */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 z-20 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:w-96">
        <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-2xl transform transition-all duration-500 hover:shadow-xl">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">
            Find Your Workspace
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Location Input */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              <input
                type="text"
                name="location"
                placeholder="Enter location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full pl-10 sm:pl-12 pr-3 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            {/* Room Type Select */}
            <div className="relative">
              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 pointer-events-none z-10" />
              <select
                name="roomType"
                value={formData.roomType}
                onChange={handleInputChange}
                className="w-full pl-10 sm:pl-12 pr-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white"
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
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <ChevronRight className="h-4 w-4 text-gray-400 rotate-90" />
              </div>
            </div>



            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white font-semibold py-3 sm:py-3.5 px-4 rounded-lg transition-all duration-200 text-sm sm:text-base transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
            >
              Find Workspace
            </button>
          </form>
        </div>
      </div>

      {/* Navigation Controls - Bottom Right */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-20">
        <div className="flex items-center space-x-3">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 p-2.5 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 p-2.5 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Add the missing icon components
const Phone = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
  </svg>
);

const Printer = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2z"></path>
  </svg>
);

const Video = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
  </svg>
);

const Utensils = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
  </svg>
);

const Clock = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

export default ResponsiveSlider;