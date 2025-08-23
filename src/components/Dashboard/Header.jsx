import { Bell, MessageSquareText } from "lucide-react";

export default function Index() {
  return (
    <header className="w-full px-4 py-3 z-10   shadow-md bg-white">
      <div className="flex   justify-between items-center gap-4">
        {/* Left Section */}
        <h1 className="text-xl font-bold text-gray-800">Walure Capital</h1>

        {/* Right Section */}
        <div className="flex  items-center gap-4">
          <h2 className="text-lg font-medium text-gray-600">Overview</h2>

          {/* Icons + Profile */}
          <div className="flex items-center gap-4">
            {/* Notification */}
            <button className="p-2 rounded-full hover:bg-gray-100 transition">
              <Bell className="w-5 h-5 text-gray-700" />
            </button>

            {/* Messages */}
            <button className="p-2 rounded-full hover:bg-gray-100 transition">
              <MessageSquareText className="w-5 h-5 text-gray-700" />
            </button>

            {/* Profile */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <span className="hidden sm:block font-medium text-gray-700">
                Admin Officer
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
