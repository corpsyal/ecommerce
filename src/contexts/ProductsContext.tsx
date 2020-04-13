import React, { useState, useEffect, useCallback } from 'react';
import useFetchProducts from '../hooks/useFetchProducts';

export interface IProductsContext {
    products: IProduct[];
    isLoading: boolean;
    fetchProducts: () => void;
}

const defaultProductsContextValue: IProductsContext = {
    products: [],
    isLoading: false,
    fetchProducts: () => null
}

export const Context = React.createContext<IProductsContext>(defaultProductsContextValue);

interface IProvider {
    children: React.ReactNode
}

const Provider = ({ children }: IProvider) => {
    const [products, setProducts] = useState<IProduct[]>([]); // default products array of type IProduct[]
    const [isLoading, setIsLoading] = useState(false);

    const fetchProductsFn = useFetchProducts();

    const fetchProducts = useCallback(async () => {
        setIsLoading(true);
        const fetchedProducts = await fetchProductsFn();
        // here we use a kind of delegate, the concat trick is usefull to create an array no matter the reponse format data,
        // wether an object or an array the output will always be [myProduct]
        setProducts(actualProducts => actualProducts.concat(fetchedProducts));
        setIsLoading(false);
    }, [fetchProductsFn]);

    useEffect(() => {
        fetchProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // empty dependencies to use as componentDidMount

    return (
        <Context.Provider value={{ products, isLoading, fetchProducts }}>
            {children}
        </Context.Provider>
    );
}

export default Provider;