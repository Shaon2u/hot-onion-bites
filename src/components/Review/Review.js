import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';
import { Button, Row, Col, Container } from 'react-bootstrap'


const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const auth = useAuth();

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(()=>{
        //cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const cartProducts =  productKeys.map( key => {
            const product = fakeData.find( pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    }, []);

    let thankyou;
    if(orderPlaced){
        thankyou = <img src={happyImage} alt=""/>
    }
    return (
        <Container fluid>
            <Row>
                <Col sm={8}>
                {
                    cart.map(pd => <ReviewItem
                        key={pd.key}
                        removeProduct = {removeProduct}
                        product={pd}></ReviewItem>)
                }
                { thankyou }
                {
                    !cart.length &&
                    <h1>Cart is empty :( <br/>
                    <a href="/shop"> Keep shopping</a></h1>
                }
                </Col>
                <Col sm={4}>
                    <Cart cart={cart}>
                        <Link to="shipment">
                        {
                            auth.user ?
                            <Button variant="success"> Proceed Checkout </Button>
                            :
                            <Button variant="danger"> Login to Proceed </Button>
                        }
                        </Link>
                    </Cart>
                </Col>
            </Row>
        </Container>
    );
};

export default Review;