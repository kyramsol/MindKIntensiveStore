import React, { Component } from "react";
import "./Productblock.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class ProductBlock extends Component {
  render() {
    const productData = this.props.value;
    if (!productData) return <div> </div>;
    let to = "/product/" + productData.id;
    return (
      <Card className="imag">
        <CardContent>
          <img src={productData.image_path} />
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
