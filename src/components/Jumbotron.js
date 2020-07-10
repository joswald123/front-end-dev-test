import React from 'react';
import { Jumbotron as Jumbo, Container, Button, Row, Col } from 'react-bootstrap';
import { motion } from "framer-motion";
import styled from 'styled-components';
import welcomepic from '../assets/images/welcomepic.png';



const Styles = styled.div`
    .jumbo {
        background: url(${welcomepic}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 500px;
        position: relative;
        z-index: -2;
        font-family: 'Tangerine', serif;

    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0:
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

export const Jumbotron = () => (
    <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 2 }}
    >
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container className="p-5 m-5">
                    <Row >
                        <Col md={{ span: 6, offset: 3 }}>
                        <h1 >WELCOME TO</h1>
                        <h2>Rooster Grin</h2>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                        <Button> Button Button</Button>
                        </Col>
                    </Row>
                </Container>
            </Jumbo>
        </Styles>
    </motion.div>

)
