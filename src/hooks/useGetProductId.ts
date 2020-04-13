import { useRouteMatch } from 'react-router-dom';
import { routes } from '../routers/Router';
import { PRODUCT_PAGE_PATH } from '../constants/routes';

type FindRoutePath = (path: string) => IRoute | undefined;
const findRouteByPath: FindRoutePath = path => routes.find(route => route.path === path);

interface IProductPageParams {
    productId: string;
} 
const useGetProductId  = (): string | undefined => {
    const productPageRoute = findRouteByPath(PRODUCT_PAGE_PATH);
    let match = useRouteMatch<IProductPageParams>(PRODUCT_PAGE_PATH);

    if(!productPageRoute) throw new Error('product page path not defined !');

    if(match && productPageRoute.path === match.path)
        return match.params.productId;
    
    return undefined;
}

export default useGetProductId;