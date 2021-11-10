import { Link } from "react-router-dom"
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
 import './nav.css';
import React from "react";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark justify-content-center p-md-2 px-md-4 " >
            {/* <a className="navbar-brand"><img src="Image1.png" />
             Company</a> */}
            <a href='#' className="navbar-brand"><i>Projects</i></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navvy">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navvy">
                <ul className="navbar-nav p-2  ">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/tata">Tour</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/reviews">Reviews</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/accord">Accord</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/menu">Menu</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/tab">Tab</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/grocery" className="nav-link">Grocery Bud</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/nav">Navbar</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sidebar">Sidebar</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/stripe">Stripe</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart">Cart</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;