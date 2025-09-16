import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneCall } from "lucide-react";
import { FiHome, FiPieChart, FiDollarSign, FiMenu, FiX } from "react-icons/fi";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", icon: <FiHome className="w-4 h-4" />, href: "#" },
    { name: "Features", icon: <FiPieChart className="w-4 h-4" />, href: "#" },
    { name: "Contact", icon: <PhoneCall className="w-4 h-4" />, href: "#" },
    { name: "Pricing", icon: <FiDollarSign className="w-4 h-4" />, href: "#" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-transparent backdrop-blur-lg shadow-md py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">WO</span>
          </div>
          <span className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">
            Wovora Online
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-white relative font-medium flex items-center gap-1 hover:text-purple-600 transition-colors group"
            >
              {link.icon}
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="px-4 py-2 text-gray-600 hover:text-purple-600 font-medium transition"
          >
            Login
          </Link>
          <Link
            to="/GetStart"
            className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-purple-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <FiX className="w-6 h-6 text-gray-700" />
          ) : (
            <FiMenu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-xl absolute left-0 right-0 top-full py-6 px-6 animate-fadeIn">


          {/* Links */}
          <div className="flex flex-col gap-3">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="flex items-center gap-3 py-3 border-b border-gray-100 text-gray-700 hover:text-purple-600 font-medium transition"
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Buttons */}
          <div className="mt-6 flex flex-col gap-3">
            <Link
              to="/login"
              className="px-4 py-3 text-center border border-gray-200 rounded-lg text-gray-600 hover:text-purple-600 font-medium transition"
            >
              Login
            </Link>
            <Link
              to="/GetStart"
              className="px-4 py-3 text-center bg-gradient-to-r from-purple-600 to-purple-600 text-white rounded-lg font-medium shadow-md hover:from-purple-700 hover:to-purple-700 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
