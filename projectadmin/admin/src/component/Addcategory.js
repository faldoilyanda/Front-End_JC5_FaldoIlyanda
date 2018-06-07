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
                    <li className="active" data_temp_dwid={1}>Add Category</li>
                </ol>
                </div>
                {/*/.row*/}
                <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">+ Category</h1>
                </div>
                </div>
                {/*/.row*/}
                <div className="row">
                <div className="col-lg-12">
                    <div className="panel panel-default">
                    <div className="panel-heading">ADD CATEGORY</div>
                    <div className="panel-body">
                        <div className="col-md-12">
                        <form className="form-horizontal">
                            <fieldset>
                            {/* Form Name */}
                            {/* <legend>CATEGORY</legend> */}
                            {/* Select Basic */}
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="category_name">CATEGORY NAME</label>
                                <div className="col-md-4">
                                <select id="category_name" name="category_name" className="form-control">
                                </select>
                                </div>
                            </div>
                            {/* Select Basic */}
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="category_name_fr">CATEGORY NAME FR</label>
                                <div className="col-md-4">
                                <select id="category_name_fr" name="category_name_fr" className="form-control">
                                </select>
                                </div>
                            </div>
                            {/* Text input*/}
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="add_date">ADD DATE</label>
                                <div className="col-md-4">
                                <input id="add_date" name="add_date" placeholder="ADD DATE" className="form-control input-md" required type="text" />
                                </div>
                            </div>
                            {/* Text input*/}
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="add_by">ADD BY</label>
                                <div className="col-md-4">
                                <input id="add_by" name="add_by" placeholder="ADD BY" className="form-control input-md" required type="text" />
                                </div>
                            </div>
                            {/* Text input*/}
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="modification_date">MODIFICATION DATE</label>
                                <div className="col-md-4">
                                <input id="modification_date" name="modification_date" placeholder="MODIFICATION DATE" className="form-control input-md" required type="text" />
                                </div>
                            </div>
                            {/* Button */}
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor />
                                <div className="col-md-4">
                                <button id name className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                            </fieldset>
                        </form>
                        </div>
                    </div>
                    </div>
                    {/* /.panel*/}
                    {/* /.panel*/}
                </div>
                {/* /.col*/}
                <div className="col-sm-12">
                    <p className="back-link">FLOWOOD.</p>
                </div>
                </div>
                {/* /.row */}
            </div>

        
      </div>

    );
  }
}

export default App;