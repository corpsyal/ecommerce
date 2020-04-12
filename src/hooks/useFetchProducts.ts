import { useRouteMatch } from 'react-router-dom';
import { routes } from '../routers/Router';
import { PRODUCT_PAGE_PATH } from '../constants/routes';
import { fetchProducts, fetchProductById } from '../services/products';

type FindRoutePath = (path: string) => IRoute | undefined;
const findRouteByPath: FindRoutePath = path => routes.find(route => route.path === path);

interface IProductPageParams {
    productId: string;
} 

type UseFetchProducts = () => (() => Promise<IProduct | IProduct[]>) ;
const useFetchProducts: UseFetchProducts  = () => {
    const productPageRoute = findRouteByPath(PRODUCT_PAGE_PATH);
    let match = useRouteMatch<IProductPageParams>(PRODUCT_PAGE_PATH);

    if(!productPageRoute) throw new Error('product page path not defined !');

    const fetchProductFn = (id?: string) => () => id ? fetchProductById(id) : fetchProducts();

    if(match && productPageRoute.path === match.path)
        return fetchProductFn(match.params.productId)
    
    return fetchProductFn()
}

export default useFetchProducts;