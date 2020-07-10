import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/icons/logo-white.svg';

const Styles = styled.div`
  .navbar {
    background-color: #222;
    font-family: 'Grenze Gotisch', cursive;
    font-size: 25px;
  }
  .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    
    
    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand>
            <a href="/">
            <img src={logo} alt="Rooster Grin" style={{width:170, marginTop: -7}} />
            </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>          
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)
