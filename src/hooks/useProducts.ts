import { Context as ProductsContext, IProductsContext } from "../contexts/ProductsContext";
import { useContext } from "react";

const useProducts = (): IProductsContext => {
    const context = useContext(ProductsContext);

    if (context === undefined) {
        throw new Error('useCountDispatch must be used within a CountProvider')
    }

    return context;

}

export default useProducts;