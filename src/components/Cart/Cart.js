import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i = 0; i< cart.length; i++){
        const product = cart[i];
        total = total + product.price * product.quantity;
    }
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99
    }

    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <Container>
            <Row>
            <Col>
            <h4>Order Summary</h4>
            <p>Items : {cart.length}</p>
            <p>Price : {formatNumber(total)}</p>
            <p><small>Shipping : {shipping}</small></p>
            <p><small>Tax + VAT : {tax} </small></p>
            <p>Total Price : {grandTotal}</p>
            <br/>
            {
                props.children
            }
            </Col>
            </Row>
        </Container>
    );
};

export default Cart;