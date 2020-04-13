import React from 'react';
import useProducts from '../hooks/useProducts';
import { LinearProgress, Grid } from '@material-ui/core';
import ProductItem from '../components/products/product-item';

const Home = () => {
    const { products, isLoading } = useProducts();

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