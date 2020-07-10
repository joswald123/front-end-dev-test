import React from 'react';
import { Jumbotron as Jumbo, Col, Row, Container, Carousel, Button } from 'react-bootstrap';
import banner1 from './assets/images/banner1.png';
import banner2 from './assets/images/banner2.png';
import banner3 from './assets/images/banner3.png';
import safeicons from './assets/images/safeicons.svg';
import styled from 'styled-components';

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
        background: url(${safeicons}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 500px;
        weight: 200px;
        position: relative;
        z-index: -2;
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

export const Home = () => (
    <Styles>
        <Container fluid>
            <Row>

                <Col md={{ span: 4, offset: 2 }}>
                    <h1>LOREM IPSUM</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates fugiat soluta
                    maiores asperiores delectus fugit. Tenetur, quam voluptatibus. Unde consequatur saepe odit nostrum ea
                    nobis dicta facilis dignissimos aliquid! Totam iure magnam quis minima impedit tenetur, ab minus cum hic ea,
                    quas nihil harum vero, quidem unde saepe voluptatem suscipit! Tempore doloribus consequatur amet quaerat, minus
            </p>

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
                        <div className="overlay"></div>
                        <Container>
                            <h1>WELCOME TO</h1>
                            <h2>Rooster Grin</h2>
                            <Button> Button Button</Button>
                        </Container>
                    </Jumbo>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 4, offset: 2 }}>
                    <h1>LOREM IPSUM</h1>
                    <h1>DOLOR SIT AMET</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta debitis nemo repellendus voluptates nulla.
                    At accusantium reprehenderit iste perferendis, aliquam magni facere voluptates repellendus nulla ea! Voluptates,
                repudiandae. Quod, quibusdam.</p>
                </Col>
                <Col>
                    <Jumbo fluid className="icons">
                        <div className="overlay"></div>
                    </Jumbo>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Jumbo fluid className="banner-3">
                        <div className="overlay"></div>
                        <Container>
                            <h1>WELCOME TO</h1>
                            <h2>Rooster Grin</h2>
                            <Button> Button Button</Button>
                        </Container>
                    </Jumbo>
                </Col>
            </Row>


            <Row>
                <Col md={{ span: 3, offset: 3 }}>
                    <h1>LOREM IPSUM</h1>
                    <h1>LOREM IPSUM</h1>
                    <h1>LOREM IPSUM</h1>
                </Col>
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.pexels.com/photos/242236/pexels-photo-242236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at inventore iusto atque odit non aspernatur quo quisquam repudiandae magni, obcaecati, blanditiis ipsam, harum fuga deserunt. Ex fuga obcaecati ratione.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.pexels.com/photos/242236/pexels-photo-242236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="First slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.pexels.com/photos/242236/pexels-photo-242236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="First slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </Col>
            </Row>

        </Container>
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="2">
                    <h3>Follow Us:</h3>
                </Col>
                

            </Row>

        </Container>

    </Styles>


)


