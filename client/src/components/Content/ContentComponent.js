import React, { Component } from "react";
import ProductBlock from "../Product/ProductComponent";
import SideMenu from "../SideMenu/SideMenuComponent";
import "./Content.css";
class Content extends Component {
  state = { ProductData: null };

  componentDidMount() {
    fetch("http://localhost/api/product")
      .then(response => response.json())
      .then(json => {
        this.setState({ ProductData: json });
      });
  }

  render() {
    const product = this.state.ProductData;
    if (!product) return <div className="Content">loading</div>;
    return (
      <div className="Content">
        <SideMenu />
        <div className="Content-product">
          {product.map(item => (
            <ProductBlock key={item.id} value={item} />
          ))}
        </div>
      </div>
    );
  }
}
export default Content;
