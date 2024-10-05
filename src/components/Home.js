import React from 'react';
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';
import '..';
import NavbarComponent from "./global-components/navbar"; // Ensure you have this file for custom styles

export default function Home() {
  return (
      <>
        <NavbarComponent />
        <Container fluid className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#E6F0F8' }}>
          <Card className="bg-white rounded-3 shadow-lg p-5 w-100" style={{ maxWidth: '1000px' }}>
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="d-flex align-items-center">
                <div className="bg-teal-600 text-white rounded-circle p-2 me-2">
                  <i className="fas fa-bolt"></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-0">Centralized Electricity and</h5>
                  <small className="text-muted">Complaints Management</small>
                </div>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span className="text-muted">English</span>
                <Button variant="outline-secondary" className="rounded-pill px-4 py-1">Sign in</Button>
                <Button variant="teal" className="rounded-pill px-4 py-1">Sign up</Button>
              </div>
            </div>
            {/* Main Content */}
            <Row>
              <Col md={6}>
                <h4 className="fw-bold mb-3">Welcome to</h4>
                <h1 className="display-6 fw-bold mb-3">Electricity Management System</h1>
                <p className="text-muted mb-4">
                  EMS is a complete energy information management solution for your business allowing you to process, analyze, store and share energy usage and power quality data across your entire enterprise.
                </p>
                <div className="d-flex align-items-center gap-3 mb-4">
                  <Button variant="teal" className="rounded-pill px-4 py-2">Get Started</Button>
                  <a href="#" className="text-teal">How it works</a>
                </div>
                <div className="d-flex gap-3">
                  <Image src="https://placehold.co/120x40" alt="Google Play Store" fluid />
                  <Image src="https://placehold.co/120x40" alt="Apple App Store" fluid />
                </div>
              </Col>
              <Col md={6} className="d-flex justify-content-center align-items-center">
                <div className="position-relative">
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-teal-100 rounded-circle"></div>
                  <Image src="https://placehold.co/300x300" alt="Dashboard preview" className="position-relative" />
                </div>
              </Col>
            </Row>
            {/* Footer */}
            <div className="d-flex justify-content-between align-items-center mt-4 text-muted small">
              <div className="d-flex gap-3">
                <a href="#">Term of Use</a>
                <a href="#">Privacy Policy</a>
              </div>
              <div>© 2024 All rights reserved.</div>
            </div>
          </Card>
        </Container>

      </>
  );
}