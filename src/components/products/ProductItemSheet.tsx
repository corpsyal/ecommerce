import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';
import ProductItemWrapper from './ProductItemWrapper';
import useCart from '../../hooks/useCart';

interface IProductItemSheetProps {
  product: IProduct
}

const ProductItemSheet = ({ product }: IProductItemSheetProps) => {
  const { addToCart } = useCart();
  const handleClick = useCallback(() => addToCart(product) , [product, addToCart]);

  return (
    <ProductItemWrapper product={product}>
      {/* Button tag in a Link tag is not valid html, it's just for sample, in real usecase we must take the time to style the link component */}
          <Button size="large" variant="contained" color="primary" fullWidth onClick={handleClick}>
            Ajouter au panier
          </Button>
    </ProductItemWrapper>
  );
}

export default ProductItemSheet;