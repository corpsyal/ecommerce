import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 280,
    objectFit: 'scale-down'
  },
  price: {
    display: 'block',
    paddingTop: 24,
    textAlign: 'center'
  },
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
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={product.pictures[0]}
          title="Contemplative Reptile"
          className={classes.media}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
          <Typography variant="h4" component="span" className={classes.price}>
            {product.price}€
              </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* Button tag in a Link tag is not valid html, it's just for sample, in real usecase we must take the time to style the link component */}
        <Link to={`/${product.id}`} className={classes.link}>
          <Button size="large" variant="contained" color="primary" fullWidth>
            Voir
          </Button>
        </Link>

      </CardActions>
    </Card>
  );
}

export default ProductItem;