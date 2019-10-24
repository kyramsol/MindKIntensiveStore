import React, { PureComponent } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import getProduct from "../../api/product";

import "./ProductCard.css";

class ProductCard extends PureComponent {
  state = { ProductData: null };

  fetchdata = () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    let data = getProduct(id);

    data.then(json => {
      this.setState({ ProductData: json });
    });
  };

  componentDidMount() {
    this.fetchdata();
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
