import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import "./Header.css"

export default function Header() {
  return (
    <div className="root">
      <AppBar position="static" color="default">
        <Toolbar>
            <Typography variant="h6" className="title">
              <Link to="/">MindK-Store</Link>
            </Typography>
          <div>
            <Button color="inherit">Cart</Button>
            <Button color="inherit">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
