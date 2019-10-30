import React, { PureComponent } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Cart from "./Cart/Cart";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Content from "./Content";
import ProductCard from "./ProductPage/ProductPage";

class Page extends PureComponent {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <div className="Content">
          <Switch>
            <Route path="/cart" component={Cart}/>
            <Route path="/product/:id" component={ProductCard} />
            <Route path="/:category?/:id?" component={Content} />
          </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}
export default Page;
