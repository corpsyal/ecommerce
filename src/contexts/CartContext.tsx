import React, { useMemo, useState, useCallback } from 'react';

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
    const total = useMemo(() => products.reduce((totalPrice: number, product: IProduct) => product.price + totalPrice , 0) ,[products]);
    const addToCart = useCallback((product: IProduct) => setProducts(actualProducts => ([...actualProducts, product])) , []);

    return <CartContext.Provider value={{products, total, addToCart}}>
        {children}
    </CartContext.Provider>
}

export default Provider;