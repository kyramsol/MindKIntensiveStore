import React, { PureComponent } from "react";
import Pagination from "material-ui-flat-pagination";

import "../../components/Content/Content.css";
import ProductBlock from "../../components/Product/Product";
import SideMenu from "../../components/SideMenu/SideMenu";
import getProducts from "../../api/products";
import Category from "../../api/category";

class Content extends PureComponent {
  state = { productData: null, currentPage: null, lastPage: null };

  getCategoryData = (id, page) => {
    Category.getCategory(id, page).then(json => {
      this.setState({
        productData: json.data,
        currentPage: json.current_page,
        lastPage: json.last_page
      });
    });
  };

  fetchData = () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    if (id) {
      this.getCategoryData(id);
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

    this.getCategoryData(id, page);
  };

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
    const { lastPage, currentPage, productData: product } = this.state;
    const {
      match: {
        params: { id }
      }
    } = this.props;

    if (id && lastPage && currentPage) {
      paginate = (
        <Pagination
          limit={0}
          offset={currentPage - 1}
          total={lastPage}
          onClick={(ev, offset, page) => this.nextPage(page)}
        />
      );
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
