import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Header from './Header'; 
import Footer from './Footer'; 


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        

            <div className="container">
                <div className="row">
                <div className="col-xs-12">
                    <div className="invoice-title">
                    <h3>Invoice</h3>
                    <p>
                        <button type="button" class="btn btn-default btn-sm">Email</button>
                        <button type="button" class="btn btn-default btn-sm">Print</button>
                    </p>
                    <h4 className="pull-right">Order Id # hxs1234567</h4>
                    </div>
                    <hr />
                    <div className="row">
                    <div className="col-xs-6">
                        <address>
                        <strong>Billed To:</strong><br />
                        Ayu Sekar Tanjung<br />
                        ayusekartanjung@gmail.com
                        </address>
                    </div>
                    <div className="col-xs-6 text-right">
                        <address>
                        <strong>Shipped To:</strong><br />
                        BDB Bogor raya, No 2, Block A6 <br />
                        Bogor, East Jave<br />
                        Indonesia, 390023
                        </address>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-xs-6">
                        <address>
                        <strong>Payment Method:</strong><br />
                        <br />
                        </address>
                    </div>
                    <div className="col-xs-6 text-right">
                        <address>
                        <strong>Order Date:</strong><br />
                        March 7th, 2018<br /><br />
                        </address>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title"><strong>Order summary</strong></h3>
                    </div>
                    <div className="panel-body">
                        <div className="table-responsive">
                        <table className="table table-condensed">
                            <thead>
                            <tr>
                                <td><strong>Medication</strong></td>
                                <td className="text-center"><strong>Strength</strong></td>
                                <td className="text-center"><strong>Quantity</strong></td>
                                <td className="text-right"><strong>Price</strong></td>
                            </tr>
                            </thead>
                            <tbody>
                            {/* foreach ($order->lineItems as $line) or some such thing here */}
                            <tr>
                                <td>Crosin</td>
                                <td className="text-center">100 mg</td>
                                <td className="text-center">10</td>
                                <td className="text-right">30 INR</td>
                            </tr>
                            <tr>
                                <td>Paracetamol</td>
                                <td className="text-center">20 mg</td>
                                <td className="text-center">3</td>
                                <td className="text-right">50 INR</td>
                            </tr>
                            <tr>
                                <td className="thick-line" />
                                <td className="thick-line" />
                                <td className="thick-line text-center"><strong>Subtotal</strong></td>
                                <td className="thick-line text-right">80 INR</td>
                            </tr>
                            <tr>
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line text-center"><strong>Shipping</strong></td>
                                <td className="no-line text-right">15 INR</td>
                            </tr>
                            <tr>
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line text-center"><strong>Total</strong></td>
                                <td className="no-line text-right">95 INR</td>
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