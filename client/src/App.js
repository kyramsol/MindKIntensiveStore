import React, { Component } from "react";
import "./App.css";
import Header from "./HeaderComponent";


import Footer from "./FooterComponent";

import Content from "./ContentComponent";

class Page extends Component {
  render() {
    return (
      <disv>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}
export default Page;
=======
class Header extends Component {
    render() {
        return (
                <header className="App-header">
                    <h1>Valera</h1>
                </header>
        );
    }
}
class Content extends Component {
    render() {
        return (
            <header className="App-content">
            </header>
        );
    }
}
class Footer extends  Component
    {
        render(){
            return(
                <div className='App-footer'>
                    Valera
                </div>
            )
        }
    }
class Page extends Component {
    render(){
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

