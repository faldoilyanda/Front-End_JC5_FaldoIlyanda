import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';


class Home extends Component { 
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
                        <li className="active">Dashboard &amp; Invoice</li>
                    </ol>
                    </div>{/*/.row*/}
                    <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">Dashboard &amp; Invoice</h1>
                    </div>
                    </div>{/*/.row*/}
                    <div className="panel panel-container">
                    <div className="row">
                        <div className="col-xs-6 col-md-3 col-lg-3 no-padding">
                        <div className="panel panel-teal panel-widget border-right">
                            <div className="row no-padding"><em className="fa fa-xl fa-shopping-cart color-blue" />
                            <div className="large">120</div>
                            <div className="text-muted">New Orders</div>
                            </div>
                        </div>
                        </div>
                        <div className="col-xs-6 col-md-3 col-lg-3 no-padding">
                        <div className="panel panel-blue panel-widget border-right">
                            <div className="row no-padding"><em className="fa fa-xl fa-comments color-orange" />
                            <div className="large">52</div>
                            <div className="text-muted">Comments</div>
                            </div>
                        </div>
                        </div>
                        <div className="col-xs-6 col-md-3 col-lg-3 no-padding">
                        <div className="panel panel-orange panel-widget border-right">
                            <div className="row no-padding"><em className="fa fa-xl fa-users color-teal" />
                            <div className="large">24</div>
                            <div className="text-muted">New Users</div>
                            </div>
                        </div>
                        </div>
                        <div className="col-xs-6 col-md-3 col-lg-3 no-padding">
                        <div className="panel panel-red panel-widget ">
                            <div className="row no-padding"><em className="fa fa-xl fa-search color-red" />
                            <div className="large">25.2k</div>
                            <div className="text-muted">Page Views</div>
                            </div>
                        </div>
                        </div>
                    </div>{/*/.row*/}
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-default">
                        <div className="panel-heading">
                        Dashboard &amp; Invoice
                            <ul className="pull-right panel-settings panel-button-tab-right">
                            <li className="dropdown"><a className="pull-right dropdown-toggle" data-toggle="dropdown" href="#">
                                <em className="fa fa-cogs" />
                                </a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                <li>
                                    <ul className="dropdown-settings">
                                    <li><a href="#">
                                        <em className="fa fa-cog" /> Settings 1
                                        </a></li>
                                    <li className="divider" />
                                    <li><a href="#">
                                        <em className="fa fa-cog" /> Settings 2
                                        </a></li>
                                    <li className="divider" />
                                    <li><a href="#">
                                        <em className="fa fa-cog" /> Settings 3
                                        </a></li>
                                    </ul>
                                </li>
                                </ul>
                            </li>
                            </ul>
                            <span className="pull-right clickable panel-toggle panel-button-tab-left"><em className="fa fa-toggle-up" /></span></div>
                        <div className="panel-body">
                            <div className="col-lg-12">
                            <div className="panel panel-default">
                                {/*
                                    <div class="panel-heading">
                                        DataTables Advanced Tables
                                    </div>
                                            */}
                                {/* /.panel-heading */}
                                <div className="panel-body">
                                <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
                                    <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Invoice No #</th>
                                        <th>Name</th>
                                        <th>Balance</th>
                                        <th>Delete</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="odd gradeX">
                                        <td>06/05/2017</td>
                                        <td>INV-001001</td>
                                        <td>Ayu Sekar</td>
                                        <td className="center">$ 152.00</td>
                                        <td className="center">
                                        <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                        <a className="btn btn-primary"><em className="fa fa-print" /></a>
                                        </td>
                                    </tr>
                                    <tr className="odd gradeX">
                                        <td>06/05/2017</td>
                                        <td>INV-001001</td>
                                        <td>Ayu Sekar</td>
                                        <td className="center">$ 152.00</td>
                                        <td className="center">
                                        <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                        <a className="btn btn-primary"><em className="fa fa-print" /></a>
                                        </td>
                                    </tr>
                                    <tr className="odd gradeX">
                                        <td>06/05/2017</td>
                                        <td>INV-001001</td>
                                        <td>Ayu Sekar</td>
                                        <td className="center">$ 152.00</td>
                                        <td className="center">
                                        <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                        <a className="btn btn-primary"><em className="fa fa-print" /></a>
                                        </td>
                                    </tr>
                                    <tr className="odd gradeX">
                                        <td>06/06/2017</td>
                                        <td>INV-001011</td>
                                        <td>Iksan Bai</td>
                                        <td className="center">$ 162.00</td>
                                        <td className="center">
                                        <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                        <a className="btn btn-primary"><em className="fa fa-print" /></a>
                                        </td>
                                    </tr>
                                    <tr className="odd gradeX">
                                        <td>06/05/2017</td>
                                        <td>INV-001012</td>
                                        <td>Esa Adama</td>
                                        <td className="center">$ 252.00</td>
                                        <td className="center">
                                        <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                        <a className="btn btn-primary"><em className="fa fa-print" /></a>
                                        </td>
                                    </tr>
                                    <tr className="odd gradeX">
                                        <td>06/05/2017</td>
                                        <td>INV-001013</td>
                                        <td>Raton ilias</td>
                                        <td className="center">$ 102.00</td>
                                        <td className="center">
                                        <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                        <a className="btn btn-primary"><em className="fa fa-print" /></a>
                                        </td>
                                    </tr>
                                    <tr className="odd gradeX">
                                        <td>06/05/2017</td>
                                        <td>INV-001014</td>
                                        <td>Oki Sd</td>
                                        <td className="center">$ 152.00</td>
                                        <td className="center">
                                        <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                        <a className="btn btn-primary"><em className="fa fa-print" /></a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                {/* /.table-responsive */}
                                <div className="well">
                                    <h4>DataTables Usage Information</h4>
                                    <p>DataTables is a very flexible, advanced tables plugin for jQuery. In SB Admin, we are using a specialized version of DataTables built for Bootstrap 3. We have also customized the table headings to use Font Awesome icons in place of images. For complete documentation on DataTables, visit their website at <a target="_blank" href="https://datatables.net/">https://datatables.net/</a>.</p>
                                    <a className="btn btn-default btn-lg btn-block" target="_blank" href="https://datatables.net/">View DataTables Documentation</a>
                                </div>
                                </div>
                                {/* /.panel-body */}
                            </div>
                            {/* /.panel */}
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>{/*/.row*/}
                    {/*/.row*/}		{/*/.row*/}
                </div>


            </div>
        );
    } 
}
export default Home;