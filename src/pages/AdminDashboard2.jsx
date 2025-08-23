import Header from "../components/Dashboard2/Header.jsx";
import Sidebar from "../components/Dashboard2/Sidebar.jsx";
import Main from "../components/Dashboard2/Content.jsx";

export default function Dashboard2() {
  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-y-auto">
          <Main />
        </div>
      </div>
    </div>
  );
}
