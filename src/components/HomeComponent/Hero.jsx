import React, { useEffect, useRef, useState } from "react";
import {  ChevronLeft,Building,ChevronRight,Users,Laptop,Mic,Sofa,Coffee,Zap,Wifi,GraduationCap,Star,Calendar,Phone,MapPin,Monitor, Building2} from "lucide-react";
  import cospace01 from "../../assets/hero/cospace01.jpg";
  import cospace02 from "../../assets/hero/cospace02.jpg";
  import cospace03 from "../../assets/hero/cospace03.webp";
  import Form from "./Form"

// Sample tech hub hero slides data
const slidesData = [
  {
    id: 1,
    image: cospace01,
    title: "Premium Workspaces",
    subtitle: "Productivity meets comfort in our designed environments.",
    features: [
      "Co-working Spaces",
      "Dedicated Desks",
      "Private Offices",
    ],
    ctaPrimary: "Book Workspace",
    location: "Ikeja, Lagos",
  },
  {
    id: 2,
    image: cospace02,
    title: "Collaboration Hubs",
    subtitle: "Tailored environments for meetings and events.",
    features: [
      "Meeting Rooms",
      "Event Halls",
      "Training Facilities",
    ],
    ctaPrimary: "Reserve a Room",
    location: "Abuja, FCT",
  },
  {
    id: 3,
    image: cospace03,
    title: "Seamless Experience",
    subtitle: "Reliable infrastructure that keeps your team connected.",
    features: [
      "High-Speed Internet",
      "Uninterrupted Power",
      "On-site Cafeteria",
    ],
    ctaPrimary: "Join Our Hub",
    location: "Port Harcourt, Rivers",
  },
];

// Feature icon mapping
const FeatureIcon = ({ name, className = "w-4 h-4" }) => {
  const iconMap = {
    "Co-working Spaces": Users,
    "Dedicated Desks": Laptop,
    "Private Offices": Building,
    "Meeting Rooms": Monitor,
    "Event Halls": Mic,
    "Training Facilities": GraduationCap,
    "High-Speed Internet": Wifi,
    "Uninterrupted Power": Zap,
    "On-site Cafeteria": Coffee,
    "Lounge Areas": Sofa,
  };

  const IconComponent = iconMap[name] || Star;
  return <IconComponent className={className} />;
};

export default function TechHeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slides = slidesData;
  const slideCount = slides.length;
  const timerRef = useRef(null);
  const touchStartX = useRef(null);

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, slideCount]);

  // Navigation functions
  const goToSlide = (index) => {
    if (index === current || isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const nextSlide = () => goToSlide((current + 1) % slideCount);
  const prevSlide = () => goToSlide((current - 1 + slideCount) % slideCount);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [current]);

  // Touch handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide();
    }
    touchStartX.current = null;
  };

  const currentSlide = slides[current];



  return (
    <section
      className="relative w-full min-h-screen bg-gray-900 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Hero slider"
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <main className="relative z-20 min-h-screen flex flex-col justify-center  px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full mx-auto lg:-mt-14 mt-10 ">
          {/* Text Content */}
          <div className={`text-center space-y-2  lg:space-y-4 transition-all duration-700 ${
            isTransitioning ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
          }`}>
            
            {/* Location Badge */}
            <div className="inline-flex items-center px-3 py-1 mt-10 lg:mt-0 md:-mt-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs sm:text-sm font-medium">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              {currentSlide.location}
            </div>

            {/* Main Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-white leading-tight tracking-tight max-w-5xl mx-auto px-2">
              {currentSlide.title}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto px-4">
              {currentSlide.subtitle}
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-2xl mx-auto px-4">
              {currentSlide.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-1.5 sm:space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 border border-white/10"
                >
                  <FeatureIcon name={feature} className="w-3 h-3 sm:w-4 sm:h-4 text-purple-300 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-white whitespace-nowrap">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 max-w-lg mx-auto">
              <button className="group flex items-center justify-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl text-white font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto text-sm sm:text-base">
                <span>{currentSlide.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </button>
            </div> */}
          </div>
        </div>

        {/* Booking Form (Bottom Left) */}
              <Form/>
      </main>

      {/* Navigation Controls (Bottom Right) */}
      <div className="absolute hidden lg:block bottom-4 sm:bottom-6 right-4 sm:right-6 z-30  space-x-2 sm:space-x-3">
        <button
          onClick={prevSlide}
          className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl text-white hover:bg-white/20 transition-colors border border-white/10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl text-white hover:bg-white/20 transition-colors border border-white/10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>




    </section>
  );
}