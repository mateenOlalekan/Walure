import { 
    CalendarCheck2, 
    Home, 
    LogIn, 
    LogOut,
    ArrowUpRight, 
    ArrowDownRight 
  } from "lucide-react";
  
  const StatCard = ({ value, label, icon, change, color }) => {
    const IconComponent = () => {
      switch(icon) {
        case "CalendarCheck2": return <CalendarCheck2 className={`w-6 h-6 ${cardStyles.text}`} />;
        case "Home": return <Home className={`w-6 h-6 ${cardStyles.text}`} />;
        case "LogIn": return <LogIn className={`w-6 h-6 ${cardStyles.text}`} />;
        case "LogOut": return <LogOut className={`w-6 h-6 ${cardStyles.text}`} />;
        default: return <CalendarCheck2 className={`w-6 h-6 ${cardStyles.text}`} />;
      }
    };
  
    const getStatCardStyles = (color) => {
      const colorMap = {
        blue: { bg: "bg-blue-100", text: "text-blue-600", gradient: "from-blue-500 to-blue-600" },
        green: { bg: "bg-green-100", text: "text-green-600", gradient: "from-green-500 to-green-600" },
        purple: { bg: "bg-purple-100", text: "text-purple-600", gradient: "from-purple-500 to-purple-600" },
        orange: { bg: "bg-orange-100", text: "text-orange-600", gradient: "from-orange-500 to-orange-600" }
      };
      return colorMap[color] || colorMap.blue;
    };
  
    const cardStyles = getStatCardStyles(color);
    const isPositive = change >= 0;
    const changeColor = isPositive ? "text-green-600" : "text-red-600";
    const ChangeIcon = isPositive ? ArrowUpRight : ArrowDownRight;
  
    return (
      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
        <div className="flex justify-between items-start mb-4">
          <div className={`p-3 rounded-lg ${cardStyles.bg}`}>
            <IconComponent />
          </div>
          <div className={`flex items-center ${changeColor}`}>
            <ChangeIcon className="w-4 h-4 mr-1" />
            <span className="text-sm font-medium">
              {Math.abs(change).toFixed(1)}%
            </span>
          </div>
        </div>
        <p className="text-2xl sm:text-3xl font-bold text-gray-800">
          {value.toLocaleString()}
        </p>
        <p className="text-gray-600 mt-1 text-sm sm:text-base">{label}</p>
      </div>
    );
  };
  
  export default StatCard;