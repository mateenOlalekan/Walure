import { PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";
import { BsPerson,  BsSearch } from "react-icons/bs";
import { FiHome, FiInfo, FiPieChart, FiDollarSign, FiMenu, FiX } from "react-icons/fi";
import { Link, Links } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/50 backdrop-blur-md shadow-lg py-4" : "bg-white py-4"}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center max-md:px-4 ">
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">WP</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              WorkspacePro
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex justify-between items-center gap-8">
          <a
            href="#"
            className="text-gray-700 hover:text-purple-600 font-medium transition-colors flex items-center gap-1 group relative"
          >
            <FiHome className="w-4 h-4" />
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-purple-600 font-medium transition-colors flex items-center gap-1 group relative"
          >
            <FiInfo className="w-4 h-4" />
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-purple-600 font-medium transition-colors flex items-center gap-1 group relative"
          >
            <FiPieChart className="w-4 h-4" />
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-purple-600 font-medium transition-colors flex items-center gap-1 group relative"
          >
            <PhoneCall className="w-4 h-4" />
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-purple-600 font-medium transition-colors flex items-center gap-1 group relative"
          >
            <FiDollarSign className="w-4 h-4" />
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
          </a>
        </div>



        {/* Desktop Buttons */}
        <div className="hidden md:flex justify-between items-center gap-4">

          <Link to="/login" className="px-4 py-2 text-gray-600 hover:text-purple-600 font-medium transition-colors">
            Login
          </Link>
          <button className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Get Started
          </button>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-all shadow-md">
            <BsPerson className="text-white" />
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX className="w-5 h-5 text-gray-700" /> : <FiMenu className="w-5 h-5 text-gray-700" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-6 px-6 shadow-xl absolute left-0 right-0 top-full animate-fadeIn">
          <div className="flex flex-col gap-2">
            <div className="mb-4 relative">
              <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
                <BsSearch className="text-gray-500 mr-2" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="bg-transparent outline-none text-gray-700 w-full"
                />
              </div>
            </div>
            
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 font-medium py-3 transition-colors flex items-center gap-3 border-b border-gray-100"
            >
              <FiHome className="w-5 h-5" /> Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 font-medium py-3 transition-colors flex items-center gap-3 border-b border-gray-100"
            >
              <FiInfo className="w-5 h-5" /> About
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 font-medium py-3 transition-colors flex items-center gap-3 border-b border-gray-100"
            >
              <FiPieChart className="w-5 h-5" /> Features
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 font-medium py-3 transition-colors flex items-center gap-3 border-b border-gray-100"
            >
              <FiDollarSign className="w-5 h-5" /> Pricing
            </a>

            {/* Mobile buttons */}
            <div className="pt-4 mt-2 flex flex-col gap-3">

              <Link to="/login" className="px-4 py-3 text-gray-600 hover:text-purple-600 font-medium transition-colors text-left border border-gray-200 rounded-lg">
                Login
              </Link>
              <button className="px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all shadow-md">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;