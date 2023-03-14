import React from "react";
import './Navbar.css'

import { Link } from "react-router-dom";



const Navbar = props => (
    <div className="Navbar">
        <nav>
            <ul>
                <li>
                    <Link to ='/home'>Início</Link>
                </li>
                <li>
                <Link to ='/sobre-nos'>Sobre</Link>
                </li>
                <li>
                <Link to ='/login'>Login</Link>
                </li>
            </ul>
        </nav>
    </div>
)

export default Navbar 