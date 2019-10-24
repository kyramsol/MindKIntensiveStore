import React, { PureComponent } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import "./Productblock.css";

class ProductBlock extends PureComponent {

  render() {
    const productData = this.props.value;
    if (!productData) return <div> </div>;
    let to = "/product/" + productData.id;

    return (
      <Card className="imag">
        <CardContent>
          <img alt='Image of product' src={productData.image_path} />
          <Typography gutterBottom variant="h5" component="h2">
            {productData.price}$
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <Link to={to}>{productData.name}</Link>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large" color="primary">
            Buy
          </Button>
        </CardActions>
      </Card>
    );
  }
}
export default ProductBlock;
