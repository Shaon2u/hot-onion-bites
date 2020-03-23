import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import { Container } from 'react-bootstrap';

const ProductDetail = (props) => {

    const {productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey);

    return (
        <Container>
            <h1>Your Product Details.</h1>
            <Product showAddToCart={true} product={product} >
            </Product>
        </Container>
    );
};

export default ProductDetail;