import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './components/Home';
import Bestpractice from './components/Bestpractice';
import Complaints from './components/Complaints';
import Dashboards from './components/Dashboards';
import Footer from './components/Footer';
import Reports from './components/Reports';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
