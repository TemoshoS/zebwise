import React from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import Navbar from "react-bootstrap/Navbar";
import NavbarComponent from "./global-components/navbar";

export default ReportsComponent;


function ReportsComponent() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <>
            <NavbarComponent ></NavbarComponent>
            <Container>
                <div class='col-4 bg-light p-3 mt-3 '>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formArea">
                            <Form.Label>Area</Form.Label>
                            <Form.Control type="text" placeholder="Enter your area" />
                        </Form.Group>

                        <Form.Group controlId="formStage">
                            <Form.Label>Stage</Form.Label>
                            <Form.Control as="select">
                                <option>Stage 1</option>
                                <option>Stage 2</option>
                                <option>Stage 3</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formDetails">
                            <Form.Label>Details</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter details" />
                        </Form.Group>

                        <Button class='mt-3 btn-primary btn' type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Container>
        </>

);
}
