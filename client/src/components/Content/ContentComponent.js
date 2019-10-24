import React, { PureComponent } from "react";
import Pagination from "material-ui-flat-pagination"

import "./Content.css";

import ProductBlock from "../Product/ProductComponent";
import SideMenu from "../SideMenu/SideMenuComponent";
import getProducts from "../../api/products";
import getCategory from "../../api/category";

class Content extends PureComponent {
  state = { ProductData: null };

  fetchdata = () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    let data;

    if (this.props.match.params.id) {
      data = getCategory(id);
      data.then(json => {
        this.setState({ ProductData: json.data });
      });
    } else {
      data = getProducts();
      data.then(json => {
        this.setState({ ProductData: json });
      });
    }
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
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
