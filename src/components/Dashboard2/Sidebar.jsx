import { useState, useEffect } from "react";
import {
    CalendarCheck2,
  Star,  ShoppingCart,  Settings,
  LogOut,
  Menu,
  X,
  Building,
  Building2Icon,
  UserRound,
} from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size and update mobile state
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
      // Auto-collapse on mobile
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0  bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <div
        className={`${

          !isMobile ? isOpen ? "w-48 lg:w-56 xl:w-64" : "w-16 lg:w-20" 
          
            : isOpen 
              ? "w-64 fixed left-0 top-0 z-50" 
              : "w-0 overflow-hidden"
        } h-full bg-white shadow-lg transition-all duration-300 ease-in-out flex flex-col justify-between ${
          !isMobile ? 'relative' : ''
        }`}
      >
        {/* Top Section */}
        <div className="p-4">
          {/* Header with toggle button */}
          <div className="flex items-center justify-between mb-8">
            <div className={`${isOpen ? 'block' : 'hidden'} font-bold text-lg text-gray-800`}>
              Dashboard
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
              aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
            >
              {isMobile ? (
                isOpen ? <X size={20} /> : <Menu size={20} />
              ) : (
                isOpen ? <X size={20} /> : <Menu size={20} />
              )}
            </button>
          </div>

          <nav className="flex flex-col gap-2">
            <SidebarLink 
              icon={<Building/>} 
              label="Dashboard" 
              isOpen={isOpen} 
              showTooltip={!isOpen && !isMobile}
            />
            <SidebarLink 
              icon={<CalendarCheck2/>} 
              label="Booking" 
              isOpen={isOpen}
              showTooltip={!isOpen && !isMobile}
            />
            <SidebarLink 
              icon={<Building2Icon/>} 
              label="Work Space" 
              isOpen={isOpen}
              showTooltip={!isOpen && !isMobile}
            />
            <SidebarLink 
              icon={<UserRound/>} 
              label="Users" 
              isOpen={isOpen}
              showTooltip={!isOpen && !isMobile}
            />
            <SidebarLink 
              icon={<ShoppingCart />} 
              label="Payment" 
              isOpen={isOpen}
              showTooltip={!isOpen && !isMobile}
            />
            <SidebarLink 
              icon={<Star/>} 
              label="Reviews" 
              isOpen={isOpen}
              showTooltip={!isOpen && !isMobile}
            />
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="p-4 border-t border-gray-200">
        <SidebarLink 
              icon={<Settings />} 
              label="Settings" 
              isOpen={isOpen}
              showTooltip={!isOpen && !isMobile}
            />
          <SidebarLink 
            icon={<LogOut />} 
            label="Logout" 
            isOpen={isOpen}
            showTooltip={!isOpen && !isMobile}
            className="text-red-600 hover:bg-red-50 hover:text-red-700"
          />
        </div>
      </div>
    </>
  );
}



function SidebarLink({ 
  icon, 
  label, 
  isOpen, 
  showTooltip = false, 
  className = "" 
}) {
  const [showTooltipState, setShowTooltipState] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setShowTooltipState(true)}
      onMouseLeave={() => setShowTooltipState(false)}
    >
      <div 
        className={`flex items-center gap-3 rounded-lg p-3 cursor-pointer transition-all duration-200 ${
          className || "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        } ${!isOpen ? 'justify-center' : ''}`}
        role="button"
        tabIndex={0}
        aria-label={label}
      >
        <span className="flex-shrink-0">
          {icon}
        </span>
        {isOpen && (
          <span className="text-sm font-medium whitespace-nowrap overflow-hidden">
            {label}
          </span>
        )}
      </div>

      {/* Tooltip for collapsed state */}
      {showTooltip && showTooltipState && (
        <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 z-50">
          <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-md shadow-lg whitespace-nowrap">
            {label}
            {/* Arrow pointing left */}
            <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
          </div>
        </div>
      )}
    </div>
  );
}