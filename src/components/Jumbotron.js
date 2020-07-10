import React from 'react';
import { Jumbotron as Jumbo, Container, Button } from 'react-bootstrap';
import styled from 'styled-components';
import welcomepic from '../assets/images/welcomepic.png';

const Styles =styled.div`
    .jumbo {
        background: url(${welcomepic}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 500px;
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

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>WELCOME TO</h1>
                <h2>Rooster Grin</h2>
                <Button> Button Button</Button>
            </Container>
        </Jumbo>
    </Styles>
)
