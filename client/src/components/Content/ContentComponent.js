import React, { Component } from "react";
import ProductBlock from "../Product/ProductComponent";
import SideMenu from "../SideMenu/SideMenuComponent";
import "./Content.css";
import getData from "../../API-service";
class Content extends Component {
  state = { ProductData: null };

  componentDidMount() {
      let url;
      if (this.props.type === 'mainpage')
        url="http://localhost/api/products";
      else
          url='http://localhost/api/category/'+this.props.match.params.id;


      let data=getData(url);

      data.then(json => {
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
