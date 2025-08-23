import { Home, User, Calendar, FileText, Settings, LogOut } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="h-screen w-20 md:w-44 lg:w-56 bg-white duration-300 text-black flex flex-col border-r border-gray-200 shadow-lg">
      {/* User Profile Card */}
      <div className="p-4 flex flex-col items-center border-b border-gray-200">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User Profile"
          className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-xl object-cover shadow-md"
        />

        {/* Profile details only visible on md+ */}
        <div className="hidden md:block text-center mt-3">
          <h2 className="text-base font-semibold text-gray-800">John Okafor</h2>
          <p className="text-sm text-gray-500 truncate">Walureproject@wemail.com</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm mt-3 px-3 py-1.5 rounded-xl shadow-sm transition">
            View Profile
          </button>
        </div>
      </div>

      {/* Sidebar Links */}
      <nav className="flex-1 p-3 space-y-2">
        {[
          { icon: <Home size={20} />, label: "Home" },
          { icon: <User size={20} />, label: "Profile" },
          { icon: <Calendar size={20} />, label: "Bookings" },
          { icon: <FileText size={20} />, label: "Invoices" },
          { icon: <Settings size={20} />, label: "Settings" },
        ].map((item, i) => (
          <a
            key={i}
            href="#"
            className="relative flex items-center justify-center md:justify-start gap-3 px-3 py-2 rounded-lg 
              hover:bg-blue-100 hover:text-blue-600 transition group"
          >
            <span className="text-gray-600 group-hover:text-blue-600">{item.icon}</span>
            <span className="hidden md:inline-block">{item.label}</span>

            {/* Tooltip (only for sm screens) */}
            <span className="absolute left-full ml-2 px-2 py-1 text-xs text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap md:hidden">
              {item.label}
            </span>
          </a>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="p-3 border-t border-gray-200">
        <a
          href="#"
          className="relative flex items-center justify-center md:justify-start gap-3 px-3 py-2 rounded-lg 
            hover:bg-red-100 hover:text-red-600 transition text-red-600 group"
        >
          <LogOut size={20} />
          <span className="hidden md:inline-block">Logout</span>

          {/* Tooltip for logout */}
          <span className="absolute left-full ml-2 px-2 py-1 text-xs text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap md:hidden">
            Logout
          </span>
        </a>
      </div>
    </div>
  );
}
