import React from 'react';
import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap';
import NavbarComponent from "./global-components/navbar";
import SidebarComponent from "./global-components/navbar";

export default function Reports() {
  return (
    <>
      {/* Sidebar */}
      <SidebarComponent />
      
      {/* Main Content */}
      <Container >
        
        
        {/* Reports Section */}
        <div className="content-wrapper" style={{ marginLeft: '250px', padding: '20px' }}>
          <h1 className="mb-4">Reports</h1>
          <p>View and generate reports' statements.</p>

          {/* Filters Section */}
          <Form className="mb-4">
            <Row>
              <Col md={4}>
                <Form.Group controlId="reportType">
                  <Form.Label>Report Type</Form.Label>
                  <Form.Control as="select">
                    <option>Select a report type</option>
                    <option>Electricity related Report</option>
                    <option>Sanitation related Report</option>
                    <option>Housing related Report</option>
                  </Form.Control>
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group controlId="startDate">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group controlId="endDate">
                  <Form.Label>End Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="teal" className="mt-3">Generate Report</Button>
          </Form>

          {/* Reports Table */}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Report Name</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Electricity Report Q1</td>
                <td>01-04-2024</td>
                <td>
                  <Button variant="outline-secondary" size="sm">View</Button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Sanitation Report</td>
                <td>01-05-2024</td>
                <td>
                  <Button variant="outline-secondary" size="sm">View</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
}
