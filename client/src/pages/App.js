import React, { PureComponent } from "react";
import "./App.css";
import Pagination from "material-ui-flat-pagination";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./../components/Header/HeaderComponent";
import Footer from "./../components/Footer/FooterComponent";
import Content from "./../components/Content/ContentComponent";
import ProductCard from "../components/productcard/ProductPageComponent";
import Paginate from "../components/Pagination/PaginationComponent";

require('dotenv').config();

class Page extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route path="/product/:id" component={ProductCard} />
            <Route exact path="/" component={Content} />
            <Route path="/:category/:id" component={Content} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}
export default Page;
