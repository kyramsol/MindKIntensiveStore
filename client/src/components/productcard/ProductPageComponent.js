import React, { PureComponent } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import "./ProductCard.css";

class ProductCard extends PureComponent {
  state = { ProductData: null };

  componentDidMount() {
    fetch("http://localhost/api/product/"+this.props.match.params.id)
      .then(response => response.json())
      .then(json => {
        this.setState({ ProductData: json});
      });
  }

  render() {
    const product = this.state.ProductData;
    if (!product) return <div className="Content">loading</div>;

    return (
      <div className="Content">
        <div>
          <Typography gutterBottom variant="h4" component="h2">
            {product.name}
          </Typography>
          <div className="ProductCard">
            <div className="ProductImage">
              <img alt={product.image_path} src={product.image_path} />
              <Typography gutterBottom variant="h5" component="h2">
                {product.price}$
              </Typography>
            </div>
            <div>
                <div className="ProductDescription">
              <Typography gutterBottom variant="h6" component="h2">
                {product.description}
              </Typography>
                </div>
              <Button size="large" color="primary">
                Add To Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
