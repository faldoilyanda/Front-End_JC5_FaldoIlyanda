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
                <div className="register">
                    <form>
                    <div className="register-top-grid">
                        <h3>PERSONAL INFORMATION</h3>
                        <div className="wow fadeInLeft" data-wow-delay="0.4s">
                        <span>First Name<label>*</label></span>
                        <input type="text" />
                        </div>
                        <div className="wow fadeInRight" data-wow-delay="0.4s">
                        <span>Last Name<label>*</label></span>
                        <input type="text" />
                        </div>
                        <div className="wow fadeInRight" data-wow-delay="0.4s">
                        <span>Email Address<label>*</label></span>
                        <input type="text" />
                        </div>
                        <div className="clearfix"> </div>
                        <a className="news-letter" href="#">
                        <label className="checkbox"><input type="checkbox" name="checkbox" defaultChecked /><i> </i>Sign Up for Newsletter</label>
                        </a>
                    </div>
                    <div className="register-bottom-grid">
                        <h3>LOGIN INFORMATION</h3>
                        <div className="wow fadeInLeft" data-wow-delay="0.4s">
                        <span>Password<label>*</label></span>
                        <input type="text" />
                        </div>
                        <div className="wow fadeInRight" data-wow-delay="0.4s">
                        <span>Confirm Password<label>*</label></span>
                        <input type="text" />
                        </div>
                    </div>
                    </form>
                    <div className="clearfix"> </div>
                    <div className="register-but">
                    <form>
                        <input type="submit" defaultValue="submit" />
                        <div className="clearfix"> </div>
                    </form>
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