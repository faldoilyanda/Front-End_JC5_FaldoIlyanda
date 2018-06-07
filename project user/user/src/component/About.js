import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Header from './Header'; 
import Footer from './Footer'; 


class App extends Component {
  render() {
    return (
      <div>
        <Header/>

            <div className="banner-section">
                <div className="container">
                    <div className="banner-grids">
                        <div className="col-md-6 banner-grid">
                        <h3>About Us</h3>
                        <h2>the latest collections</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <a href="products.html" className="button"> learn more </a>
                        </div>
                        <div className="col-md-6 banner-grid1">
                        <img src="img/about.png" className="img-responsive" alt />
                        </div>
                        <div className="clearfix" />
                    </div>
                </div>
            </div>

        <Footer/>
      </div>

    );
  }
}

export default App;