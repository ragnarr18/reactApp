import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import RegionForm from './RegionForm';

function Nav() {    
    return (
        <nav>
            <ul className="nav-links">
                <Link to="/">
                    <h3> Logo</h3>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>

                <Link to="/shop">
                    <li>Shop</li>
                </Link>
                <RegionForm></RegionForm>  
            </ul>
        </nav>
    );
  }

export default Nav;