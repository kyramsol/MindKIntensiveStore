import React, {Component} from "react";
import './Header.css';


class Header extends Component {
    render()
    {
        return (
            <div>
            <div className="Header-navigator">
                <ul>
                    <li>Delivery</li>
                    <li>Pay</li>
                    <li>Callback</li>
                    <li>About us</li>
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