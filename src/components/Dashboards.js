import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Toast, ToastContainer } from 'react-bootstrap';
import NavbarComponent from "./global-components/navbar";
import {getSchedule} from "../services/load-shedding.service";
// import { getSchedule } from '../services/load-shedding.service';
export default function Dashboards() {
    const [schedule, setSchedule] = useState([]);
    const [showToast, setShowToast] = useState(false);

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

    return (

    <>
      <NavbarComponent />
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

            {/* Toast Notification */}
            <ToastContainer position="top-end" className="p-3">
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Notification</strong>
                        <small>Just now</small>
                    </Toast.Header>
                    <Toast.Body>New load-shedding schedule update!</Toast.Body>
                </Toast>
            </ToastContainer>
        </Container>
    </>
  )
}
