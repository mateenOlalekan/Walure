import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/AdminDashboard.jsx";
import Dashboard2 from './pages/AdminDashboard2.jsx';
import User from "./pages/UserDashboard.jsx";
import User2 from "./pages/UserDashboard2.jsx";
import User3 from "./pages/UserDashboard3.jsx";
import User4 from "./pages/UserDashboard4.jsx";
import Login from "./pages/Login.jsx";
import RegisterPage from './pages/Register.jsx';
import GetStart from "./pages/GetStarted.jsx"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/dash2" element={<Dashboard2/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/user2" element={<User2/>} />
        <Route path="/user3" element={<User3/>} />
        <Route path="/user4" element={<User4/>} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<RegisterPage/>}/>
        <Route path="/GetStart" element={<GetStart/>}/>
      </Routes>
    </>
  );
}

export default App;
