import React from 'react';
import './Emergency.css'
import call from '../../../img/png-icon-20.png'
import { Col, Form, Row } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const Emergency = () => {
    return (
        <div className="emargency-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 emargency-design">
                        <div className="fist-div-emergancy">
                            <div className="sec-div-emargency">
                                <img src={call} alt="" />

                            </div>
                        </div>
                        <h1 className="title">Emergency call</h1>
                        <h1 className="phone">+273-649300</h1>
                        <h4 className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. cumsan lacus vel facilisis.</h4>
                    </div>
                    <div className="col-md-6">
                        <div className="form-dsign">
                            <h3 style={{color:"white",fontSize:"36px"}}> Connect Us For Appointment</h3>
                            <Form className="mt-5">
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Control placeholder="1234 Main St" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGridAddress2">
                                    <Form.Control placeholder="Apartment, studio, or floor" />
                                </Form.Group>
                                <Button className="custom-btn-another" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Emergency;