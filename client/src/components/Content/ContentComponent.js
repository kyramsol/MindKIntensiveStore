import React, { Component } from "react";
import ProductBlock from "../Product/ProductComponent";
import SideMenu from "../SideMenu/SideMenuComponent";
import "./Content.css";
import getData from "../../API-service";

function getProducts() {
  return getData("http://localhost/api/products");
}

class Content extends Component {
  state = { ProductData: null };

  fetchdata = () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    let url;
    console.log("mount");
    if (this.props.match.params.id) {
      url = `http://localhost/api/category/${id}`;
    } else {
      url = "http://localhost/api/products";
    }

    console.log(1);
    let data = getData(url);

    data.then(json => {
      this.setState({ ProductData: json });
    });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
      console.log(prevProps);
      console.log(this.props.match.params.id);
      if (prevProps.match.params.id !== this.props.match.params.id) {
        this.fetchdata();
    }

  }

  componentDidMount() {
    this.fetchdata();
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
