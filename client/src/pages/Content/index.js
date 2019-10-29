import React, { PureComponent } from "react";
import Pagination from "material-ui-flat-pagination";

import "../../components/Content/Content.css";
import ProductBlock from "../../components/Product/Product";
import SideMenu from "../../components/SideMenu/SideMenu";
import getProducts from "../../api/products";
import getCategory from "../../api/category";

class Content extends PureComponent {
  state = { productData: null, currentPage: null, lastPage: null };

  fetchData = () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    if (id) {
      getCategory(id).then(json => {
        this.setState({
          productData: json.data,
          currentPage: json.current_page,
          lastPage: json.last_page
        });
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
      this.setState({
        productData: json.data,
        currentPage: json.current_page,
        lastPage: json.last_page
      });
    });
  };

  renderPagination(lastPage, currentPage) {
    return (
      <Pagination
        limit={0}
        offset={currentPage - 1}
        total={lastPage}
        onClick={(ev, offset, page) => this.nextPage(page)}
      />
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchData();
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    let paginate;
    const { productData: product } = this.state;
    const { lastPage } = this.state;
    const { currentPage } = this.state;
    const {
      match: {
        params: { id }
      }
    } = this.props;
    if (id && lastPage && currentPage) {
      paginate = this.renderPagination(lastPage, currentPage);
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
