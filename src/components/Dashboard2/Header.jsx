import { Bell, MessageSquareText, Search, ChevronDown, Menu, Settings, HelpCircle, LogOut } from "lucide-react";
import { useState, useRef, useEffect } from "react";

function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  // Sample notifications data
  const notifications = [
    { id: 1, title: "New investment opportunity", time: "10 min ago", read: false },
    { id: 2, title: "Portfolio performance report", time: "1 hour ago", read: false },
    { id: 3, title: "Meeting reminder with client", time: "2 hours ago", read: true },
  ];

  // Sample messages data
  const messages = [
    { id: 1, name: "Sarah Johnson", message: "Regarding the investment proposal...", time: "Just now", unread: true },
    { id: 2, name: "Michael Chen", message: "The quarterly report is ready for review", time: "30 min ago", unread: true },
    { id: 3, name: "Emma Wilson", message: "Thanks for the quick response!", time: "1 hour ago", unread: false },
  ];

  // Refs for dropdowns to handle outside clicks
  const notificationsRef = useRef(null);
  const messagesRef = useRef(null);
  const profileRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (messagesRef.current && !messagesRef.current.contains(event.target)) {
        setShowMessages(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close other dropdowns when one is opened
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowMessages(false);
    setShowProfileMenu(false);
  };

  const toggleMessages = () => {
    setShowMessages(!showMessages);
    setShowNotifications(false);
    setShowProfileMenu(false);
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
    setShowNotifications(false);
    setShowMessages(false);
  };

  return (
    <header className="w-full px-4 py-3 z-10 shadow-sm bg-white border-b border-gray-200 sticky top-0">
      <div className="flex justify-between items-center">
        {/* Left Section - Logo and Mobile Menu */}
        <div className="flex items-center gap-4">
          <button className="md:hidden p-2 rounded-md hover:bg-gray-100">
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">WC</span>
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-gray-800 hidden sm:block">
              Walure Capital
            </h1>
          </div>
        </div>

        {/* Middle Section - Dashboard Title and Search */}
        <div className="flex-1 max-w-2xl mx-4 hidden md:flex items-center gap-6">
          <h2 className="text-base font-medium text-gray-700 whitespace-nowrap">Dashboard</h2>
          
          {/* Search */}
          <div className={`flex items-center border rounded-lg px-3 py-2 w-full max-w-md transition-all duration-200 ${
            searchFocused ? 'border-blue-500 bg-blue-50 shadow-sm' : 'border-gray-300 bg-gray-100'
          }`}>
            <Search className="text-gray-500 w-4 h-4 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search transactions, clients, reports..."
              className="flex-1 bg-transparent outline-none px-2 text-sm placeholder-gray-500"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>
        </div>

        {/* Right Section - Icons and Profile */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile Search Button */}
          <button className="md:hidden p-2 rounded-md hover:bg-gray-100">
            <Search className="w-5 h-5 text-gray-600" />
          </button>

          {/* Notifications */}
          <div className="relative" ref={notificationsRef}>
            <button 
              className="p-2 rounded-full hover:bg-gray-100 relative transition"
              onClick={toggleNotifications}
            >
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {notifications.filter(n => !n.read).length}
              </span>
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 top-12 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
                <div className="px-4 py-2 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="font-medium text-gray-800">Notifications</h3>
                  <button className="text-xs text-blue-600 hover:text-blue-800">Mark all as read</button>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.map(notification => (
                    <div key={notification.id} className={`px-4 py-3 hover:bg-gray-50 cursor-pointer ${!notification.read ? 'bg-blue-50' : ''}`}>
                      <p className="text-sm font-medium text-gray-800">{notification.title}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2 border-t border-gray-200">
                  <button className="text-sm text-blue-600 hover:text-blue-800 w-full text-center">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Messages */}
          <div className="relative" ref={messagesRef}>
            <button 
              className="p-2 rounded-full hover:bg-gray-100 relative transition"
              onClick={toggleMessages}
            >
              <MessageSquareText className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">
                {messages.filter(m => m.unread).length}
              </span>
            </button>
            
            {showMessages && (
              <div className="absolute right-0 top-12 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
                <div className="px-4 py-2 border-b border-gray-200">
                  <h3 className="font-medium text-gray-800">Messages</h3>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {messages.map(message => (
                    <div key={message.id} className={`px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 ${message.unread ? 'bg-blue-50' : ''}`}>
                      <div className="flex justify-between items-start">
                        <p className="text-sm font-medium text-gray-800">{message.name}</p>
                        <span className="text-xs text-gray-500">{message.time}</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1 truncate">{message.message}</p>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2 border-t border-gray-200">
                  <button className="text-sm text-blue-600 hover:text-blue-800 w-full text-center">
                    View all messages
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative" ref={profileRef}>
            <button 
              className="flex items-center gap-2 pl-2 pr-2 py-1 rounded-lg hover:bg-gray-100 transition"
              onClick={toggleProfileMenu}
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center">
                <span className="text-white font-medium text-sm">AO</span>
              </div>
              <div className="hidden lg:flex items-center">
                <span className="font-medium text-gray-700 text-sm">Admin Officer</span>
                <ChevronDown className="w-4 h-4 text-gray-500 ml-1" />
              </div>
            </button>
            
            {showProfileMenu && (
              <div className="absolute right-0 top-12 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20">
                <div className="px-4 py-3 border-b border-gray-200">
                  <p className="text-sm font-medium text-gray-800">Admin Officer</p>
                  <p className="text-xs text-gray-500 mt-1">admin@walurecapital.com</p>
                </div>
                <div className="py-1">
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                    <HelpCircle className="w-4 h-4 mr-2" />
                    Help & Support
                  </button>
                </div>
                <div className="py-1 border-t border-gray-200">
                  <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center">
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dashboard Title (visible on small screens) */}
      <div className="md:hidden mt-3 flex items-center justify-between">
        <h2 className="text-base font-medium text-gray-700">Dashboard</h2>
      </div>
    </header>
  );
}

export default Header;