import React from 'react';
import './Success.css'
import map from '../../images/map2.gif';
import delivery from '../../images/delivery.gif';
import { useAuth } from '../Login/useAuth';
import {Container, Row, Col, Image, Button, ProgressBar } from 'react-bootstrap';

const Success = () => {
    const auth = useAuth();

    return (
        <Container>
            <Row>
                <Col sm={8}>
                    <Image src={map} fluid />
                </Col>
                <Col sm={4} className="right-side">
                    <Image src={delivery} fluid />
                    <ProgressBar animated now={80} />
                    <p>
                    Estimated Delivery Time.
                    </p>
                    <h3>9.30 PM</h3>
                    <br/>
                    <Button> Connect </Button>
                    <br/>
                    {
                        auth.user &&
                        <span style={{color:'#D21240'}}>Login As : {auth.user.name}</span>
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default Success;