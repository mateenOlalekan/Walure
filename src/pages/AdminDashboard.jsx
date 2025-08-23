import Header from "../components/Dashboard/Header";
import Sidebar from "../components/Dashboard/Sidebar";
import Main from "../components/Dashboard/Content";


export default function Dashboard() {
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
