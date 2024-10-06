import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Toast, ToastContainer } from 'react-bootstrap';
import NavbarComponent from "./global-components/navbar";
import {getSchedule} from "../services/load-shedding.service";
// import { getSchedule } from '../services/load-shedding.service';
// import './Dashboards.css'
import SidebarComponent from "./global-components/navbar";
import TableDataService from "../services/table-data.service";
import TableData2Service from "../services/table2-data.service";
import TableData3Service from "../services/table3-data.service";

export default function Dashboards() {
    const [schedule, setSchedule] = useState([]);
    const [showToast, setShowToast] = useState(false);
    const [displayReports, setDisplayReports] = useState(true);
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
                setDisplayComplaints(false)
                setDisplayElectricity(false);
                break;

            case  'complaints':
                setDisplayReports(false);
                setDisplayComplaints(true)
                setDisplayElectricity(false);
                break;

            case  'electricity':
                setDisplayReports(false);
                setDisplayComplaints(false)
                setDisplayElectricity(true);
                break;

        }
    }






    return (
        <>
    <SidebarComponent > </SidebarComponent>
     <div class="container d-flex bg-white">
         <div class="container   overflow-auto">
             <div class='mb-3'>
                 <p class='fs-3 fw-bold text-muted m-0 p-0'>Dashboard</p>
                 <p class='fs-6 text-muted'>Track and analyze yearly service delivery complaints and reports</p>
             </div>
             <div class='d-flex align-items-center gap-2 mb-3'>
                 <div className="col-lg-3 p-2">
                     <div className="card shadow">
                         <div className="card-body">
                             <div className="d-flex align-content-center">
                                 <div class='pe-5'><h5 className="card-title"> Total&nbsp;Reports</h5>
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
                                 <div class='pe-3'><h5 className="card-title"> Total&nbsp;Complaints</h5>
                                     <h5 className="card-text bold-text text-muted">305</h5></div>
                                 <img src='/small-graphs.png' alt={'small-graphs'}/>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="col-lg-4 p-2">
                     <div className="card shadow">
                         <div className="card-body">
                             <div className="d-flex align-content-center">
                                 <div class='pe-5'><h5 className="card-title"> Total&nbsp;Engagements</h5>
                                     <h5 className="card-text bold-text text-muted">444</h5></div>
                                 <img src='/small-graphs.png' alt={'small-graphs'}/>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>

             <div class=" bg-light p-0 m-0 mb-5">
                 <div class="bg-secondary d-lg-flex justify-content-lg-between p-0 m-0">
                     <div class="nav cursor-pointer p-0 m-0">
                         <li class="nav-item cursor-pointer"  style={{
                             backgroundColor: displayReports ? '#20C997' : 'inherit',
                             color: displayReports ? 'white' : '#414143FF',
                             cursor: 'pointer',
                         }} >
                             <a class="nav-link btn-primary px-5 p-3  text-uppercase fw-semibold  "
                                style={{
                                    color: displayReports ? 'white' : '#414143FF',
                                }}
                                onClick={() => toggleView('reports')}
                                aria-current="page">
                                 Reports
                             </a>
                         </li>
                         <li class="nav-item cursor-pointer"
                             style={{
                                 backgroundColor: displayComplaints ? '#20C997' : 'inherit',
                                 color: displayComplaints ? 'white' : '#414143FF',
                                 cursor: 'pointer',
                             }}
                         >
                             <a class="nav-link btn-primary px-5 p-3 text-uppercase fw-semibold  "  style={{
                                 color: displayComplaints ? 'white' : '#414143FF',
                             }}

                                onClick={() => toggleView('complaints')}
                                aria-current="page">
                                 Complaints
                             </a>
                         </li>
                         <li class="nav-item cursor-pointer"
                             style={{
                                 backgroundColor: displayElectricity ? '#20C997' : 'inherit',
                                 color: displayElectricity ? 'white' : '#414143FF',
                                 cursor: 'pointer',
                             }}
                         >
                             <a class="nav-link btn-primary px-5 p-3 text-uppercase fw-semibold text-muted "
                                style={{
                                    color: displayElectricity ? 'white' : '#414143FF',
                                }}
                                onClick={() => toggleView('electricity')}
                                aria-current="page"  >
                 LadderBoard
                </a>
                </li>
            </div>
        </div>
                 <div  class="table-responsive rounded-2 ps-3">

                 {displayReports ? <TableDataService/> : ''}
                 {displayComplaints ? <TableData2Service/> : ''}
                 {displayElectricity ? <TableData3Service/> : ''}
            </div>

        </div>

    </div>
</div>





</>
  )
}