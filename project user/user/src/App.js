import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom';
import Header from './component/Header'; 
import Footer from './component/Footer'; 
import Home from './component/Home';
import Product from './component/Product';
import About from './component/About';
import Contact from './component/Contact';
import Login from './component/Login';
import Profile from './component/Profile';
import Single from './component/Single';
import Account from './component/Account';
import Addcart from './component/Addcart';
import Payment from './component/Payment';
import Invoice from './component/Invoice';


class App extends Component {
  render() {
    return (
      <div>

        <div>
          <Route exact path="/" component={Home}/> 
          <Route path="/product" component={Product}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/login" component={Login}/>
          <Route path="/Profile" component={Profile}/>
          <Route path="/Single" component={Single}/>
          <Route path="/Account" component={Account}/>
          <Route path="/Addcart" component={Addcart}/>
          <Route path="/Payment" component={Payment}/>
          <Route path="/Invoice" component={Invoice}/>
        </div>
      </div>

    );
  }
}

export default App;
