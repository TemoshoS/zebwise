import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Alert, Row, Col, Card } from 'react-bootstrap';
import { User, Calendar, Mail, Bell } from 'lucide-react';
import SidebarComponent from './global-components/navbar';

function Settings() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
    const [message, setMessage] = useState('');
    const [errorMessages, setErrorMessages] = useState({});
    const [complaintsList, setComplaintsList] = useState([]);

    // New state for user profile
    const [userProfile, setUserProfile] = useState({
        displayName: 'John Doe',
        joinDate: '2023-01-15',
        profilePicture: '/api/placeholder/150/150',
        role: 'Community Member',
        totalComplaints: 0,
        lastActive: '2024-03-28'
    });

    useEffect(() => {
        // Simulate fetching user data and complaints
        const preloadedComplaints = [
            "The daam is not working.",
            "There is an electric fault.",
            "Notifications are not working as expected.",
            "Can't access the account settings page."
        ];
        setComplaintsList(preloadedComplaints);

        // Update total complaints in profile
        setUserProfile(prev => ({
            ...prev,
            totalComplaints: preloadedComplaints.length
        }));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};

        if (!username) errors.username = 'Username is required.';
        if (!email) {
            errors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid.';
        }
        if (!password) errors.password = 'Password is required.';

        if (Object.keys(errors).length > 0) {
            setErrorMessages(errors);
            return;
        }

        setErrorMessages({});
        setMessage('Settings updated successfully!');
    };

    return (
        <div className="d-flex">
            <SidebarComponent />

            <Container className="my-5">
                {/* User Profile Card */}
                <Card className="mb-4">
                    <Card.Body>
                        <Row>
                            <Col md={3} className="text-center">
                                <img
                                    src={userProfile.profilePicture}
                                    alt="Profile"
                                    className="rounded-circle mb-3"
                                    style={{ width: '150px', height: '150px' }}
                                />
                                <h4>{userProfile.displayName}</h4>
                                <p className="text-muted">{userProfile.role}</p>
                            </Col>
                            <Col md={9}>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <div className="d-flex align-items-center mb-2">
                                            <Calendar className="me-2" size={20} />
                                            <span>Joined: {new Date(userProfile.joinDate).toLocaleDateString()}</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-2">
                                            <User className="me-2" size={20} />
                                            <span>Total Complaints: {userProfile.totalComplaints}</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <Calendar className="me-2" size={20} />
                                            <span>Last Active: {new Date(userProfile.lastActive).toLocaleDateString()}</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                {/* Settings Form */}
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Account Settings</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formUsername" className="mb-3">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    isInvalid={!!errorMessages.username}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errorMessages.username}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    isInvalid={!!errorMessages.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errorMessages.email}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="formPassword" className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    isInvalid={!!errorMessages.password}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errorMessages.password}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="formNotifications" className="mb-3">
                                <Form.Check
                                    type="checkbox"
                                    label="Enable Notifications"
                                    checked={notificationsEnabled}
                                    onChange={(e) => setNotificationsEnabled(e.target.checked)}
                                />
                            </Form.Group>

                            <Button variant="teal" type="submit" style={{ backgroundColor: '#20C997', color: 'white' }}>
                                Save Changes
                            </Button>
                        </Form>

                        {message && <Alert variant="success" className="mt-3">{message}</Alert>}
                    </Card.Body>
                </Card>

                {/* Complaints History */}
                <Card className="mt-4">
                    <Card.Body>
                        <h3>Participation History</h3>
                        <div className="mt-4">
                            <h5>Your Complaints</h5>
                            {complaintsList.length > 0 ? (
                                <ul className="list-unstyled">
                                    {complaintsList.map((comp, index) => (
                                        <li key={index} className="mb-2">
                                            • {comp}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No complaints available.</p>
                            )}
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default Settings;