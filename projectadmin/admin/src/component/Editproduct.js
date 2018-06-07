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
                    <li className="active" data_temp_dwid={1}>Edit Product</li>
                </ol>
                </div>
                {/*/.row*/}
                <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">Edit Product</h1>
                </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                    <div className="panel-heading">
                        Site Traffic Overview
                        <ul className="pull-right panel-settings panel-button-tab-right">
                        <li className="dropdown"><a className="pull-right dropdown-toggle" data-toggle="dropdown" href="#">
                            <em className="fa fa-cogs" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-right">
                            <li>
                                <ul className="dropdown-settings">
                                <li><a href="#">
                                    <em className="fa fa-cog" /> Edit Product
                                    </a></li>
                                <li className="divider" />
                                <li><a href="#">
                                    <em className="fa fa-cog" /> Edit Category
                                    </a></li>
                                <li className="divider" />
                                <li><a href="#">
                                    <em className="fa fa-cog" /> Settings 
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
                            {/* <div class="panel-heading">
                                    DataTables Advanced Tables
                            </div> */}
                            {/* /.panel-heading */}
                            <div className="panel-body">
                            <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                <tr>
                                    <th>Rendering engine</th>
                                    <th>Browser</th>
                                    <th>Platform(s)</th>
                                    <th>Engine version</th>
                                    <th>CSS grade</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="odd gradeX">
                                    <td>Trident</td>
                                    <td>Internet Explorer 4.0</td>
                                    <td>Win 95+</td>
                                    <td className="center">4</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="even gradeC">
                                    <td>Trident</td>
                                    <td>Internet Explorer 5.0</td>
                                    <td>Win 95+</td>
                                    <td className="center">5</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="odd gradeA">
                                    <td>Trident</td>
                                    <td>Internet Explorer 5.5</td>
                                    <td>Win 95+</td>
                                    <td className="center">5.5</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="even gradeA">
                                    <td>Trident</td>
                                    <td>Internet Explorer 6</td>
                                    <td>Win 98+</td>
                                    <td className="center">6</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="odd gradeA">
                                    <td>Trident</td>
                                    <td>Internet Explorer 7</td>
                                    <td>Win XP SP2+</td>
                                    <td className="center">7</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="even gradeA">
                                    <td>Trident</td>
                                    <td>AOL browser (AOL desktop)</td>
                                    <td>Win XP</td>
                                    <td className="center">6</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Gecko</td>
                                    <td>Firefox 1.0</td>
                                    <td>Win 98+ / OSX.2+</td>
                                    <td className="center">1.7</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Gecko</td>
                                    <td>Firefox 1.5</td>
                                    <td>Win 98+ / OSX.2+</td>
                                    <td className="center">1.8</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Gecko</td>
                                    <td>Firefox 2.0</td>
                                    <td>Win 98+ / OSX.2+</td>
                                    <td className="center">1.8</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Gecko</td>
                                    <td>Firefox 3.0</td>
                                    <td>Win 2k+ / OSX.3+</td>
                                    <td className="center">1.9</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Gecko</td>
                                    <td>Camino 1.0</td>
                                    <td>OSX.2+</td>
                                    <td className="center">1.8</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Gecko</td>
                                    <td>Camino 1.5</td>
                                    <td>OSX.3+</td>
                                    <td className="center">1.8</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Gecko</td>
                                    <td>Netscape 7.2</td>
                                    <td>Win 95+ / Mac OS 8.6-9.2</td>
                                    <td className="center">1.7</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Gecko</td>
                                    <td>Netscape Browser 8</td>
                                    <td>Win 98SE+</td>
                                    <td className="center">1.7</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Gecko</td>
                                    <td>Netscape Navigator 9</td>
                                    <td>Win 98+ / OSX.2+</td>
                                    <td className="center">1.8</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Gecko</td>
                                    <td>Mozilla 1.0</td>
                                    <td>Win 95+ / OSX.1+</td>
                                    <td className="center">1</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Gecko</td>
                                    <td>Mozilla 1.1</td>
                                    <td>Win 95+ / OSX.1+</td>
                                    <td className="center">1.1</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Gecko</td>
                                    <td>Mozilla 1.2</td>
                                    <td>Win 95+ / OSX.1+</td>
                                    <td className="center">1.2</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Gecko</td>
                                    <td>Mozilla 1.3</td>
                                    <td>Win 95+ / OSX.1+</td>
                                    <td className="center">1.3</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Gecko</td>
                                    <td>Mozilla 1.4</td>
                                    <td>Win 95+ / OSX.1+</td>
                                    <td className="center">1.4</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Gecko</td>
                                    <td>Mozilla 1.5</td>
                                    <td>Win 95+ / OSX.1+</td>
                                    <td className="center">1.5</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Gecko</td>
                                    <td>Mozilla 1.6</td>
                                    <td>Win 95+ / OSX.1+</td>
                                    <td className="center">1.6</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Gecko</td>
                                    <td>Mozilla 1.7</td>
                                    <td>Win 98+ / OSX.1+</td>
                                    <td className="center">1.7</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Gecko</td>
                                    <td>Mozilla 1.8</td>
                                    <td>Win 98+ / OSX.1+</td>
                                    <td className="center">1.8</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Gecko</td>
                                    <td>Seamonkey 1.1</td>
                                    <td>Win 98+ / OSX.2+</td>
                                    <td className="center">1.8</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Gecko</td>
                                    <td>Epiphany 2.20</td>
                                    <td>Gnome</td>
                                    <td className="center">1.8</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Webkit</td>
                                    <td>Safari 1.2</td>
                                    <td>OSX.3</td>
                                    <td className="center">125.5</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Webkit</td>
                                    <td>Safari 1.3</td>
                                    <td>OSX.3</td>
                                    <td className="center">312.8</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Webkit</td>
                                    <td>Safari 2.0</td>
                                    <td>OSX.4+</td>
                                    <td className="center">419.3</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Webkit</td>
                                    <td>Safari 3.0</td>
                                    <td>OSX.4+</td>
                                    <td className="center">522.1</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Webkit</td>
                                    <td>OmniWeb 5.5</td>
                                    <td>OSX.4+</td>
                                    <td className="center">420</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Webkit</td>
                                    <td>iPod Touch / iPhone</td>
                                    <td>iPod</td>
                                    <td className="center">420.1</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Webkit</td>
                                    <td>S60</td>
                                    <td>S60</td>
                                    <td className="center">413</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Presto</td>
                                    <td>Opera 7.0</td>
                                    <td>Win 95+ / OSX.1+</td>
                                    <td className="center">-</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Presto</td>
                                    <td>Opera 7.5</td>
                                    <td>Win 95+ / OSX.2+</td>
                                    <td className="center">-</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Presto</td>
                                    <td>Opera 8.0</td>
                                    <td>Win 95+ / OSX.2+</td>
                                    <td className="center">-</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Presto</td>
                                    <td>Opera 8.5</td>
                                    <td>Win 95+ / OSX.2+</td>
                                    <td className="center">-</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Presto</td>
                                    <td>Opera 9.0</td>
                                    <td>Win 95+ / OSX.3+</td>
                                    <td className="center">-</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Presto</td>
                                    <td>Opera 9.2</td>
                                    <td>Win 88+ / OSX.3+</td>
                                    <td className="center">-</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Presto</td>
                                    <td>Opera 9.5</td>
                                    <td>Win 88+ / OSX.3+</td>
                                    <td className="center">-</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Presto</td>
                                    <td>Opera for Wii</td>
                                    <td>Wii</td>
                                    <td className="center">-</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
                                    </td>
                                </tr>
                                <tr className="gradeA">
                                    <td>Presto</td>
                                    <td>Nokia N800</td>
                                    <td>N800</td>
                                    <td className="center">-</td>
                                    <td className="center">
                                    <a className="btn btn-default"><em className="fa fa-pencil" /></a>
                                    <a className="btn btn-danger"><em className="fa fa-trash" /></a>
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
            </div>

        
      </div>

    );
  }
}

export default App;