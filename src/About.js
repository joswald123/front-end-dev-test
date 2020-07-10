import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`

    .font {
        font-family: 'Grenze Gotisch', cursive;
        
    }

 
`;


export const About = () => (
    <Styles>
        <Container>
            <Row>
                <Col>
                    <div className="font">
                        <h2>About Page</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vero fugiat consequatur dignissimos fugit dolorem numquam
                            quis sit! Ipsum illum harum facere rerum inventore ipsam, dicta quis deleniti voluptatem et.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, beatae similique quisquam eveniet quidem
                            esse deleniti enim voluptatum corporis vel aliquid voluptate saepe quasi nemo natus repellat dolor ut aliquam!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptas? Iure, asperiores porro. Provident
                            possimus explicabo totam? Nemo, exercitationem blanditiis aliquam dicta vitae minus incidunt optio repellat
                            eveniet sed fugiat?
                        </p>

                    </div>

                </Col>
            </Row>

        </Container>
    </Styles>


)


