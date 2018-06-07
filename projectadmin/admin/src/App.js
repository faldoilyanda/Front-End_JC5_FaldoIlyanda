import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom';
import Home from './component/Home'; 
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Editproduct from './component/Editproduct';
import Addcategory from './component/Addcategory';
import Addproduct from './component/Addproduct';
import Login from './component/Login';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/> 
        <Route path="/Header" component={Header}/>
        <Route path="/Sidebar" component={Sidebar}/>
        <Route path="/Editproduct" component={Editproduct}/>
        <Route path="/Addcategory" component={Addcategory}/>
        <Route path="/Addproduct" component={Addproduct}/>
        <Route path="/Login" component={Login}/>


      </div>
    );
  }
}

export default App;
