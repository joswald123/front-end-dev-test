import React from 'react';
import { Jumbotron as Jumbo, Col, Row, Container, Button } from 'react-bootstrap';
import banner1 from './assets/images/banner1.png';
import banner2 from './assets/images/banner2.png';
import banner3 from './assets/images/banner3.png';
import safeicons from './assets/images/safeicons.png';
import styled from 'styled-components';
import SlideView from './components/SlideView';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';





const Wrapper = styled.div`
    width:100%;
`;

const Styles = styled.div`
    .banner-1 {
        background: url(${banner1}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 500px;
        weight: 500px;
        position: relative;
        z-index: -2;
        

    }
    .banner-2 {
        background: url(${banner2}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 500px;
        weight: 500px;
        position: relative;
        z-index: -2;
    }
    .banner-3 {
        background: url(${banner3}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 500px;
        weight: 500px;
        position: relative;
        z-index: -2;
    }
    .icons {
        background: url(${safeicons}) no-repeat;
        background-size: cover;
        color: #efefef;
        height: 500px;
        weight: 500px;
        position: relative;
       
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
    .font {
        font-family: 'Grenze Gotisch', cursive;
        color: #333;
    }

`;

export const Home = () => (
    <Wrapper>
        <Styles>
            <Container fluid>
                <Row>

                    <Col md={{ span: 4, offset: 2 }}>
                        <div className="font">  
                        <h1>Health and Saftey</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates fugiat soluta
                        maiores asperiores delectus fugit. Tenetur, quam voluptatibus. Unde consequatur saepe odit nostrum ea
                        nobis dicta facilis dignissimos aliquid! Totam iure magnam quis minima impedit tenetur, ab minus cum hic ea,
                        quas nihil harum vero, quidem unde saepe voluptatem suscipit! Tempore doloribus consequatur amet quaerat, minus
                        </p>
                        </div>
                    </Col>
                    <Col>
                        <Jumbo fluid className="banner-1">
                            <div className="overlay"></div>
                        </Jumbo>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Jumbo fluid className="banner-2">
                           
                            <Container >
                                <div className="font">
                                <h1>We Are here for You!</h1>
                                </div>   
                            </Container>
                        </Jumbo>
                          
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 4, offset: 2 }}>
                        <div className="font">      
                        <h1>Learn more about us</h1>
                        <h1>And how safe we are</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta debitis nemo repellendus voluptates nulla.
                        At accusantium reprehenderit iste perferendis, aliquam magni facere voluptates repellendus nulla ea! Voluptates,
                        repudiandae. Quod, quibusdam.
                        </p>
                        </div>
                        <Link to="/about">
                                    <Button class="text-center"> About Us</Button>
                                </Link>                        
                    </Col>
                    <Col>
                        <Jumbo className="icons">
                            <div className="overlay"></div>
                        </Jumbo>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Jumbo fluid className="banner-3">
                            <div className="overlay"></div>
                            <Container>
                                <Row>
                                    <Col md={{ span: 4, offset: 6 }}>
                                    <div className="font">  
                                    <h1>Roster Kid Aproved</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta debitis nemo repellendus voluptates nulla.
                                    At accusantium reprehenderit iste perferendis, aliquam magni facere voluptates repellendus nulla ea! Voluptates,
                                    repudiandae. Quod, quibusdam.
                                    </p>    
                                   
                                    
                                    </div>
                                    
                                    </Col>
                                </Row>
                            </Container>
                        </Jumbo>
                    </Col>
                </Row>


                <Row>
                    <Col md={{ span: 3, offset: 3 }}>
                        <div className="font">
                        <h1>Contact us for Help</h1>
                        <h1>We can do it together</h1>
                        <h3> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></h3>
                        <Link to="/about">
                                    <Button class="text-center"> Contact</Button>
                                </Link>   
                        </div>      
                    </Col>
                    <Col>
                        <SlideView />

                    </Col>
                </Row>

            </Container>
        </Styles>

    </Wrapper>



)


