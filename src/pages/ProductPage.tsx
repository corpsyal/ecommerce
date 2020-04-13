import React from 'react';
import useProducts from '../hooks/useProducts';

const ProductPage = () => {
    const products = useProducts();

    return (
        <div>ProductPage !</div>
    );
}

export default ProductPage;