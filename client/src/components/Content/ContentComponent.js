import React, { PureComponent } from "react";
import Pagination from "material-ui-flat-pagination";

import "./Content.css";
import ProductBlock from "../Product/ProductComponent";
import SideMenu from "../SideMenu/SideMenuComponent";
import getProducts from "../../api/products";
import getCategory from "../../api/category";

class Content extends PureComponent {
  state = { productData: null, paginationData: null };

  fetchdata = () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    if (id) {
      getCategory(id).then(json => {
        const { data, ...rest } = json;
        this.setState({ productData: data, paginationData: rest });
      });
    } else {
      getProducts().then(json => {
        this.setState({ productData: json });
      });
    }
  };

  nextPage = page => {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    getCategory(id, page).then(json => {
      const { data, ...rest } = json;
      this.setState({ productData: data, paginationData: rest });
    });
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
    let i = 0;
    const { productData: product } = this.state;
    const { paginationData } = this.state;
    console.log(this.state.productData, this.state.paginationData);
    if (!product) return <div className="Content">loading</div>;

    return (
      <div className="Content">
        <SideMenu />
        <div className="Content-product">
          {product.map(item => (
            <ProductBlock key={item.id} value={item} />
          ))}
        </div>
        <Pagination
          limit={i}
          offset={paginationData.current_page - 1}
          total={paginationData.last_page}
          onClick={(ev, offset, page) => this.nextPage(page)}
        />
      </div>
    );
  }
}

export default Content;
