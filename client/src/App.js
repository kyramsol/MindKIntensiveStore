import React, { Component } from 'react';
import './App.css';
import Header from './HeaderComponent'

import Footer from './FooterComponent'

import Content from "./ContentComponent"

import  WeatherDisplay from "./weather"



    class Page extends Component {
    render()
    {
        return (
            <div>
                <Header/>
                <Content/>
                <Footer/>

            </div>

            );
    }


}
export default Page;