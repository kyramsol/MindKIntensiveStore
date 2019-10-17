import React, { Component } from "react";
import "./Header.css";
import AppBar from '@material-ui/core/AppBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <AppBar color="default" position="absolute"/>
        <div className="Header-navigator">
          <ul>
            <li><Link to="/delivery">Delivery</Link></li>
            <li>Pay</li>
            <li>Callback</li>
            <li>About us</li>
          </ul>
        </div>
        <div className="Header">
          <div>
            <button className="Header-button">К</button>
            <button className="Header-button">П</button>
          </div>
          <div className="Header-logo"><Link to='/'> MindK-Store</Link></div>
          <div>
            <button className="Header-button">in</button>
            <button className="Header-button">up</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
