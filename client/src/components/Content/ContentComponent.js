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

  renderPagination(l_page, c_page) {
    return (
      <Pagination
        limit={0}
        offset={c_page - 1}
        total={l_page}
        onClick={(ev, offset, page) => this.nextPage(page)}
      />
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchdata();
    }
  }

  componentDidMount() {
    this.fetchdata();
  }

  render() {
    let paginate;
    const { productData: product } = this.state;
    const { paginationData: pages } = this.state;
    const {
      match: {
        params: { id }
      }
    } = this.props;

    if (id && pages) {
      paginate = this.renderPagination(pages.last_page, pages.current_page);
    }

    return (
      product && (
        <div className="Content">
          <SideMenu />
          <div>
            {paginate}
            <div className="Content-product">
              {product.map(item => (
                <ProductBlock key={item.id} value={item} />
              ))}
            </div>
            {paginate}
          </div>
        </div>
      )
    );
  }
}

export default Content;
