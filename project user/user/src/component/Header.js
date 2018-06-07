import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component { 
    render() {
        return (
            <div>
                <div className="header">
                    <div className="header-top">
                        <div className="container">
                            <div className="lang_list">
                                <select tabindex="4" className="dropdown1">
                                    <option value="" className="label" value="">En</option>
                                    <option value="1">English</option>
                                    <option value="2">French</option>
                                    <option value="3">German</option>
                                </select>
                            </div>
                            <div className="top-right">
                                <ul>
                                    <li className="text"><Link to="/Login">login</Link></li>
                                    <li>
                                        <div className="cart box_1">
                                            <a href="Addcart">
                                            <span className="simpleCart_total"> $0.00 </span> (<span id="simpleCart_quantity" className="simpleCart_quantity"> 0 </span>)
                                        </a>
                                            <p><a href="Addcart" className="simpleCart_empty">Empty cart</a></p>
                                            <div className="clearfix"> </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>

                		<div class="header-bottom">
			<div class="container">
				{/* content */}
				<div class="content white">
					<nav class="navbar navbar-default" role="navigation">
						<div class="navbar-header">
							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
		        		<span class="sr-only">Toggle navigation</span>
		        		<span class="icon-bar"></span>
		        		<span class="icon-bar"></span>
		        		<span class="icon-bar"></span>
	        		</button>
							<h1 class="navbar-brand"><Link  to="/">FLOWOOD.</Link></h1>
						</div>
						

						<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul class="nav navbar-nav">
								<li><Link to="/">Home</Link></li>
								<li><a href="Product">products</a></li>
								<li><a href="About">About</a></li>
								<li><a href="Contact">Contact</a></li>
							</ul>
						</div>
						
					</nav>
					
				</div>
				<div class="search-box">
					<div id="sb-search" class="sb-search">
						<form>
							<input class="sb-search-input" placeholder="Enter your search term..." type="search" name="search" id="search"/>
							<input class="sb-search-submit" type="submit" value=""/>
							<span class="sb-icon-search"> </span>
						</form>
					</div>
				</div>

				
				<script src="js/classie.js"></script>
				<script src="js/uisearch.js"></script>
				<script>
					
				</script>
				
				<div class="clearfix"></div>
			</div>
		</div>

            </div>
        );
    } 
}
export default Header;