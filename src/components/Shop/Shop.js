import React, { useEffect } from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css';
import bannerImage from '../../images/banner_bg.png';
import Product from '../Product/Product';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Container, Image,  ButtonGroup, Button, Row, Col } from 'react-bootstrap';
import Footer from '../Footer/Footer';

const Shop = () => {
    const breakfast = fakeData.slice(0,3)
    const [products, setProducts] = useState(breakfast);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map( existingKey => {
            const product = fakeData.find( pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        } )
        setCart(previousCart);
    }, [])

    const handleAddProduct = (product) =>{
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }

    return (
        <Container fluid>
            <Container fluid>
                <Image src={bannerImage} fluid />
                <Row className="justify-content-md-center">
                <ButtonGroup aria-label="Basic example" className="btn justify-content-center" >
                    <Button variant="secondary" > Breakfast</Button>
                    <Button variant="secondary">Lunch</Button>
                    <Button variant="secondary">Dinner</Button>
                </ButtonGroup>
                </Row>
            </Container>
            <Container fluid="md">
                <Row>
                <Col className="card-item">
                {
                    products.map(pd => <Product
                    key={pd.key}
                    showAddToCart={true}
                    handleAddProduct = {handleAddProduct}
                    product={pd}
                    ></Product>)
                }
                </Col>
                </Row>
            </Container>
            <Container fluid>
                <Footer> </Footer>
            </Container>
        </Container>
    );
};

export default Shop;