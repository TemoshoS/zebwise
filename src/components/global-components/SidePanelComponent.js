import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link, Outlet } from 'react-router-dom';


function SidePanelComponent() {
    return (
      /*  <div className="d-flex">
            {/!* Sidebar with the sidebar class *!/}
            <div className="sidebar">
                <h4>Zebwise Platform</h4>
                <Nav className="flex-column">
                    {/!* Using Link for navigation *!/}
                    <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link as={Link} to="/complaints">Complaints</Nav.Link>
                    <Nav.Link as={Link} to="/reports">Reports</Nav.Link>
                </Nav>
            </div>

            {/!* Main Content Area *!/}
            <div className="flex-grow-1 ms-3 p-4" style={{ marginRight: '500px' }}>
                <Outlet /> {/!* Render the matched child route elements here *!/}
            </div>
        </div>*/
        <>
        <nav id="sidePanel" class="navbar navbar-dark sidebar align-items-start bg-primary p-0 fix-sidebar">
            <div class="d-flex flex-column ">
                <ul id="accordionSidebar" class="navbar-nav text-light">
                    <li class="nav-item d-flex  align-items-center h-fix" >
                    <div class="d-flex px-5 align-items-center opacity-100 " >
                        <a
                            id="dashboard-side-panel"
                            class="text-decoration-none fw-bold text-nowrap text-white" >
                        Dashboard
                    </a>
            </div>
        </li>

<li class="nav-item d-flex  align-items-center h-fix" >

    <div class="d-flex px-5 align-items-center opacity-100 " >

    <a
id="profile-side-panel"
class="text-decoration-none fw-bold text-nowrap text-white" >
    Pudo Locker
</a>
</div>
</li>

<li class="nav-item d-flex  align-items-center h-fix" >

    <div class="d-flex px-5 align-items-center opacity-100 ">

    <a
id="rental-side-panel"
class="text-decoration-none fw-bold text-nowrap text-white" >
    Rental
    </a>
</div>
</li>



</ul>
</div>
</nav>

</>
    );
}

export default SidePanelComponent;
