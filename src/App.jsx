import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import { Routes, Route } from "react-router-dom"
import Team from "./pages/Team"
import Contacts from './pages/Contacts'
import Balances from './pages/Balances'
import Profile from './pages/Profile'
import Calendar from './pages/Calendar'
import FAQ from './pages/FAQ.jsx'
import Bar from './pages/Bar'
import Pie from './pages/Pie'
import Line from './pages/Line'
import Map from './pages/Map'
import Home from "./pages/Home"


function App() {
  return (
    <div className=" flex">
      <Sidebar />
      <div className=" flex-grow flex flex-col h-[100vh] overflow-y-auto">
        <Header />
        <div className="w-full flex-grow bg-Primary-light-bg dark:bg-Primary-dark-bg text-gray-700 dark:text-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/balances" element={<Balances />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/line" element={<Line />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
