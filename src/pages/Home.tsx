import React from 'react';
import useProducts from '../hooks/useProducts';

const Home = () => {
    const products = useProducts();

    return (
        <div>HomePage !</div>
    );
}

export default Home;