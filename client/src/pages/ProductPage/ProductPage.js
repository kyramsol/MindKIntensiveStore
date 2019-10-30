import React, { PureComponent } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import getProduct from "../../api/product";
import "../../components/ProductPage/ProductCard.css";
import SideMenu from "../../components/SideMenu/SideMenu";
import CartTools from "../../tools/cart/CartTools";

class ProductCard extends PureComponent {
  state = { productData: null };

  fetchData = () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    getProduct(id).then(json => {
      this.setState({ productData: json });
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { productData: product } = this.state;

    return (
      product && (
        <div className="Content">
          <SideMenu/>
          <div>
            <Typography gutterBottom variant="h4" component="h2">
              {product.name}
            </Typography>
            <div className="ProductCard">
              <div className="ProductImage">
                <img alt="Data not found" src={product.image_path} />
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
                <Button
                  size="large"
                  color="primary"
                  onClick={() => {
                    CartTools.addToCart(product);
                  }}
                >
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default ProductCard;
