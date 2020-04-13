import React, { useEffect } from 'react';
import useProducts from '../hooks/useProducts';
import { LinearProgress, Grid } from '@material-ui/core';
import ProductItem from '../components/products/ProductItem';

const Home = () => {
    const { products, isLoading, fetchProducts } = useProducts();


    useEffect(() => {
        fetchProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // empty dependencies to use as componentDidMount

    return isLoading ? <LinearProgress /> : (
        <Grid container>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={4}>
                    {products.map((product) => (
                        <Grid key={product.id} item>
                            <ProductItem product={product} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Home;