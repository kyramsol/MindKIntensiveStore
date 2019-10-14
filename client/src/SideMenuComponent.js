import React, {Component} from "react";
import './SideMenu.css';



class SideMenu extends Component {
    render()
    {
        return (
            <div className="widget">
                <h3 className="widget-title">Категории</h3>
                <ul className="widget-list">
                    <li><a href="">Дизайн</a></li>
                    <li><a href="">Фотошоп</a></li>
                    <li><a href="">Типографика</a></li>
                    <li><a href="">Музыка</a></li>
                    <li><a href="">Видео</a></li>
                </ul>
            </div>
        );
    }
}
export default SideMenu;