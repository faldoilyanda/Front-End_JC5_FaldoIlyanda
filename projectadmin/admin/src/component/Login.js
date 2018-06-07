import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Header from './Header'; 
import Sidebar from './Sidebar';


class App extends Component {
  render() {
    return (
      <div>


            <div className="row">
                <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4">
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">Log in</div>
                    <div className="panel-body">
                    <form role="form">
                        <fieldset>
                        <div className="form-group">
                            <input className="form-control" placeholder="E-mail" name="email" type="email" autofocus />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Password" name="password" type="password" defaultValue />
                        </div>
                        <div className="checkbox">
                            <label>
                            <input name="remember" type="checkbox" defaultValue="Remember Me" />Remember Me
                            </label>
                        </div>
                        <Link to="/" className="btn btn-primary">Login</Link></fieldset>
                    </form>
                    </div>
                </div>
                </div>
                {/* /.col*/}
            </div>
        
      </div>

    );
  }
}

export default App;