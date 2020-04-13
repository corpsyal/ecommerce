import React, { useMemo, useState, useCallback } from 'react';
import { calcTotalPrice } from '../services/products';

export interface ICartContext {
    products: IProduct[],
    total: number,
    addToCart: (product: IProduct) => void
}

const defaultCartContext: ICartContext = {
    products: [],
    total: 0,
    addToCart: (product) => null
}

export const CartContext = React.createContext<ICartContext>(defaultCartContext);

interface IProvider {
    children: React.ReactNode
}

const Provider = ({ children }: IProvider) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const total = useMemo(() => calcTotalPrice(products) ,[products]);
    const addToCart = useCallback((product: IProduct) => setProducts(actualProducts => ([...actualProducts, product])) , []);

    return <CartContext.Provider value={{products, total, addToCart}}>
        {children}
    </CartContext.Provider>
}

export default Provider;