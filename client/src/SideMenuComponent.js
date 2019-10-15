import React, {Component} from "react";
import './SideMenu.css';



class SideMenu extends Component {
    render()
    {
        return (
            <div className="widget">
                <h3 className="widget-title">Categories</h3>
                <ul className="widget-list">
                    <li><a href="">random</a></li>
                    <li><a href="">random</a></li>
                    <li><a href="">random</a></li>
                    <li><a href="">random</a></li>
                    <li><a href="">random</a></li>
                </ul>
            </div>
        );
    }
}
export default SideMenu;