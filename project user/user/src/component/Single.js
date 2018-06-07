import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Header from './Header'; 
import Footer from './Footer'; 


class App extends Component {
  render() {
    return (
      <div>
        <Header/>

            <div className="single">
                <div className="container">
                <div className="single-grids">
                    <div className="col-md-4 single-grid1">
                    <h2>account</h2>
                    <ul>
                        <li><a href="Login">login</a></li>
                        <li><a href="login.html">Register</a></li>
                        <li><a href="login.html">Forgot Your Password</a></li>
                        <li><a href="Profile">my account</a></li>
                        <li><a href="login.html">address books</a></li>
                        <li><a href="login.html">wishlist</a></li>
                        <li><a href="login.html">order history</a></li>
                        <li><a href="login.html">downloads</a></li>
                        <li><a href="login.html">reward points</a></li>
                        <li><a href="login.html">return</a></li>
                        <li><a href="login.html">transaction</a></li>
                        <li><a href="login.html">newsletter</a></li>
                        <li><a href="login.html">recurring payments</a></li>
                    </ul>
                    </div>
                    <div className="col-md-4 single-grid">
                    <div className="flexslider">
                        <ul className="slides">
                       
                        <li data-thumb="img/productdetail1_2.png">
                            <div className="thumb-image"> <img src="img/productdetail1_2.png" data-imagezoom="true" className="img-responsive" /> </div>
                        </li>
                        
                        </ul>
                    </div>
                    </div>
                    <div className="col-md-4 single-grid simpleCart_shelfItem">
                    <h3>Obey Wasted Years Camo Zip Bandeau Bikini Top</h3>
                    <p>Condition New With the boom of the swimwear market, there are so many places providing swimming costumes that you may not know where to look first. If you want to facilitate your search, drop in at our one-stop store, and you’ll be able to equip
                        yourself properly for water activities.</p>
                    <ul className="size">
                    </ul>
                    <ul className="size">
                    </ul>
                    <div className="galry">
                        <div className="prices">
                        <h5 className="item_price">$95.00</h5>
                        </div>
                        <div className="rating">
                        </div>
                        <div className="clearfix" />
                    </div>
                    <p className="qty"> Qty : </p><input min={1} type="number" id="quantity" name="quantity" defaultValue={1} className="form-control input-small" />
                    <div className="btn_form">
                        <a href="Addcart" className="add-cart item_add">ADD TO CART</a>
                    </div>
                    <div className="tag">
                        <p>Category : <a href="#"> Wall Art </a></p>
                        <p>Tag : <a href="#"> Wood </a></p>
                    </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
                </div>
            </div>

            <div className="collpse">
                <div className="container">
                <div className="panel-group collpse" id="accordion" role="tablist" aria-multiselectable="true">
                    <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                        <h4 className="panel-title">
                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Description
                        </a>
                        </h4>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                        <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                        raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                    </div>
                    <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                        <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            additional information
                        </a>
                        </h4>
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                        <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                        raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                    </div>
                    <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingThree">
                        <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            reviews (5)
                        </a>
                        </h4>
                    </div>
                    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                        <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                        raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                    </div>
                    <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingFour">
                        <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            help
                        </a>
                        </h4>
                    </div>
                    <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                        <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                        raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>


            <div className="related-products">
                <div className="container">
                <h3>Related Products</h3>
                <div className="product-model-sec single-product-grids">
                    <div className="product-grid single-product">
                    <a href="Product">
                        <div className="more-product"><span> </span></div>
                        <div className="product-img b-link-stripe b-animate-go  thickbox">
                        <img src="img/product1.png" className="img-responsive" alt />
                        <div className="b-wrapper">
                            <h4 className="b-animate b-from-left  b-delay03">
                            <button> + </button>
                            </h4>
                        </div>
                        </div>
                    </a>
                    <div className="product-info simpleCart_shelfItem">
                        <div className="product-info-cust prt_name">
                        <h4>Product #1</h4>
                        <span className="item_price">$187.95</span>
                        <div className="ofr">
                            <p className="pric1"><del>Rs 280</del></p>
                            <p className="disc">[12% Off]</p>
                        </div>
                        <div className="clearfix"> </div>
                        </div>
                    </div>
                    </div>
                    <div className="product-grid single-product">
                    <a href="Product">
                        <div className="more-product"><span> </span></div>
                        <div className="product-img b-link-stripe b-animate-go  thickbox">
                        <img src="img/product2.png" className="img-responsive" alt />
                        <div className="b-wrapper">
                            <h4 className="b-animate b-from-left  b-delay03">
                            <button> + </button>
                            </h4>
                        </div>
                        </div>
                    </a>
                    <div className="product-info simpleCart_shelfItem">
                        <div className="product-info-cust prt_name">
                        <h4>Product #1</h4>
                        <span className="item_price">$187.95</span>
                        <div className="ofr">
                            <p className="pric1"><del>Rs 280</del></p>
                            <p className="disc">[12% Off]</p>
                        </div>
                        <div className="clearfix"> </div>
                        </div>
                    </div>
                    </div>
                    <div className="product-grid single-product">
                    <a href="Product">
                        <div className="more-product"><span> </span></div>
                        <div className="product-img b-link-stripe b-animate-go  thickbox">
                        <img src="img/product5.png" className="img-responsive" alt />
                        <div className="b-wrapper">
                            <h4 className="b-animate b-from-left  b-delay03">
                            <button> + </button>
                            </h4>
                        </div>
                        </div>
                    </a>
                    <div className="product-info simpleCart_shelfItem">
                        <div className="product-info-cust prt_name">
                        <h4>Product #1</h4>
                        <span className="item_price">$187.95</span>
                        <div className="ofr">
                            <p className="pric1"><del>Rs 280</del></p>
                            <p className="disc">[12% Off]</p>
                        </div>
                        <div className="clearfix"> </div>
                        </div>
                    </div>
                    </div>
                    <div className="product-grid single-product">
                    <a href="Product">
                        <div className="more-product"><span> </span></div>
                        <div className="product-img b-link-stripe b-animate-go  thickbox">
                        <img src="img/product6.png" className="img-responsive" alt />
                        <div className="b-wrapper">
                            <h4 className="b-animate b-from-left  b-delay03">
                            <button> + </button>
                            </h4>
                        </div>
                        </div>
                    </a>
                    <div className="product-info simpleCart_shelfItem">
                        <div className="product-info-cust prt_name">
                        <h4>Product #1</h4>
                        <span className="item_price">$187.95</span>
                        <div className="ofr">
                            <p className="pric1"><del>Rs 280</del></p>
                            <p className="disc">[12% Off]</p>
                        </div>
                        <div className="clearfix"> </div>
                        </div>
                    </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
                </div>
            </div>

        <Footer/>
      </div>

    );
  }
}

export default App;