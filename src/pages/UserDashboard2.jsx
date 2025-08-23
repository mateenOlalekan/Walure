import Sidebar from "../components/User2/Sidebar.jsx";
import Main from "../components/User2/Main.jsx";

export default function UserDashboard2() {
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
