import Header from "../components/Dashboard2/Header.jsx";
import Sidebar from "../components/Dashboard2/Sidebar.jsx";
import Content from "../components/Dashboard2/Main.jsx";


export default function Dashboard2() {
  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-y-auto">
          <Content/>
        </div>
      </div>
    </div>
  );
}
