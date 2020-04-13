import React from 'react';
import Button from '@material-ui/core/Button';
import ProductItemWrapper from './ProductItemWrapper';

interface IProductItemSheetProps {
  product: IProduct
}

const ProductItemSheet = ({ product }: IProductItemSheetProps) => {

  return (
    <ProductItemWrapper product={product}>
      {/* Button tag in a Link tag is not valid html, it's just for sample, in real usecase we must take the time to style the link component */}
          <Button size="large" variant="contained" color="primary" fullWidth>
            Ajouter au panier
          </Button>
    </ProductItemWrapper>
  );
}

export default ProductItemSheet;