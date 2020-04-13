import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ProductItemWrapper from './ProductItemWrapper';

const useStyles = makeStyles({
  link: {
    width: '100%',
    textDecoration: 'none'
  }
});

interface IProductItemProps {
  product: IProduct
}

const ProductItem = ({ product }: IProductItemProps) => {
  const classes = useStyles();

  return (
    <ProductItemWrapper product={product}>
      {/* Button tag in a Link tag is not valid html, it's just for sample, in real usecase we must take the time to style the link component */}
      <Link to={`/${product.id}`} className={classes.link}>
          <Button size="large" variant="contained" color="primary" fullWidth>
            Voir
          </Button>
        </Link>
    </ProductItemWrapper>
  );
}

export default ProductItem;