import React, { Component } from "react";
import "./App.css";
import Header from "./../components/Header/HeaderComponent";

import Footer from "./../components/Footer/FooterComponent";

import Content from "./../components/Content/ContentComponent";
import ProductCard from "../components/productcard/ProductPageComponent";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Page extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/">
              <Content type='mainpage' />
            </Route>
            <Route path="/product/:id" component={ProductCard}/>
            <Route path="/:category/:id" component={Content}/>
          </Switch>
        </Router>

        <Footer />
      </div>
    );
  }
}
export default Page;
