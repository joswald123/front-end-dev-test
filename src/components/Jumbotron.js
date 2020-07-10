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
        
    }
    .font {
        font-family: 'Monoton', cursive;
        font-size: 50%

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
    
    <Styles>
    <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container className="p-5 m-5">
    
    <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 2 }}
    >
       
                    <Row >
                        <Col md={{ span: 4, offset: 4 }}>
                        <div className="font">
                        <h1 >WELCOME TO</h1>
                      
                        </div>
                        </Col>
                    </Row>
                    <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                    <h3>Rooster Grin</h3>
                    </Col>
                    </Row>
                    </motion.div>
                </Container>
            </Jumbo>
        </Styles>
    

)
