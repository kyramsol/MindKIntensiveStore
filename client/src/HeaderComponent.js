import React, {Component} from "react";
import './Header.css';


class Header extends Component {
    render()
    {
        return (
            <div>
            <div className="Header-navigator">
                <ul>
                    <li>Доставка</li>
                    <li>Оплата</li>
                    <li>Обратная связь</li>
                    <li>О нас</li>
                </ul>
            </div>
            <div className="Header">

                <div>
                    <button className='Header-button'>К</button>
                    <button className="Header-button">П</button>
                </div>
                <div className='Header-logo'>
                    MindK-Store
                </div>
                <div>
                    <button className='Header-button'>in</button>
                    <button className="Header-button">up</button>
                </div>

            </div>
            </div>
        );
    }
}
export default Header;