import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'; // Ensure Outlet is imported
import Home from './components/Home'; // Import Home component
import SidebarComponent from './components/global-components/navbar'; // Import SidebarComponent
import Complaints from './components/Complaints'; // Import other components
import Dashboards from './components/Dashboards';
import Reports from './components/Reports';
import MakeComplaint from './components/Makecompliment';
import ServiceRequestTracking from './components/Tracking';
import Leaderboard from './components/Leaderboard';
import Settings from './components/Settings'
import Notifications from './components/Notifications';
/*import {Dashboard} from "./components/new-dashboard/screens";*/

// Layout with Sidebar
function SidebarLayout() {
  return (
    <div className="d-flex">
      <SidebarComponent /> {/* Sidebar stays fixed */}
    {/*  <div className="flex-grow-1 ms-3 p-4" style={{ marginLeft: '500px' }}>
        <Outlet />  This will render the matched child route elements here
      </div>*/}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Home route without sidebar */}
        <Route path="/" element={<Home />} />
        
        <Route path="serviceRequesttracking" element={<ServiceRequestTracking/>} />

        {/* Routes with the sidebar */}
        {/*<Route element={<SidebarLayout />}>*/}
          <Route path="dashboard" element={<Dashboards />} />
          <Route path="makecomplaint" element={<MakeComplaint />} />
          <Route path="complaints" element={<Complaints />} />
          <Route path="reports" element={<Reports />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="notifications" element={<Notifications />} />
        {/*</Route>*/}
      </Routes>
    </Router>
  );
}

export default App;
