import { fetchProducts, fetchProductById } from '../services/products';
import useGetProductId from './useGetProductId';

type UseFetchProducts = () => (() => Promise<IProduct | IProduct[]>) ;
const useFetchProducts: UseFetchProducts  = () => {
    const productId = useGetProductId();

    const fetchProductFn = (id?: string) => () => id ? fetchProductById(id) : fetchProducts(); // kind of delegate

    return productId ? fetchProductFn(productId) : fetchProductFn()
}

export default useFetchProducts;