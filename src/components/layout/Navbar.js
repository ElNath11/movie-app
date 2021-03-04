import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-info mb-5">
                <div className="container">
                <div className="navbar-header">
                    <Link className="navbar-brand text-white text-lg brand-text" to="/">
                    Home
                    </Link>
                </div>
                <ul className="navbar-nav ml-auto text-light d-inline-block">
                    <li className="nav-item d-inline-block mr-4">
                        Kresnata Adi Surya for Stockbit
                    </li>
                </ul>
                </div>
            </nav>
            </div>
        )
    }
}
