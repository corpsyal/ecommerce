import { CartContext, ICartContext } from "../contexts/CartContext";
import { useContext } from "react";

const useCart = (): ICartContext => {
    const context = useContext(CartContext);

    if (context === undefined) {
        throw new Error('useCountDispatch must be used within a CountProvider')
    }

    return context;

}

export default useCart;