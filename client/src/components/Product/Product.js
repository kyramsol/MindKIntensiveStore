import React, { PureComponent } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import CartTools from "../../tools/cart/CartTools";
import "./Productblock.css";

class ProductBlock extends PureComponent {
  render() {
    const { value: productData } = this.props;

    return (
      productData && (
        <Card className="imag">
          <CardContent>
            <img alt="Data not found" src={productData.image_path} />
            <Typography gutterBottom variant="h5" component="h2">
              {productData.price}$
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <Link to={`/product/${productData.id}`}>{productData.name}</Link>
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="large"
              color="primary"
              onClick={() => {
                CartTools.addToCart(productData);
              }}
            >
              Buy
            </Button>
          </CardActions>
        </Card>
      )
    );
  }
}

export default ProductBlock;
