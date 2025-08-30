import { useState } from "react";
import { Link } from "react-router-dom";

export default function CardNavigationPage() {
  const [cards] = useState([
    { id: 1, title: "User Dashboard", path: "/user" },
    { id: 2, title: "User Dashboard 2", path: "/user2" },
    { id: 3, title: "User Dashboard 3", path: "/user3" },
    { id: 4, title: "User Dashboard 4", path: "/user4" },
    { id: 5, title: "Dashboard", path: "/dash" },
    { id: 6, title: "Dashboard 2", path: "/dash2" },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 p-6 md:p-10 flex justify-center items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">
            Choose Your Dashboard
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Navigate easily between different dashboards using these quick access cards.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.id}
              to={card.path}
              className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-90 group-hover:opacity-100 transition"></div>

              {/* Overlay Content */}
              <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                <h2 className="text-2xl font-bold text-white mb-4">
                  {card.title}
                </h2>
                <div className="flex items-center justify-between text-white text-sm font-medium">
                  <span className="opacity-90 group-hover:opacity-100 transition">
                    Explore
                  </span>
                  <span className="text-xl transform group-hover:translate-x-1 transition">
                    →
                  </span>
                </div>
              </div>

              {/* Subtle Overlay for readability */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
