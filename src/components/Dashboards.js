import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Toast, ToastContainer } from 'react-bootstrap';
import NavbarComponent from "./global-components/navbar";
import {getSchedule} from "../services/load-shedding.service";
// import { getSchedule } from '../services/load-shedding.service';
import './Dashboards.css'
import SidebarComponent from "./global-components/navbar";
import TableDataService from "../services/table-data.service";

export default function Dashboards() {
    const [schedule, setSchedule] = useState([]);
    const [showToast, setShowToast] = useState(false);
    const [displayReports, setDisplayReports] = useState(false);
    const [displayComplaints, setDisplayComplaints] = useState(false);
    const [displayElectricity, setDisplayElectricity] = useState(false);

    // Fetch load-shedding schedule data
    useEffect(() => {
        const fetchData = async () => {
            const scheduleData = getSchedule();
            setSchedule(scheduleData);
        };
        fetchData();

        // Simulate notification every 10 seconds
        const interval = setInterval(() => {
            setShowToast(true);
        }, 10000); // Change this to any interval you prefer (in milliseconds)

        return () => clearInterval(interval);
    }, []);

    function toggleView(view){
        switch (view) {
            case "reports":
                setDisplayReports(true);
                break;

            case  'complaints':
                setDisplayComplaints(true)
                break;

            case  'electricity':
                setDisplayElectricity(true);
                break;

        }
    }






    return (

    <>
     {/* <NavbarComponent />
        <Container>
            <Row className="my-4">
                <Col>
                    <h2>Electricity Management System</h2>
                </Col>
            </Row>

            <Col>
                <h4>Load Shedding Table</h4>
            </Col>
            <Row>
                <Col>
                    <Table striped bordered hover >
                        <thead>
                        <tr>
                            <th>Area</th>
                            <th>Stage</th>
                            <th>Time</th>
                        </tr>
                        </thead>
                        <tbody>
                        {schedule.map((item, index) => (
                            <tr key={index}>
                                <td>{item.area}</td>
                                <td>Stage {item.stage}</td>
                                <td>{item.time}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>

             Toast Notification
            <ToastContainer position="top-end" className="p-3">
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Notification</strong>
                        <small>Just now</small>
                    </Toast.Header>
                    <Toast.Body>New load-shedding schedule update!</Toast.Body>
                </Toast>
            </ToastContainer>
        </Container>*/}

    <SidebarComponent > </SidebarComponent>
     <div class="container d-flex bg-white">
         <div class="container pt-5  overflow-auto">
             <div class='mb-3'>
                 <p class='fs-3 fw-bold text-muted m-0 p-0'>Dashboard</p>
                 <p class='fs-6 text-muted'>Monitor the electricity yearly complaints and reports </p>
             </div>
             <div class='d-flex align-items-center gap-2 mb-3'>
                 <div className="col-lg-3 p-2">
                     <div className="card shadow">
                         <div className="card-body">
                             <div className="d-flex align-content-center">
                                 <div class='pe-3'><h5 className="card-title"> Total Reports</h5>
                                     <h5 className="card-text bold-text text-muted">555</h5></div>
                                 <img src='/small-graphs.png' alt={'small-graphs'}/>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="col-lg-3 p-2">
                     <div className="card shadow">
                         <div className="card-body">
                             <div className="d-flex align-content-center">
                                 <div class='pe-3'><h5 className="card-title"> Total Complaints</h5>
                                     <h5 className="card-text bold-text text-muted">444</h5></div>
                                 <img src='/small-graphs.png' alt={'small-graphs'}/>
                             </div>
                         </div>
                     </div>
                 </div>

             </div>


             <div class=" bg-light p-0 m-0 mb-5">
                 <div class="card-header d-lg-flex justify-content-lg-between p-0 m-0">
                     <ul class="nav cursor-pointer p-0 m-0">
                         <li class="nav-item" onclick={() => toggleView('reports')}>
                             <a class="nav-link btn-primary px-5 p-3 text-uppercase fw-semibold text-secondary "
                                aria-current="page">
                                 Reports
                             </a>
                         </li>
                         <li class="nav-item" onclick={() => toggleView('complaints')}>
                             <a class="nav-link btn-primary px-5 p-3 text-uppercase fw-semibold text-secondary "
                                aria-current="page">
                                 Complaints
                             </a>
                         </li>
                         <li class="nav-item" onclick={() => toggleView('electricity')}>
                             <a class="nav-link btn-primary px-5 p-3 text-uppercase fw-semibold text-secondary " aria-current="page"  >
                 Electricity Supply
                </a>
                </li>
            </ul>
        </div>
    <div  class="table-responsive rounded-2 ps-3">

        <TableDataService/>

{/*        <table class="table table-hover table-striped table-sm align-middle " >
        <thead >
                <tr>
                <th class="text-secondary bg-white py-3">No</th>
                <th class="text-secondary bg-white py-3">Date</th>
                <th class="text-secondary bg-white py-3">Time</th>
                <th class="text-secondary bg-white py-3">Area</th>
                <th class="text-secondary bg-white py-3">Suburb</th>
                <th class="text-secondary bg-white py-3">Status</th>
                <th class="text-secondary bg-white py-3">Issue No</th>
                    <th class="text-secondary bg-white py-3">Outcome</th>
                    <th class="text-secondary bg-white py-3"></th>
                </tr>
</thead>
    <tbody>
    <tr class="table-light cursor-pointer">
    <td class="text-secondary">55</td>
    <td class="text-secondary">455</td>
    <td class="text-secondary">5454</td>
    <td class="text-secondary">
55454
    </td>
    <td class="text-secondary">
        5444
    </td>

    <td class="text-secondary">45545
    </td>
    <td class="text-secondary"></td>
    <td>
</td>
</tr>
</tbody>
</table>*/}

            </div>

        </div>

    </div>
</div>





</>
  )
}
