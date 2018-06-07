import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component { 
    render() {
        return (
            <div>
                
                <div id="sidebar-collapse" className="col-sm-3 col-lg-2 sidebar">
                    <div className="profile-sidebar">
                    <div className="profile-userpic">
                        <img src="http://placehold.it/50/30a5ff/fff" className="img-responsive" alt />
                    </div>
                    <div className="profile-usertitle">
                        <div className="profile-usertitle-name">Faldo Ilyanda</div>
                        <div className="profile-usertitle-status"><span className="indicator label-success" />Online</div>
                    </div>
                    <div className="clear" />
                    </div>
                    <div className="divider" />
                    <form role="search">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search" />
                    </div>
                    </form>
                    <ul className="nav menu">
                    <li className="active"><Link to="/"><em className="fa fa-dashboard">&nbsp;</em> Dashboard &amp; Invoice</Link></li>
                    <li><a href="Editproduct"><em className="fa fa-calendar">&nbsp;</em> Edit Product</a></li>
                    
                    <li><a href="Addcategory"><em className="fa fa-toggle-off">&nbsp;</em> Add Category</a></li>
                    <li><a href="Addproduct"><em className="fa fa-clone">&nbsp;</em> Add Product</a></li>
                    
                    <ul className="children collapse" id="sub-item-1">
                        <li><a className href="#">
                            <span className="fa fa-arrow-right">&nbsp;</span> Sub Item 1
                        </a></li>
                        <li><a className href="#">
                            <span className="fa fa-arrow-right">&nbsp;</span> Sub Item 2
                        </a></li>
                        <li><a className href="#">
                            <span className="fa fa-arrow-right">&nbsp;</span> Sub Item 3
                        </a></li>
                    </ul>
                    <li><a href="Login"><em className="fa fa-power-off">&nbsp;</em> Logout</a></li>
                    </ul>
                </div>

            </div>
        );
    } 
}
export default Sidebar;