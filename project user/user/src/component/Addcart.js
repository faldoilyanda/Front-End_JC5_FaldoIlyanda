import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Header from './Header'; 
import Footer from './Footer'; 


class App extends Component {
  render() {
    return (
      <div>
        <Header/>

            <div className="cart-items">
                <div className="container">
                <h2>My Shopping Bag (3)</h2>
                <div className="cart-header">
                    <div className="close1"> </div>
                    <div className="cart-sec simpleCart_shelfItem">
                    <div className="cart-item cyc">
                        <img src="img/product1.png" className="img-responsive" alt />
                    </div>
                    <div className="cart-item-info">
                        <h3><a href="#"> Lorem Ipsum is not simply </a><span>Pickup time:</span></h3>
                        <ul className="qty">
                        <li>
                            <p>Min. order value:</p>
                        </li>
                        <li>
                            <p>FREE delivery</p>
                        </li>
                        </ul>
                        <div className="delivery">
                        <p>Service Charges : $10.00</p>
                        <span>Delivered in 1-1:30 hours</span>
                        <div className="clearfix" />
                        </div>
                    </div>
                    <div className="clearfix" />
                    </div>
                </div>
                <div className="cart-header2">
                    <div className="close2"> </div>
                    <div className="cart-sec simpleCart_shelfItem">
                    <div className="cart-item cyc">
                        <img src="img/product5.png" className="img-responsive" alt />
                    </div>
                    <div className="cart-item-info">
                        <h3><a href="#"> Lorem Ipsum is not simply </a><span>Pickup time:</span></h3>
                        <ul className="qty">
                        <li>
                            <p>Min. order value:</p>
                        </li>
                        <li>
                            <p>FREE delivery</p>
                        </li>
                        </ul>
                        <div className="delivery">
                        <p>Service Charges : $10.00</p>
                        <span>Delivered in 1-1:30 hours</span>
                        <div className="clearfix" />
                        </div>
                    </div>
                    <div className="clearfix" />
                    </div>
                </div>
                <div className="cart-header3">
                    <div className="close3"> </div>
                    <div className="cart-sec simpleCart_shelfItem">
                    <div className="cart-item cyc">
                        <img src="img/product7.png" className="img-responsive" alt />
                    </div>
                    <div className="cart-item-info">
                        <h3><a href="#"> Lorem Ipsum is not simply </a><span>Pickup time:</span></h3>
                        <ul className="qty">
                        <li>
                            <p>Min. order value:</p>
                        </li>
                        <li>
                            <p>FREE delivery</p>
                        </li>
                        </ul>
                        <div className="delivery">
                        <p>Service Charges : $10.00</p>
                        <span>Delivered in 1-1:30 hours</span>
                        <div className="clearfix" />
                        </div>
                    </div>
                    <div className="clearfix" />
                    </div>
                    <center><a className="acount-btn" href="Payment">PAYMENT</a></center>
                </div>
                </div>
            </div>

        <Footer/>
      </div>

    );
  }
}

export default App;