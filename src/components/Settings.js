import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import SidebarComponent from './global-components/navbar'; // Import the sidebar

function Settings() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
    const [message, setMessage] = useState('');
    const [errorMessages, setErrorMessages] = useState({}); // State for error messages

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};

        // Basic validation
        if (!username) errors.username = 'Username is required.';
        if (!email) {
            errors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid.';
        }
        if (!password) errors.password = 'Password is required.';

        // If there are errors, set them and return
        if (Object.keys(errors).length > 0) {
            setErrorMessages(errors);
            return;
        }

        // Clear error messages if everything is valid
        setErrorMessages({});
        setMessage('Settings updated successfully!');

        // Here you can handle your API call or logic to save the settings
    };

    return (
        <div className="d-flex">
            {/* Sidebar */}
            <SidebarComponent />

            {/* Settings Form */}
            <Container className="my-5">
                <h2 className="text-center">Settings</h2>
                <Form onSubmit={handleSubmit} className="mt-4">
                    <Form.Group controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            isInvalid={!!errorMessages.username} // Show validation feedback
                        />
                        <Form.Control.Feedback type="invalid">
                            {errorMessages.username}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            isInvalid={!!errorMessages.email} // Show validation feedback
                        />
                        <Form.Control.Feedback type="invalid">
                            {errorMessages.email}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            isInvalid={!!errorMessages.password} // Show validation feedback
                        />
                        <Form.Control.Feedback type="invalid">
                            {errorMessages.password}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formNotifications">
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
            </Container>
        </div>
    );
}

export default Settings;
