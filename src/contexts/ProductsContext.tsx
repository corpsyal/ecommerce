import React, { useState, useCallback } from 'react';
// import useFetchProducts from '../hooks/useFetchProducts';
import { findProductById, fetchAllProducts, fetchProductById } from '../services/products';
import uniqBy from 'lodash.uniqby';

export interface IProductsContext {
    products: IProduct[];
    isLoading: boolean;
    fetchProducts: (id?: string) => void;
    findProduct: (id: string) => IProduct | undefined;
}

const defaultProductsContextValue: IProductsContext = {
    products: [],
    isLoading: false,
    fetchProducts: () => Promise.resolve([]),
    findProduct: (id) => undefined,
}

export const Context = React.createContext<IProductsContext>(defaultProductsContextValue);

interface IProvider {
    children: React.ReactNode
}

const Provider = ({ children }: IProvider) => {
    const [products, setProducts] = useState<IProduct[]>([]); // default products array of type IProduct[]
    const [isLoading, setIsLoading] = useState(false);
    const [allProductsFetchedFlag, setAllProductsFetchedFlag] = useState(false);

    const findProduct = useCallback((id: string) => findProductById(products)(id), [products]);
    const updateProducts = useCallback((fetchedProducts: IProduct | IProduct[]) => setProducts(actualProducts => uniqBy(actualProducts.concat(fetchedProducts), 'id')), []);

    const fetchProducts = useCallback(async (id?: string) => {
        setIsLoading(true);
        let fetchedProducts;
        if(id && !findProductById(products)(id)) // if we triggered a fetch with an id that it's not stored yet
            fetchedProducts = await fetchProductById(id);

        else if(!allProductsFetchedFlag){
            fetchedProducts = await fetchAllProducts();
            setAllProductsFetchedFlag(true) // we use a flag to avoid call fetch on every homepage mount
        }

        if(fetchedProducts)
            updateProducts(fetchedProducts);
        
        setIsLoading(false);
    }, [updateProducts, allProductsFetchedFlag, products]);

    return (
        <Context.Provider value={{ products, isLoading, fetchProducts, findProduct }}>
            {children}
        </Context.Provider>
    );
}

export default Provider;