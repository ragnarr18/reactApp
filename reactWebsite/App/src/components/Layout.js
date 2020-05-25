import React from 'react';

import Navbar from "./Navbar"
import Header from "./Header"
import Footer from "./Footer"

export default class Layout extends React.Component{
    constructor(){
        super();
        this.state = {currentPage: "HOME"}
    }
    render(){
        return(
            <div>
                <Navbar></Navbar>
                <Header title={this.state.currentPage}></Header>
                <Header title={"header nr 2"}></Header>
                <Footer></Footer>
            </div>
        )
    }
}