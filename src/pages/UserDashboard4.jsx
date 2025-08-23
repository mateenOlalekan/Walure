
import Sidebar from "../components/User4/Sidebar.jsx";
import Main from "../components/User4/Main.jsx";

export default function UserDashboard4() {
  return (
    <div className="flex flex-col h-screen w-full">
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-y-auto">
          <Main />
        </div>
      </div>
    </div>
  );
}
