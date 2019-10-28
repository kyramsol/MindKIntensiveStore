import React, { PureComponent } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Content from "../components/Content/Content";
import ProductCard from "../components/ProductPage/ProductPage";

console.log(process.env);

class Page extends PureComponent {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route path="/product/:id" component={ProductCard} />
            <Route path="/:category?/:id?" component={Content} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
export default Page;
