// import logo from './logo.svg';
import './App.css';

// import Layout from './components/Layout'
// import Stats from './components/Stats';
// import Footer from './components/Footer';
// import Header from './components/Footer';
// import Navbar from './components/Navbar';
// import Main from './components/Main';
import Nav from './Nav'
import Shop from './Shop'
import About from './About'
import Region from './Region'

import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//Route renders out a component based on the url
// browserrouter = abiltiy to use routing


class App extends Component {
  constructor(props) {
    super(props);
}

  render () {
    return (
      <Router>
      <div className="App"> 
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about"  component={About}></Route>
          <Route path="/shop"  component={Shop}></Route>
          
          <Route path="/region" component={Region}></Route>
        </Switch>
        {/* <p className="App-intro">{this.state.apiResponse}</p> */}
      </div>
      </Router>  
    );
  }
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;