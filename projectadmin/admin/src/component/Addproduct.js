import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Header from './Header'; 
import Sidebar from './Sidebar';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Sidebar/>

            <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
                <div className="row">
                <ol className="breadcrumb">
                    <li><a href="#">
                        <em className="fa fa-home" />
                    </a></li>
                    <li className="active">Add Product</li>
                </ol>
                </div>
                {/*/.row*/}
                <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">+ Product</h1>
                </div>
                </div>
                {/*/.row*/}
                {/*/.row*/}
                <div className="row">
                <div className="col-lg-12">
                    <div className="panel panel-default">
                    <div className="panel-heading">ADD PRODUCT</div>
                    <div className="panel-body">
                        <div className="col-md-12">
                        <form className="form-horizontal">
                            <fieldset>
                            {/* Form Name */}
                            {/* <legend>PRODUCTS</legend> */}
                            {/* Text input*/}
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="product_id">PRODUCT ID</label>
                                <div className="col-md-4">
                                <input id="product_id" name="product_id" placeholder="PRODUCT ID" className="form-control input-md" required type="text" />
                                </div>
                            </div>
                            {/* Text input*/}
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="product_name">PRODUCT NAME</label>
                                <div className="col-md-4">
                                <input id="product_name" name="product_name" placeholder="PRODUCT NAME" className="form-control input-md" required type="text" />
                                </div>
                            </div>
                            {/* Text input*/}
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="product_name_fr">PRODUCT DESCRIPTION FR</label>
                                <div className="col-md-4">
                                <input id="product_name_fr" name="product_name_fr" placeholder="PRODUCT DESCRIPTION FR" className="form-control input-md" required type="text" />
                                </div>
                            </div>
                            {/* Select Basic */}
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="product_categorie">PRODUCT CATEGORY</label>
                                <div className="col-md-4">
                                <select id="product_categorie" name="product_categorie" className="form-control">
                                </select>
                                </div>
                            </div>
                            {/* Text input*/}
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="available_quantity">AVAILABLE QUANTITY</label>
                                <div className="col-md-4">
                                <input id="available_quantity" name="available_quantity" placeholder="AVAILABLE QUANTITY" className="form-control input-md" required type="text" />
                                </div>
                            </div>
                            {/* Text input*/}
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="product_weight">PRODUCT WEIGHT</label>
                                <div className="col-md-4">
                                <input id="product_weight" name="product_weight" placeholder="PRODUCT WEIGHT" className="form-control input-md" required type="text" />
                                </div>
                            </div>
                            {/* Textarea */}
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="product_description">PRODUCT DESCRIPTION</label>
                                <div className="col-md-4">
                                <textarea className="form-control" id="product_description" name="product_description" defaultValue={""} />
                                </div>
                            </div>
                            {/* Textarea */}
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="product_name_fr">PRODUCT DESCRIPTION FR</label>
                                <div className="col-md-4">
                                <textarea className="form-control" id="product_name_fr" name="product_name_fr" defaultValue={""} />
                                </div>
                            </div>
                            {/* Text input*/}
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="percentage_discount">PERCENTAGE DISCOUNT</label>
                                <div className="col-md-4">
                                <input id="percentage_discount" name="percentage_discount" placeholder="PERCENTAGE DISCOUNT" className="form-control input-md" required type="text" />
                                </div>
                            </div>
                            {/* Text input*/}
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="stock_alert">STOCK ALERT</label>
                                <div className="col-md-4">
                                <input id="stock_alert" name="stock_alert" placeholder="STOCK ALERT" className="form-control input-md" required type="text" />
                                </div>
                            </div>
                            {/* Search input*/}
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="stock_critical">STOCK CRITICAL</label>
                                <div className="col-md-4">
                                <input id="stock_critical" name="stock_critical" placeholder="STOCK CRITICAL" className="form-control input-md" required type="search" />
                                </div>
                            </div>
                            {/* Search input*/}
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="tutorial">TUTORIAL</label>
                                <div className="col-md-4">
                                <input id="tutorial" name="tutorial" placeholder="TUTORIAL" className="form-control input-md" required type="search" />
                                </div>
                            </div>
                            {/* Search input*/}
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="tutorial_fr">TUTORIAL FR</label>
                                <div className="col-md-4">
                                <input id="tutorial_fr" name="tutorial_fr" placeholder="TUTORIAL FR" className="form-control input-md" required type="search" />
                                </div>
                            </div>
                            {/* Text input*/}
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="online_date">ONLINE DATE</label>
                                <div className="col-md-4">
                                <input id="online_date" name="online_date" placeholder="ONLINE DATE" className="form-control input-md" required type="text" />
                                </div>
                            </div>
                            {/* Text input*/}
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="author">AUTHOR</label>
                                <div className="col-md-4">
                                <input id="author" name="author" placeholder="AUTHOR" className="form-control input-md" required type="text" />
                                </div>
                            </div>
                            {/* Text input*/}
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="enable_display">ENABLE DISPLAY</label>
                                <div className="col-md-4">
                                <input id="enable_display" name="enable_display" placeholder="ENABLE DISPLAY" className="form-control input-md" required type="text" />
                                </div>
                            </div>
                            {/* Text input*/}
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="comment">COMMENT</label>
                                <div className="col-md-4">
                                <input id="comment" name="comment" placeholder="COMMENT" className="form-control input-md" required type="text" />
                                </div>
                            </div>
                            {/* Text input*/}
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="approuved_by">APPROUVED BY</label>
                                <div className="col-md-4">
                                <input id="approuved_by" name="approuved_by" placeholder="APPROUVED BY" className="form-control input-md" required type="text" />
                                {/* File Button */}
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="filebutton">image</label>
                                    <div className="col-md-4">
                                    <input id="filebutton" name="filebutton" className="input-file" type="file" />
                                    </div>
                                </div>
                                {/* File Button */}
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="filebutton">images2</label>
                                    <div className="col-md-4">
                                    <input id="filebutton" name="filebutton" className="input-file" type="file" />
                                    </div>
                                </div>
                                {/* Button */}
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="singlebutton">Single Button</label>
                                    <div className="col-md-4">
                                    <button id="singlebutton" name="singlebutton" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                                </div></div></fieldset>
                        </form>
                        </div>
                    </div>
                    </div>
                    {/* /.panel*/}
                    {/* /.panel*/}
                </div>
                {/* /.col*/}
                <div className="col-sm-12">
                    <p className="back-link">FLOWOOD. </p>
                </div>
                </div>
                {/* /.row */}
            </div>

        
      </div>

    );
  }
}

export default App;