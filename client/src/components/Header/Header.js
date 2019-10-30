import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";

import "./Header.css";

class Header extends PureComponent {
  render() {
    return (
      <div className="root">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" className="title">
              <Link to="/">MindK-Store</Link>
            </Typography>
            <div>
              <Link to="/cart">
                <IconButton color="default">
                  <ShoppingCart />
                </IconButton>
              </Link>
              <Button color="inherit">Login</Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default Header;
