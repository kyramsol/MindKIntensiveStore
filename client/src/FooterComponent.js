import React, {Component} from "react";
import './Footer.css';
class Footer extends  Component
{
    render(){
        return(
            <div className='Footer'>
                <div className="copyright">
                    <h5> produced by Kyramsol Corp.</h5>
                    <h5>© All Rights Reserved</h5>
                </div>
                <div>
                    <button className='asearch'>I</button>
                    <button className='asearch'>F</button>
                    <button className='asearch'>VK</button>
                    <button className='asearch'>T</button>
                </div>
            </div>
        )
    }
}
export default Footer;