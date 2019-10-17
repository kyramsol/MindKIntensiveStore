import React, { Component } from "react";
import "./SideMenu.css";
import ProductBlock from "../Product/ProductComponent";

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
        <ul className="widget-list">
          {CategoryData.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default SideMenu;
