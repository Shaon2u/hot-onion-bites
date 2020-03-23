import React from 'react';
import './Footer.css'
import { Container, Row, Col} from 'react-bootstrap';

const Footer = () => {


    return (
        <Container fluid className="footer-bg">
            <Row>
            <Col><h5> Footer Sec 1</h5></Col>
            <Col><h5> Footer Sec 1</h5></Col>
            <Col><h5> Footer Sec 1</h5></Col>
            </Row>
        </Container>
    );
};

export default Footer;