import React from 'react';
import { Navbar, Nav, NavItem, Image, Row, Col } from 'react-bootstrap';
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'

export const Footer = () => (
    <Navbar className="justify-content-md-center mt-5 mb-3">
        <Nav navbar>
            <NavItem>
                <Row>
                    <Col>
                    <h5>Follow us:</h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Image src={facebook} rounded />
                    </Col>
                    <Col>
                    <Image src={instagram} rounded />
                    </Col>
                </Row>    
            </NavItem>
        </Nav>
    </Navbar >
);

