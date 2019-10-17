import React, { Component } from "react";
import "./Productblock.css";

class ProductBlock extends Component {
  render() {
    const productData = this.props.value;
    if (!productData) return <div></div>;
    return (
      <div className="content content-col">
        <div className="position">
          <div className="imag center">
            <img src={productData.image_path}/>
            <div className="buy center">
              <button className="but center">Buy</button>
            </div>
            <div className="price center">{productData.price}$</div>
          </div>
          <div className="calling center" id="cal3">
            {productData.name}
          </div>
        </div>
      </div>
    );
  }
}
export default ProductBlock;
