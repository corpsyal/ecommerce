import React from 'react';
import useProducts from '../hooks/useProducts';
import useGetProductId from '../hooks/useGetProductId';
import { LinearProgress } from '@material-ui/core';
import ProductItemSheet from '../components/products/ProductItemSheet';

const ProductPage = () => {
    let product: IProduct | undefined;
    const { findProduct, isLoading } = useProducts();
    const productId = useGetProductId();

    if (productId)
        product = findProduct(productId);

    if (isLoading)
        return <LinearProgress />

    return !product ? 'Produit non trouvé !' : <ProductItemSheet product={product} />
}

export default ProductPage;