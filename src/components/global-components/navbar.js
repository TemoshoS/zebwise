import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/zebwise-high-resolution-logo-transparent.png'


function SidebarComponent() {
    return (
        <div className="d-flex">
            {/* Sidebar with the sidebar class */}
            <div className="sidebar">
            <div className="d-flex align-items-center">
    <img src={logo} alt="Zebwise Logo" style={{ width: '150px', height: '80px', marginBottom: '40px' }} />
    
</div>

                <Nav className="flex-column">
                    {/* Using Link for navigation */}
                    <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link as={Link} to="/makecomplaint">Post Complaint</Nav.Link>
                    <Nav.Link as={Link} to="/complaints">Complaints</Nav.Link>
                    <Nav.Link as={Link} to="/reports">Reports</Nav.Link>
                    <Nav.Link as={Link} to="/leaderboard">Leaderboard</Nav.Link>
                    <Nav.Link as={Link} to="/bestpratice">Best Pratice</Nav.Link>
                    <Nav.Link as={Link} to="/notifications">
                    
    Notifications <span className="notification-count">3</span>
</Nav.Link>

        
                    <Nav.Link as={Link} to="/settings">Settings</Nav.Link>
                    
                </Nav>
            </div>

            {/* Main Content Area */}
            <div className="flex-grow-1 ms-3 p-4" style={{ marginRight: '500px' }}>
                <Outlet /> {/* Render the matched child route elements here */}
            </div>
        </div>
    );
}

export default SidebarComponent;
