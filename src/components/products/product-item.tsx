import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

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
    }
  });
  
interface IProductItemProps {
    product: IProduct
}

const ProductItem = ({product}: IProductItemProps) => {
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
            <Button size="large" variant="contained" color="primary" fullWidth>
              Ajouter au panier
            </Button>
          </CardActions>
        </Card>
      );
}

export default ProductItem;