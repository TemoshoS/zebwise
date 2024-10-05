import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link, Outlet } from 'react-router-dom';


function SidebarComponent() {
    return (
        <div className="d-flex">
            {/* Sidebar with the sidebar class */}
            <div className="sidebar">
                <h4>Zebwise Platform</h4>
                <Nav className="flex-column">
                    {/* Using Link for navigation */}
                    <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link as={Link} to="/complaints">Complaints</Nav.Link>
                    <Nav.Link as={Link} to="/reports">Reports</Nav.Link>
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
