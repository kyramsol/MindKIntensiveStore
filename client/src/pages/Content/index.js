import React, { PureComponent } from "react";
import Pagination from "material-ui-flat-pagination";

import "../../components/Content/Content.css";
import ProductBlock from "../../components/Product/Product";
import SideMenu from "../../components/SideMenu/SideMenu";
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
    console.log(product);
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
