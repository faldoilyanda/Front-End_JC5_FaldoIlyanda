import React, { Component } from 'react';

class Footer extends Component { 
    render() {
        return (
        <div>
            <div class="subscribe">
                <div class="container">
                    <div class="subscribe1">
                        <h4>FLOWOOD.</h4>
                    </div>
                    <div class="subscribe2">

                        <form>
					        <input type="text" class="text" value="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}"/>
					        <input type="submit" value="JOIN"/>
				        </form>

                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>



            <div class="footer-section">
                <div class="container">
                    <div class="footer-grids">
                        <div class="col-md-2 footer-grid">
                            <h4>company</h4>
                            <ul>
                                <li><a href="products.html">products</a></li>
                                <li><a href="#">Work Here</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Happenings</a></li>
                                <li><a href="#">Dealer Locator</a></li>
                            </ul>
                        </div>
                        <div class="col-md-2 footer-grid">
                            <h4>service</h4>
                            <ul>
                                <li><a href="#">Support</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Warranty</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                            </ul>
                        </div>
                        <div class="col-md-2 footer-grid">
                            <h4>order & returns</h4>
                            <ul>
                                <li><a href="#">Order Status</a></li>
                                <li><a href="#">Shipping Policy</a></li>
                                <li><a href="#">Return Policy</a></li>
                                <li><a href="#">Digital Gift Card</a></li>
                            </ul>
                        </div>
                        <div class="col-md-2 footer-grid">
                            <h4>legal</h4>
                            <ul>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Terms and Conditions</a></li>
                                <li><a href="#">Social Responsibility</a></li>
                            </ul>
                        </div>
                        <div class="col-md-4 footer-grid1">
                            <div class="social-icons">
                                <a href="#"><i class="icon"></i></a>
                                <a href="#"><i class="icon1"></i></a>
                                <a href="#"><i class="icon2"></i></a>
                                <a href="#"><i class="icon3"></i></a>
                                <a href="#"><i class="icon4"></i></a>
                            </div>
                            <p>Copyright &copy; 2018 FLOWOOD Wall Art Deco. All rights reserved
                            </p>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>
        );
    } 
}
export default Footer;