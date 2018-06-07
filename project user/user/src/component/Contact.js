import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Header from './Header'; 
import Footer from './Footer'; 


class App extends Component {
  render() {
    return (
      <div>
        <Header/>

            <div className="contact">
                <div className="container">
                <h2>contact us</h2>
                <div className="google-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424396.3176723366!2d150.92243255000002!3d-33.7969235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney+NSW%2C+Australia!5e0!3m2!1sen!2sin!4v1431587453420" />
                </div>
                <div className="contact-grids">
                    <div className="col-md-6 contact-left">
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English
                        versions from the 1914 translation by H. Rackham.</p>
                    <address>
                        <p>FLOWOOD.</p>
                        <p>Rasamala II Street, No 12, Block A</p>
                        <p>South Jakarta, Indonesia.</p>
                        <p>Telephone : +62 8127 798 6688</p>
                        <p>FAX : +62 8127 798 6688</p>
                        <p>E-mail : <a href="faldoilyanda@gmail.com">faldo@flowood.com</a></p>
                    </address>
                    </div>
                    <div className="col-md-6 contact-right">
                    <form>
                        <h5>name</h5>
                        <input type="text" />
                        <h5>emailaddress</h5>
                        <input type="text" />
                        <h5>message</h5>
                        <textarea defaultValue={""} />
                        <input type="submit" defaultValue="send" />
                    </form>
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