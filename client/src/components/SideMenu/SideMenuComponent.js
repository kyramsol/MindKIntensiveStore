import React, { Component } from "react";
import "./SideMenu.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import getData from "../../API-service";
class SideMenu extends Component {
  constructor() {
    super();
    this.state = {
      categoryData: null
    };
  }

  componentDidMount() {
    let data=getData("http://localhost/api/category");
    data.then(categories => this.setState({ categoryData: categories }));
  }

  render() {
    const CategoryData = this.state.categoryData;
    if (!CategoryData) return <div className="Content">Loading</div>;
    return (
      <div className="widget">
        <h3 className="widget-title">Categories</h3>
        <List component="nav" aria-label="secondary mailbox folders">
          {CategoryData.map(item => (
            <ListItem button key={item.id}>
              <Link to={"category/" + item.id}>
                <ListItemText primary={item.name} />{" "}
              </Link>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}
export default SideMenu;
