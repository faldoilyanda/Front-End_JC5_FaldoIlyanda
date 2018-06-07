import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Header from './Header'; 
import Footer from './Footer'; 


class App extends Component {
  render() {
    return (
      <div>
        <Header/>

            <div className="container" style={{fontFamily: 'sans-serif'}}>
                <div className="row">
                <div className="panel panel-default">
                    <div className="panel-heading">
                    <h5>USER PROFILE</h5></div>
                    <div className="panel-body">
                    <div className="col-md-4 col-xs-12 col-sm-6 col-lg-4">
                        <img alt="User Pic" src="img/profile.png" id="profile-image1" className="img-responsive" />
                    </div>
                    <div className="col-md-8 col-xs-12 col-sm-6 col-lg-8">
                        <div className="container">
                        <h3>FALDO ILYANDA</h3>
                        <p>an <b> flowood.</b></p>
                        </div>
                        <hr />
                        <ul className="container details">
                        <li>
                            <p><span className="glyphicon glyphicon-user one" style={{width: 50}} />faldo.flowood</p>
                        </li>
                        <li>
                            <p><span className="glyphicon glyphicon-envelope one" style={{width: 50}} />faldo@flowood.com</p>
                        </li>
                        </ul>
                        <hr />
                        <div className="col-sm-5 col-xs-6 tital ">Date Of Joining: 15 Jun 2018</div>
                        <br /><br />
                        <div className="btn_form">
                        <a href="#" className="add-cart item_add">EDIT</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="panel panel-default">
                    <div className="panel-heading">
                    <h5>MY HISTORY</h5></div>
                    <div className="container">
                    <div className="row">
                        <div className="span5">
                        <table className="table table-striped table-condensed">
                            <thead>
                            <tr>
                                <th>Invoice Name</th>
                                <th>Date</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Donna R. Folse</td>
                                <td>2012/05/06</td>
                                <td>Editor</td>
                                <td><span className="label label-success">Active</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Emily F. Burns</td>
                                <td>2011/12/01</td>
                                <td>Staff</td>
                                <td><span className="label label-important">Banned</span></td>
                            </tr>
                            <tr>
                                <td>Andrew A. Stout</td>
                                <td>2010/08/21</td>
                                <td>User</td>
                                <td><span className="label">Inactive</span></td>
                            </tr>
                            <tr>
                                <td>Mary M. Bryan</td>
                                <td>2009/04/11</td>
                                <td>Editor</td>
                                <td><span className="label label-warning">Pending</span></td>
                            </tr>
                            <tr>
                                <td>Mary A. Lewis</td>
                                <td>2007/02/01</td>
                                <td>Staff</td>
                                <td><span className="label label-success">Active</span></td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
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