import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './components/Home';
import Bestpractice from './components/Bestpractice';
import Complaints from './components/Complaints';
import Dashboards from './components/Dashboards';
import Footer from './components/Footer';
import ReportsComponent from './components/Reports';
import ComplaintsPage from "./components/Complaints";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboards />} />
      <Route path="/complaints" element={<ComplaintsPage />} />
      <Route path="/reports" element={<ReportsComponent />} />
      <Route path="/reports" element={<ReportsComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
