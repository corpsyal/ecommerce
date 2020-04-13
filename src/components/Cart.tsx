import React from 'react';
import useCart from '../hooks/useCart';

const Cart = () => {
    const { total, products } = useCart();

    return (
        <span>Nombre de produits: {products.length}, prix total: {total}€</span>
    )
}

export default Cart;