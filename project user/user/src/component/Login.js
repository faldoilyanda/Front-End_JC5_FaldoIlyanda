import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Header from './Header'; 
import Footer from './Footer'; 


class App extends Component {
  render() {
    return (
      <div>
        <Header/>

            <div className="main-1">
                <div className="container">
                <div className="login-page">
                    <div className="account_grid">
                    <div className="col-md-6 login-left">
                        <h3>NEW CUSTOMERS</h3>
                        <p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                        <a className="acount-btn" href="Account">Create an Account</a>
                    </div>
                    <div className="col-md-6 login-right">
                        <h3>REGISTERED CUSTOMERS</h3>
                        <p>If you have an account with us, please log in.</p>
                        <form>
                        <div>
                            <span>Email Address<label>*</label></span>
                            <input type="text" />
                        </div>
                        <div>
                            <span>Password<label>*</label></span>
                            <input type="text" />
                        </div>
                        <a className="forgot" href="#">Forgot Your Password?</a>
                        <Link className="acount-btn" to="/Profile">Login</Link>
                        </form>
                    </div>
                    <div className="clearfix"> </div>
                    </div>
                </div>
                </div>
            </div>

        <Footer/>
      </div>

    );
  }
}

export default App;