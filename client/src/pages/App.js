import React, { Component } from "react";
import "./App.css";
import Header from "./../components/Header/HeaderComponent";

import Footer from "./../components/Footer/FooterComponent";

import Content from "./../components/Content/ContentComponent";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Page extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Content />
            </Route>
            <Route  path="/delivery">
                <div className='Content'>Delivary</div>
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}
export default Page;