import React from 'react';
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';
import '..';// Ensure you have this file for custom styles
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate(); 

  const handleGetStarted = () => {
    navigate('/dashboard');  // Navigate to the dashboard route
  };

  return (
    <>

      <Container fluid className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#E6F0F8' }}>
        <Card className="bg-white rounded-3 shadow-lg p-5 w-100" style={{ maxWidth: '1000px' }}>
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="d-flex align-items-center">

            </div>
            <div className="d-flex align-items-center gap-2">
              <span className="text-muted">English</span>
              <Button variant="outline-secondary" className="rounded-pill px-4 py-1">Sign in</Button>
              <Button variant="teal" className="rounded-pill px-4 py-1" style={{ color: 'white' }}>Sign up</Button>
            </div>
          </div>
          {/* Main Content */}
          <Row>
            <Col md={6}>
              <h4 className="fw-bold mb-3" style={{ color: 'gray', fontSize:'2em' }}>Welcome to</h4>
              <h1 className="display-6 fw-bold mb-3" style={{ color: '#20C997', fontSize:'3em' }}>Central Database Management</h1>
              <p className="text-muted mb-4">
                CDM is a complete information management solution for your business allowing you to process, analyze, store and share energy usage and power quality data across your entire enterprise.
              </p>
              <div className="d-flex align-items-center gap-3 mb-4">
                <Button variant="teal" className="rounded-pill px-4 py-2" style={{ color: 'white' }} onClick={handleGetStarted}>Get Started</Button>
                <a href="#" className="text-teal">How it works</a>
              </div>
            </Col>

            <Col md={6} className="d-flex justify-content-center align-items-center">
              <div className="position-relative">

                <Image
                  src="https://www.360connect.com/wp-content/uploads/2020/08/image-from-rawpixel-id-400876-original-1024x667.jpg"
                  alt="Dashboard preview"
                  style={{ width: '400px', height: '250px' }} // Adjust the width and height as needed
                  className="position-relative"
                />

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