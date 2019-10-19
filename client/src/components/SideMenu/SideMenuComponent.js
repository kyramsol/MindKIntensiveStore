import React, { Component } from "react";
import "./SideMenu.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

class SideMenu extends Component {
  constructor() {
    super();
    this.state = {
      categoryData: null
    };
  }

  componentDidMount() {
    fetch("http://localhost/api/category")
      .then(response => response.json())
      .then(categories => this.setState({ categoryData: categories }));
  }

  render() {
    const CategoryData = this.state.categoryData;
    if (!CategoryData) return <div></div>;
    return (
      <div className="widget">
        <h3 className="widget-title">Categories</h3>
        <List component="nav" aria-label="secondary mailbox folders">
          {CategoryData.map(item => (
            <ListItem button key={item.id}>
              <ListItemText  primary={item.name} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}
export default SideMenu;
