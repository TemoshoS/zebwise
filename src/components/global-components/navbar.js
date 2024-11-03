import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link, Outlet } from 'react-router-dom';
import './Home.css'
// import logo from '../assets/zebwise-high-resolution-logo-transparent.png'


function SidebarComponent() {
    const currentPath = window.location.pathname;
    return (
        <div className="d-flex">
            {/* Sidebar with the sidebar class */}
            <div className="sidebar">
            <div className="d-flex align-items-center">
{/*    <img src={logo} alt="Zebwise Logo" style={{ width: '150px', height: '80px', marginBottom: '40px' }} />*/}

</div>
                <div className="d-flex flex-column">
                <Link
                to="/dashboard"
                className={`nav-link ${currentPath.includes('dashboard') ? 'active-link' : 'inactive-link'}`}
            >
                Dashboard
            </Link>

            <Link
                to="/makecomplaint"
                className={`nav-link ${currentPath.includes('makecomplaint') ? 'active-link' : 'inactive-link'}`}
            >
                Report Issue
            </Link>

            {/*<Link*/}
            {/*    to="/complaints"*/}
            {/*    className={`nav-link ${currentPath.includes('complaints') ? 'active-link' : 'inactive-link'}`}*/}
            {/*>*/}
            {/*    Complaints*/}
            {/*</Link>*/}

            <Link
                to="/reports"
                className={`nav-link ${currentPath.includes('reports') ? 'active-link' : 'inactive-link'}`}
            >
                Reports
            </Link>

            <Link
                to="/leaderboard"
                className={`nav-link ${currentPath.includes('leaderboard') ? 'active-link' : 'inactive-link'}`}
            >
                Leaderboard
            </Link>

            <Link
                to="/notifications"
                className={`nav-link ${currentPath.includes('notifications') ? 'active-link' : 'inactive-link'}`}
            >
                Notifications <span className="notification-count">3</span>
            </Link>

            <Link
                to="/settings"
                className={`nav-link ${currentPath.includes('settings') ? 'active-link' : 'inactive-link'}`}
            >
                Settings
            </Link>
        </div>




            </div>

            {/* Main Content Area */}
            <div className="flex-grow-1 ms-3 p-4" style={{ marginRight: '500px' }}>
                <Outlet /> {/* Render the matched child route elements here */}
            </div>
        </div>
    );
}

export default SidebarComponent;
