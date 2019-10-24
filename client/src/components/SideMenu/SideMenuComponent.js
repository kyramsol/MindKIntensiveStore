import React, { PureComponent } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

import "./SideMenu.css";
import getCategoriesList from "../../api/categoriesList";

class SideMenu extends PureComponent {
  state = { categoryData: null };

  componentDidMount() {
    let data = getCategoriesList();
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
              <Link to={"/category/" + item.id}>
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
