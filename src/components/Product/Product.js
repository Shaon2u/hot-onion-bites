import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';

const Product = (props) => {
    const { img, name, category, price, stock, key, description } = props.product;

    return (
        <Container fluid>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>

                    <Card.Title>
                        <Link to={"/product/"+key}>
                            {name}
                        </Link>
                    </Card.Title>

                    <Card.Text>
                        <p> {description} </p>
                        <p>Price: ${price}</p>
                        <p><small> {category} {stock} items left - Order soon</small></p>
                    </Card.Text>

                        { props.showAddToCart === true &&
                        <Button variant="primary" className="add-to-cart-btn"
                        onClick={() => props.handleAddProduct(props.product)}>
                        <FontAwesomeIcon icon={faShoppingCart}/>
                         add to cart
                        </Button> }
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Product;